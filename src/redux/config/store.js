import {configureStore} from "@reduxjs/toolkit"
import  ContentSlice  from "../../slice/contentSlice"

export const store = configureStore({

    reducer:{
        content:ContentSlice,
    }
})