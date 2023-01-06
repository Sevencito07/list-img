import { createSlice } from "@reduxjs/toolkit";

const initialState=[{
    id:1,
    newImageURl: 'https://th.bing.com/th/id/OIP.6yQKDgWv8MqfANZUGRzVVgHaHa?pid=ImgDet&w=207&h=207&c=7',
}]

const testSlice  = createSlice({
    name :"test",
    initialState,
    reducers:{
        addImage:(state, action)=>{
         state.push(action.payload)
        },
        deleteImage:(state, action)=>{
            const findImage = state.find((test)=> test.id === action.payload )
            if(findImage){
                state.splice(state.indexOf(findImage), 1)
            }
        }

    }

})
console.log(initialState)
export const {addImage, deleteImage}  = testSlice.actions;
export default testSlice.reducer