
import './App.css';
import { useState,useEffect } from 'react';

import Box from './Box';

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  
  return (
    <div className="App">
     {
      user.map((item,i)=>{
      return <div key={i}> <Box item={item} /></div>
      


     })
     }
    </div>
  );
}

export default App;
