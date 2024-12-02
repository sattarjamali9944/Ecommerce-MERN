import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function User() {
  const navigate = useNavigate();
  const userss = useSelector((state) => state.auth.user);
  const baseUrl = useSelector((state) => state.auth.baseUrl);
  const fullUrl = `${baseUrl}productApi`;
  
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); // State to store the success/error message
  useEffect(() => {
    if (userss === null || userss === 'undefined' || userss === '') {
      navigate('/login');
    }
  }, [userss, navigate]);

  useEffect(() => {
    fetchUsers();
  }, []);
  useEffect(() => {
    // Filter users based on search query
    setFilteredUsers(
      users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost/project/read.php');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

 const createUser = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost/project/create.php', { name, email });
      setMessage(response.data.msg); // Set the success message
      
      fetchUsers();
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error creating user:', error);
    } finally {
      setLoading(false);
    }
  };


  const updateUser = async () => {
    try{
        await axios.put('http://localhost/project/update.php', { id: editing.id, name, email });
        fetchUsers();
        setEditing(null);
        setName('');
        setEmail('');
      } catch (error) {
      console.error('Error creating user:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try{
        await axios.delete('http://localhost/project/delete.php', { data: { id } });
        fetchUsers();
     } catch (error) {
      console.error('Error creating user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
          <Loader />
        ) : (
        <>
           <input
            type="text"
            placeholder="Search users"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />       
          <h2>Users</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => { setEditing(user); setName(user.name); setEmail(user.email); }}>Edit</button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h3>{editing ? 'Edit User' : 'Add User'}</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <button onClick={editing ? updateUser : createUser}>
              {editing ? 'Update' : 'Create'}
            </button>
          </div>
          {message && <p>{message}</p>} {/* Display success/error message */}
        </> 
        )} 

    </div>
  );
}

export default User;
