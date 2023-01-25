import React from 'react';

import Card from 'react-bootstrap/Card';




const Cardd = ({produit}) => {
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
    </Card>
    </div>

  )
}

export default Cardd