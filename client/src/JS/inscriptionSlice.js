import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getinscription = createAsyncThunk("inscription/get", async (req, res) => {
  try {
    let result = axios.get("http://localhost:5000/inscription/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const addinscription = createAsyncThunk("inscription/add", async (newinscription) => {
  try {
    let result = axios.post("http://localhost:5000/inscription/add", newinscription);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const deleteinscription = createAsyncThunk("inscription/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/inscription/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const editinscription = createAsyncThunk("inscription/edit", async ({ id, edit }) => {
  try {
    let result = axios.put(`http://localhost:5000/inscription/${id}`, edit);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  inscriptionList: null,
  status: null,
};

export const inscriptionSlice = createSlice({
  name: "inscription",
  initialState,
  reducers: {},
  extraReducers: {
    [getinscription.pending]: (state) => {
      state.status = "pending";
    },
    [getinscription.fulfilled]: (state, action) => {
      state.status = "success";
      state.inscriptionList = action.payload.data.inscription;
    },
    [getinscription.rejected]: (state) => {
      state.status = "fail";
    },
    [addinscription.pending]: (state) => {
      state.status = "pending";
    },
    [addinscription.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [addinscription.rejected]: (state) => {
      state.status = "fail";
    },
    [deleteinscription.pending]: (state) => {
      state.status = "pending";
    },
    [deleteinscription.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [deleteinscription.rejected]: (state) => {
      state.status = "fail";
    },
    [editinscription.pending]: (state) => {
      state.status = "pending";
    },
    [editinscription.fulfilled]: (state, action) => {
      state.status = "success";
    },
    [editinscription.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default inscriptionSlice.reducer;