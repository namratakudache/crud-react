import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
 import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate=useNavigate()

  const handleUpdate=(id)=>{
    navigate(`/user/${id}`)
  }
  const handleDelete=async(id)=>{
  try {
        const response = await fetch(`http://localhost:5000/api/user/${id}`,{
          method:'DELETE',
        });
        console.log(response)
        if (response.ok) {
         fetchUsers()
        }
        else {
      const errorData = await response.json();
      console.error("Delete failed:", errorData.error);
    }
        
      } catch (error) {
        console.error("Error while deleting users:", error.message);
      }


  }
  const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };
  useEffect(() => {
    fetchUsers();
  }, []);
  console.log(users)

  return (
    <div>
      <h1>Dashboard Component</h1>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map((user, idx) => (
            <tr key={user._id || user.id}>
              <td>{idx + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <button varient="dark" onClick={()=>handleUpdate(user._id)}>Update</button>
                <button varient="dark" onClick={()=>handleDelete(user._id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;