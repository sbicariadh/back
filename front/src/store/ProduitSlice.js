import { createSlice } from '@reduxjs/toolkit'



const ProduitSlice = createSlice({
  name: 'produit',
  initialState:[{
     name:'vane',
     description:'ijhgybdb  trfesydtr yrdrdft_ uftrdrtg iouhuydr(',
     image:'https://upload.wikimedia.org/wikipedia/commons/1/1d/Valve.jpg',
     price:'000'
  }],
  reducers: {
    setProduit:(state,action)=>{
        return action.payload
    }
  }
});

export const {setProduit} = ProduitSlice.actions

export default ProduitSlice.reducer