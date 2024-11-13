import { configureStore, createSlice } from "@reduxjs/toolkit";

// Sample data structure for the barbershop
const initialState = {
  dailyStats: {
    totalIncome: 0,
    servicesProvided: 0,
    tips: 0,
  },
  monthlyStats: {
    totalIncome: 0,
    servicesProvided: 0,
    tips: 0,
  },
  barbersPerformance: [
    { id: 1, name: "John Doe", clientsServed: 50, totalRevenue: 500 },
    { id: 2, name: "Jane Smith", clientsServed: 40, totalRevenue: 400 },
  ],
  topCustomers: [
    { id: 1, name: "Customer A", visits: 10, totalSpent: 150 },
    { id: 2, name: "Customer B", visits: 8, totalSpent: 120 },
  ],
};

const barbershopSlice = createSlice({
  name: "barbershop",
  initialState,
  reducers: {
    setDailyStats: (state, action) => {
      state.dailyStats = action.payload;
    },
    setMonthlyStats: (state, action) => {
      state.monthlyStats = action.payload;
    },
    setBarbersPerformance: (state, action) => {
      state.barbersPerformance = action.payload;
    },
    setTopCustomers: (state, action) => {
      state.topCustomers = action.payload;
    },
  },
});

export const {
  setDailyStats,
  setMonthlyStats,
  setBarbersPerformance,
  setTopCustomers,
} = barbershopSlice.actions;

export default configureStore({
  reducer: {
    barbershop: barbershopSlice.reducer,
  },
});
