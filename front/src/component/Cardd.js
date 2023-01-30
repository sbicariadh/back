import React from 'react';
import { deleteProduit } from '../api/Produitapi';
import Card from 'react-bootstrap/Card';




const Cardd = ({produit}) => {
  const refresh=()=>{
    window.location.reload()
}
const role = localStorage.getItem('role')
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={produit.image}/>
      <Card.Body>
        <Card.Title>{produit.name}</Card.Title>
        <Card.Text>
          {produit.description}
        </Card.Text>
        <h1>price : {produit.price}</h1>
      </Card.Body>
      {role=='admin' ? (<button onClick={async ()=>{ await deleteProduit(produit._id) ; refresh()}}>deleteproduits</button>):(<p></p>)}
      
    </Card>
    </div>

  )
}

export default Cardd