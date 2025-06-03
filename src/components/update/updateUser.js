import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
// import './updateUser.css'

const UpdateUser = () => {
  const navigate = useNavigate();
  const {id}=useParams()
   const [formData,setFormData]=useState({name:'',email:'',phone:''})


    useEffect(() => {
       const fetchUser = async () => {
         try {
           const response = await fetch(`http://localhost:5000/api/user/${id}`);
           if (!response.ok) {
             throw new Error('Failed to fetch users');
           }
           const data = await response.json();
           setFormData(data);
         } catch (error) {
           console.error("Error fetching users:", error.message);
         }
       };
       fetchUser();
     }, [id]);

    const handleInput=async(e)=>{
    const {name,value}=e.target
    setFormData({...formData,[name]:value})
   
  }
   const handleSubmit=async(e)=>{
    console.log("Form Submitted")
    e.preventDefault();
 
    try{
      const response=await fetch(`http://localhost:5000/api/user/${id}`,{
      method:'PATCH',
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
    const handleUpdateUser=()=>{

      navigate('/dashboard')
    }
  return (
    <>
      <h1>Update User</h1>
      
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
           
            <Button variant="primary" type="submit" onClick={handleUpdateUser}>
              Update User
            </Button>
          </Form>
    </>
  )
}

export default UpdateUser
