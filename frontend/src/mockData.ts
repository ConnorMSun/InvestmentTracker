// Mock investment data for dashboard

export const mockInvestmentSummary = {
  totalValue: 25000,
  roi: 0.12, // 12%
  benchmark: {
    name: 'S&P 500',
    roi: 0.09, // 9%
  },
  sectorAllocation: [
    { sector: 'Technology', value: 9000 },
    { sector: 'Healthcare', value: 4000 },
    { sector: 'Finance', value: 3500 },
    { sector: 'Consumer Goods', value: 3000 },
    { sector: 'Energy', value: 2500 },
    { sector: 'Other', value: 1000 },
  ],
};

export const mockTransactions = [
  { date: '2024-01-15', type: 'Buy', asset: 'AAPL', amount: 10, price: 170 },
  { date: '2024-02-10', type: 'Buy', asset: 'JNJ', amount: 5, price: 160 },
  { date: '2024-03-05', type: 'Sell', asset: 'TSLA', amount: 2, price: 700 },
  { date: '2024-04-01', type: 'Buy', asset: 'MSFT', amount: 8, price: 320 },
]; 