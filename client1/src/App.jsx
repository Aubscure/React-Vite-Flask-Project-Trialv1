import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8080/api/users");
        setUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAPI();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user, index) => (
        <div key={index}>
          {JSON.stringify(user)}
        </div>
      ))}
    </div>
  );
}

export default App;

