import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import './postUser.css'
const PostUser = () => {
  const [formData,setFormData]=useState({name:'',email:'',phone:''})
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    console.log("Form Submitted")
    e.preventDefault();
 
    try{
      const response=await fetch("http://localhost:5000/api/user",{
      method:'POST',
      headers:{
        'Content-type':'application/json'
       
      },
      body:JSON.stringify(formData)
    })
    const data=await response.json()
    console.log(data)
    navigate('/')
    }
    catch(err){
      console.error('Error in post user',err.message)
    }
 
  }
  const handleInput=async(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
  }
  return (
    <div>
      <h1>Post User Compoenent</h1>
       <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" name="name" value={formData.name} onChange={handleInput}/>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleInput} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" placeholder="phone" name="phone"  value={formData.phone} onChange={handleInput}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Post User
      </Button>
    </Form>

    </div>
  )
}

export default PostUser
