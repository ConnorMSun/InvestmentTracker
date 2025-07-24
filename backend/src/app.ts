import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Placeholder: Get mock investment data
app.get('/api/investments', (req, res) => {
  res.json({
    totalValue: 25000,
    roi: 0.12,
    benchmark: { name: 'S&P 500', roi: 0.09 },
    sectorAllocation: [
      { sector: 'Technology', value: 9000 },
      { sector: 'Healthcare', value: 4000 },
      { sector: 'Finance', value: 3500 },
      { sector: 'Consumer Goods', value: 3000 },
      { sector: 'Energy', value: 2500 },
      { sector: 'Other', value: 1000 },
    ],
  });
});

// Placeholder: Chat endpoint
app.post('/api/chat', (req, res) => {
  // In the future, send req.body to OpenAI API
  res.json({
    reply: "This is a mock response from ChatGPT."
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
