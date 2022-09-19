
import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState("")
  const handler = e =>{
    e.preventDefault()
    const obj={
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      age: e.target.age.value,
      "address.zip": e.target["address.zip"].value,
    }
    fetch("http://localhost:5000/submit", {
      method:'POST',
      body:JSON.stringify(obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    .then(response=>response.json())
    .then(data=>setDisplay(data))
    .catch(err=>setDisplay(JSON.stringify(err)))
  }
  return (
    <div className="App">
      <header className="App-header">
        {display && <h3 style={display && display=="Everything is fine" ? {color: 'green'} : {}}>{JSON.stringify(display)}</h3>  }
       <form onSubmit={handler}>
         <div>
          username:
          <input type="text" name='username'/>
         </div>
         <div>
          email:
          <input type="email" name="email" />
         </div>
         <div>password
          <input type="password" name="password"  />
         </div>
         <div>
          age:
          <input type="number" name="age"  />
         </div>
         <div>
          zip code:
         <input type="number" name="address.zip" />
         </div>
         <button type="submit">submit</button>
         
       </form>
      </header>
    </div>
  );
}

export default App;
