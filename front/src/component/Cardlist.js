import React,{useEffect }from 'react';
import Cardd from './Cardd';
import { useSelector,useDispatch } from 'react-redux';
import { fetchproduit } from '../api/Produitapi';
import { setProduit } from '../store/ProduitSlice';




const Cardlist = () => {
    const dispatch =useDispatch()
    const vanne = useSelector(state=>state.produit)
    const GetProduit = async() =>{
      const data = await fetchproduit()
     
      dispatch (setProduit(data.produits))
      console.log('data',data)

    }
    useEffect(()=>{
  GetProduit()

},[])


  return (
    <div>
{vanne.map((e)=> ( <Cardd produit ={e} />))}
        

    </div>
  )
}

export default Cardlist