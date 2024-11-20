import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeUsers: 3000,
  engagementStats: "Logins: 5/week on average.",
  feedback: [
    "Great service, very professional!",
    "Needs improvement in appointment scheduling.",
    "Staff was very friendly and efficient.",
    "Pricing could be more competitive.",
  ],
};

const userAnalyticsSlice = createSlice({
  name: "userAnalytics",
  initialState,
  reducers: {
    setActiveUsers(state, action) {
      state.activeUsers = action.payload;
    },
    setEngagementStats(state, action) {
      state.engagementStats = action.payload;
    },
    setFeedback(state, action) {
      state.feedback = action.payload;
    },
    addFeedback(state, action) {
      state.feedback.push(action.payload);
    },
  },
});

export const { setActiveUsers, setEngagementStats, setFeedback, addFeedback } =
  userAnalyticsSlice.actions;

export default userAnalyticsSlice.reducer;
