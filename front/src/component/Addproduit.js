import React,{useState} from 'react'
import {postproduit} from '../api/Produitapi'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router';
const Addproduit = () => {
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[image,setImage]=useState('')
    const[description,setDescription]=useState('')
    const navigate = useNavigate()


    const addOffer = async (values)=>{
        postproduit(values)
        navigate('/privetcards')

    }


  return (
    <div>
        <>
       <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">name</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='name'
          values={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </InputGroup>
      <br />
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">image</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='image'
          values={image}
          onChange={(e)=>setImage(e.target.value)}
        />
      </InputGroup>
      <br/>
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        description
        </InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-default"
          placeholder='description'
          values={description}
          onChange={(e)=>setDescription(e.target.value)}
        />
      </InputGroup>
      <br />
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">price</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='price'
          values={price}
          onChange={(e)=>setPrice(e.target.value)}
        />
      </InputGroup>
      <button onClick={()=>addOffer({name,description,image,price})} >add</button>
      </>
    </div>
  )
}

export default Addproduit
