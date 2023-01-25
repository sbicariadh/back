import axios from "axios";

export const fetchproduit=async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/produit/allproduits`);
    return data
    console.log('data',data)
}

// fetchproduit