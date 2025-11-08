import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStudent: null,
    loading: false,
    error: false,
}

const studentSlice = createSlice({
    name: "st",
    initialState,
    reducers: {
        studentSelected: (state, action) => {
            state.currentStudent = action.payload;
            state.loading = false;
            state.error = false;
        }
    }
});

export const { studentSelected } = studentSlice.actions;
export default studentSlice.reducer;