import React from 'react'
import Card from 'react-bootstrap/Card';
import {deleteUserr} from '../api/Userapi'
const Usercards = ({user}) => {
    const refresh=()=>{
        window.location.reload()
    }
    const role = localStorage.getItem('role')

  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>user name : {user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">email:{user.email}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">number phone:{user.phone}</Card.Subtitle>
       {role=='admin'? ( <button onClick={async()=> {await deleteUserr(user._id) ; refresh()}} >deleteUser</button>):(<p></p>)}
      
        
      
      </Card.Body>
    </Card>
    </div>
  )
}

export default Usercards
