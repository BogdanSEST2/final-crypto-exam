import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";
import './App.css';


function App() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="App">

      <div className="button-container">
        <div className="button-block">
          <Button variant='bordered' size='lg' disabled>lg, primary</Button>
          <Button variant='bordered' size='md'>md, primary</Button>
          <Button onClick variant='bordered' size='sm'>sm, primary</Button>  
          <Button onClick variant='bordered' size='lg'>Hover</Button>  
        </div>  
        <div className="button-block">
          <Button variant='primary' size='lg' disabled>lg, primary</Button>
          <Button variant='primary' size='md'>md, primary</Button>
          <Button variant='primary' size='sm'>sm, primary</Button>  
          <Button onClick variant='primary' size='lg'>Hover</Button>  
        </div>  
      </div> 

      <div className="input-container">
        <Input 
          label="Firstname" 
          placeholder="Enter your firstname" 
          value={firstname} 
          onChange={(newValue) => setFirstName(newValue)} 
          danger
        />
        <Input 
          label="Lastname" 
          placeholder="Enter your lastname" 
          value={lastname} 
          onChange={(newValue) => setLastName(newValue)} 
        />
        <Input
          label='Age'
          placeholder='age'
          value={age}
          onChange={(newValue) => setAge(newValue)}
          type='number'
        />
        <Input 
          label="Email" 
          placeholder="Enter your email" 
          type="email" 
          value={email} 
          onChange={(newValue) => setEmail(newValue)} 
          disabled
        />
        <Input 
          label="Password" 
          placeholder="Enter your password" 
          type="password" 
          value={password} 
          onChange={(newValue) => setPassword(newValue)} 
        />
        <div>
          <h2>Input values:</h2>
          <ul>
            <li>Firstname: {firstname}</li>
            <li>Firstname: {lastname}</li>
            <li>Email: {email}</li>
            <li>Password: {showPassword ? password : '*'.repeat(password.length)}</li>
          </ul>
        </div>
        <Button 
          onClick={() => setShowPassword(!showPassword)}
          variant='primary'
          size='sm'>
            {showPassword ? 'Hide' : 'Show'}
        </Button>
      </div>

    </div>
  );
}

export default App;
