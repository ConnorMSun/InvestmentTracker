import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

import { Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

function Dashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:4000/api/investments')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Box p={4}><Typography>Loading...</Typography></Box>;
  if (error) return <Box p={4}><Typography color="error">Error: {error}</Typography></Box>;
  if (!data) return null;

  const { totalValue, roi, benchmark, sectorAllocation } = data;

  return (
    <Box width="100%">
      <Box display="flex" width="100%" gap={2}>
        <Box flex={1} textAlign="left">
          <Card sx={{ minHeight: 120 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" fontSize={{ xs: 22, sm: 28, md: 32 }}>Total Value</Typography>
              <Typography variant="h3" fontSize={{ xs: 28, sm: 36, md: 44 }}>${totalValue.toLocaleString()}</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box flex={1} textAlign="center">
          <Card sx={{ minHeight: 120 }}>
            <CardContent>
              <Typography variant="h5" fontSize={{ xs: 22, sm: 28, md: 32 }}>ROI</Typography>
              <Typography variant="h3" fontSize={{ xs: 28, sm: 36, md: 44 }}>{(roi * 100).toFixed(2)}%</Typography>
            </CardContent>
          </Card>
        </Box>
        <Box flex={1} textAlign="right">
          <Card sx={{ minHeight: 120 }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h5" fontSize={{ xs: 22, sm: 28, md: 32 }}>Benchmark ({benchmark.name})</Typography>
              <Typography variant="h3" fontSize={{ xs: 28, sm: 36, md: 44 }}>{(benchmark.roi * 100).toFixed(2)}%</Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box mt={4}>
        {/* Placeholder for sector allocation chart (e.g., pie chart) */}
        <Card>
          <CardContent>
            <Typography variant="h5" fontSize={{ xs: 22, sm: 28, md: 32 }}>Sector Allocation</Typography>
            <Typography color="text.secondary">[Pie chart will go here]</Typography>
            <Grid container spacing={1}>
              {sectorAllocation.map((s: any) => (
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={s.sector}>
                  <Typography fontSize={{ xs: 16, sm: 18, md: 20 }}>
                    <b>{s.sector}</b>: ${s.value.toLocaleString()}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Box mt={4}>
        {/* Placeholder for Connect to Wells Fargo button and data loading/error states */}
        <Card>
          <CardContent>
            <Typography color="text.secondary">[Connect to Wells Fargo button will go here]</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

function Chat() {
  // Mock chat messages
  const mockMessages = [
    { sender: 'user', text: 'How is my portfolio performing this month?' },
    { sender: 'gpt', text: 'Your portfolio is up 2.3% this month, outperforming the S&P 500 by 0.5%.' },
    { sender: 'user', text: 'Which sector is my best performer?' },
    { sender: 'gpt', text: 'Technology is your best performing sector, up 5% this month.' },
  ];

  return (
    <Box display="flex" justifyContent="center" width="100%">
      <Box
        display="flex"
        flexDirection="column"
        height={{ xs: '70vh', md: '60vh' }}
        mt={4}
        width="100%"
        maxWidth={900}
        mr={{ xs: 2, sm: 8, md: 12, lg: 20 }}
      >
        <Box
          flex={1}
          overflow="auto"
          mb={2}
          p={4}
          border={1}
          borderColor="grey.300"
          borderRadius={3}
          bgcolor="#fafafa"
          minHeight={200}
          width="100%"
        >
          {mockMessages.map((msg, idx) => (
            <Box key={idx} mb={2} textAlign={msg.sender === 'user' ? 'right' : 'left'}>
              <Typography variant="body1" fontSize={{ xs: 16, sm: 18, md: 20 }} color={msg.sender === 'user' ? 'primary' : 'secondary'}>
                <b>{msg.sender === 'user' ? 'You' : 'GPT'}:</b> {msg.text}
              </Typography>
            </Box>
          ))}
        </Box>
        {/* Placeholder for chat input and send button */}
        <Box display="flex" gap={1} width="100%">
          <input style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc', fontSize: 18, width: '100%' }} placeholder="Type your question..." disabled />
          <Button variant="contained" disabled sx={{ minWidth: 80, fontSize: { xs: 14, sm: 16, md: 18 } }}>Send</Button>
        </Box>
        {/* In the future, connect to ChatGPT API and pass investment data context here */}
      </Box>
    </Box>
  );
}

function Settings() {
  return (
    <Box maxWidth={600} mx="auto" mt={4} px={2}>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>API Keys</Typography>
          <Typography color="text.secondary">OpenAI API Key:</Typography>
          <input style={{ width: '100%', marginBottom: 16, padding: 8 }} placeholder="sk-..." disabled />
          <Typography color="text.secondary">Wells Fargo Client ID:</Typography>
          <input style={{ width: '100%', marginBottom: 16, padding: 8 }} placeholder="Your Client ID" disabled />
        </CardContent>
      </Card>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Account Linking</Typography>
          <Typography color="text.secondary">Wells Fargo Account:</Typography>
          <Button variant="contained" disabled sx={{ mt: 1 }}>Connect Account</Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>Theme</Typography>
          <Button variant="outlined" disabled>Toggle Dark Mode</Button>
        </CardContent>
      </Card>
    </Box>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static" sx={{ width: '100%' }}>
        <Container maxWidth={false} disableGutters sx={{ px: { xs: 0.5, sm: 2 } }}>
          <Toolbar sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', py: { xs: 2, sm: 0 }, px: 0 }}>
            <Box flex={1} display="flex" alignItems="center">
              <Typography
                variant="h3"
                fontSize={{ xs: 28, sm: 36, md: 48, lg: 56 }}
                sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 1 }}
                color="inherit"
              >
                Investment Tracker
              </Typography>
            </Box>
            <Box display="flex" gap={2} width={{ xs: '100%', sm: 'auto' }} mt={{ xs: 2, sm: 0 }}>
              <Button color="inherit" component={Link} to="/" sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}>Dashboard</Button>
              <Button color="inherit" component={Link} to="/chat" sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}>Chat</Button>
              <Button color="inherit" component={Link} to="/settings" sx={{ fontSize: { xs: 16, sm: 18, md: 20 } }}>Settings</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Remove Container for Dashboard route to allow full width */}
      <Box mt={4} width="100%">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
