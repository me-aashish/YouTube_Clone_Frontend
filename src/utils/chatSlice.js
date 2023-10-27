import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addChatMessages : (state, action) => {
            state.messages.push(actions.payload)
        }
    }
})

export const { addChatMessages } = chatSlice.actions;

export default chatSlice.reducer;