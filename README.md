# Investment Tracker

A web application to track and analyze your investments with fine granularity, using Wells Fargo's API and ChatGPT for insights.

## Prerequisites
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

## Project Structure
```
InvestmentTracker/
  backend/    # Node.js + Express + TypeScript server
  frontend/   # React + Vite + TypeScript client
```

---

## Backend Setup (Server)

1. **Install dependencies:**
   ```sh
   cd backend
   npm install
   ```

2. **Environment variables:**
   - Copy `.env.example` to `.env` (if provided) and fill in any required values.
   - For development, you may not need to set anything yet.

3. **Run the server:**
   ```sh
   npx ts-node src/app.ts
   ```
   The server will start on [http://localhost:4000](http://localhost:4000)

---

## Frontend Setup (React App)

1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

---

## Usage
- The frontend will fetch investment data and chat responses from the backend.
- You can develop and test with mock data until API keys are set up.

---

## Notes
- Make sure both the backend and frontend servers are running for full functionality.
- For API integration (Wells Fargo, OpenAI), see the code comments and future documentation.

---

## License
MIT 