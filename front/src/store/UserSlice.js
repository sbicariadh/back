import { createSlice } from '@reduxjs/toolkit'



const UserSlice = createSlice({
  name: 'user',
  initialState:[{
    name:'ri',
    email:'@',
    password:'111',
    role:'user',
    phone:'gg',
    id:''
    


  }],
  reducers: {
    setUser:(state,action)=>{
        return action.payload
    }
  }
});

export const {setUser} = UserSlice.actions

export default UserSlice.reducer