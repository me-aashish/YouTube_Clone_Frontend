import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: "search",

    // initial state is an empty object
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            
        }
    }
})


export const { cacheResults } = searchSlice.actions

export default searchSlice.reducer;