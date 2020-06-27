import React, {useState} from 'react';
import './App.css';
import Tweet from './tweet';



function App() {

const [users, setUsers] = useState([
  { name: "Saltysam", message: "learning React!" , age: "22" },
  { name: "Jax", message: "Making messes", age: "4" }
])

  return (
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );

  }
export default App;
