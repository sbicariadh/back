import { configureStore } from '@reduxjs/toolkit';
import ProduitSlice from './ProduitSlice';
import UserSlice from './UserSlice';
export default configureStore({
     reducer:{
        produit:ProduitSlice,
        user:UserSlice,
     }

      })
