import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Form from './Components/Form.tsx';
import Login from './Components/Login.tsx';

function App() {

  
    return (
        <Form>
        </Form>
        


    );
  }
  
  export default App;















/*
const[email, setEmail] = useState('')
const[password, setPassword] = useState('')
const[message, setMessage] = useState('')

  
    const response =  fetch("http://localhost:8080/api/users/login", {
      method: 'POST',
      headers: {"content-type": "application/json"},
      body: JSON.stringify({
           "email": email,
           "password": password,
      })
    }).then(res => res.json()).then(res => console.log(res)).then(res=>console.log("email: " + email)).catch(err => console.error)
  


let login = async (e) => {
  e.preventDefault();
  try {

    let res = await fetch("http://localhost:8080/api/users/login", {
      method: "POST",

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    let resJson = await res.json();
    if (res.status === 200) {
      setEmail("");
      setPassword("");
    } else {
      setMessage("Something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
};



 
  /*
  useEffect(() => {

    fetch(baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": "david@testmail.com",
                "password": "test123"
            })
        })
        .then(response => {
           setData(response);
        })
        .catch(error => {
            console.log(error);
        });
}, [email, password, setData]);  */
/*
  useEffect(() => {
     fetch('http://localhost:8080/api/categories/1', {
       method: 'GET',
       headers: [{"content-type": "application/json", 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2ODAyOTU1NDQsImV4cCI6MTY4MDMwMjc0NCwidXNlcklkIjoxLCJlbWFpbCI6ImRhdmlkQHRlc3RtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkRhdmlkIiwibGFzdE5hbWUiOiJTbWl0aCJ9.MzEtUuiAx3x1d2emDRzMsknyLI_DDY7EeYtbUFF8pA8 '}]
       
     }).then(res => res.json()).then(res => console.log(res)).catch(err => console.error)
        
      
      
    
      
  })*/
  /*

  return (
    <div>
      <form onSubmit={login}>
      <label> Username:</label>
      <input type="text" id="username" name="username" onChange={(e) => setEmail(e.target.value)}  placeholder="email@example.com" required/>
      <br />
      <label> Password:</label>
      <input type="text" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
    </form>
    <button type="submit">Submit</button> 
    </div>
    
  );

  }
export default App;
*/