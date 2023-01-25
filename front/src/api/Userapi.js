import axios from 'axios'

export const fetchuser=async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/getuser`);
    return data
    console.log('data',data)
}
export const postuser = async (values) => {
    const posteduser = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/user/register`, { ...values })
}
export const deleteUserr = async (id) => {

    const deleteUser = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/user/deleteuser/${id}`)
}
