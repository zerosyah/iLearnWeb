import { createSlice } from "@reduxjs/toolkit";
//import { Student } from "../../Constants/PropsInventory";

const initialState = {
    studentData: null,
    loading: false,
    error: false,
}

const studentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        setStudentData: (state, action) => {
            state.studentData = action.payload;
            state.loading = false;
            state.error = false;
        },
        resetSelection: (state)=>{
            state.studentData = null;
            state.error = false;
            state.loading = false;
        }
    }
});

export const { setStudentData, resetSelection } = studentSlice.actions;
export default studentSlice.reducer;