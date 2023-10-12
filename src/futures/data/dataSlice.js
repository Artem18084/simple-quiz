import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Создаем thunk для асинхронного запроса данных
export const fetchData = createAsyncThunk("data/fetchData", async function () {
  const response = await fetch("/db.json");
  const data = await response.json();
  return data;
});

// Создаем slice
const dataSlice = createSlice({
  name: "data",
  initialState: {
    // начальное состояние, когда данные еще не загружены
    questions: [],
    status: "idle", // idle, pending, fulfilled, rejected
    error: null,
  },
  reducers: {// написати метод який буде пройдено// 
},
  extraReducers: (builder) => {
    // Обработка различных состояний thunk
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.questions = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

// Экспортируем reducer и actions
export default dataSlice.reducer;
