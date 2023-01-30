import React,{useEffect} from 'react'
import Usercards from './Usercards'
import {fetchuser} from '../api/Userapi'
import {setUser} from '../store/UserSlice'
import { useDispatch,useSelector } from 'react-redux'


const Userlist = () => {

    const dispatch = useDispatch()
    const userss = useSelector((state=>state.user))

    const getusers = async()=>{
        const data = await fetchuser()
        dispatch(setUser(data.users))

    }

    useEffect(()=>{
        getusers()
    },[])




  return (
    <div>
      {userss.map((e)=> (<Usercards  user={e}/>))}
    </div>
  )
}

export default Userlist
