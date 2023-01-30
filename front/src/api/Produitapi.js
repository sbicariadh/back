import axios from "axios";

export const fetchproduit=async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/produit/allproduits`);
    return data
    console.log('data',data)
}
export const deleteProduit= async (id) => {

    const deleteproduit = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/produit/deleteproduit/${id}`)
}
export const postproduit = async (values) => {
    const addproduit = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/produit/ajoutproduit`, { ...values })
}

// fetchproduit