import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { productService } from "./productService";

export const getAllProducts = createAsyncThunk(
    "product/get",
    async(userData, thunkAPI) => {
        try{
            return await productService.getProducts;
        } catch(error) {
            return thunkAPI.rejectWithValue(error)
        }
})

const productState = {
    product:'',
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}

export const productSlice = createSlice({
    name:"product",
    initialState: productState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(getAllProducts.pending,(state) => {
                state.isLoading = true;
            }).addCase(getAllProducts.fulfilled,(state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess= true;
                state.product = action.payload;
            }).addCase(getAllProducts.rejected,(state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.isSuccess= false;
                state.message = action.error;
            })
            
    }
})

export default productSlice.reducer;