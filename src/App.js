import Button from "./components/Button";
import Input from "./components/Input";
import Typography from "./components/Typography";
import Heading from "./components/Heading";
import Tooltip from "./components/Tooltip";
import Accordion from "./components/Accordion";
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

      <div className="main-hw-8-container">
        <Button variant='bordered' size='lg' disabled>lg, primary</Button>
        <Button variant='bordered' size='md'>md, primary</Button>
        <Button onClick variant='bordered' size='sm'>sm, primary</Button>  
        <Button onClick variant='bordered' size='lg'>Hover</Button>  

        <Button variant='primary' size='lg' disabled>lg, primary</Button>
        <Button variant='primary' size='md'>md, primary</Button>
        <Button variant='primary' size='sm'>sm, primary</Button>  
        <Button onClick variant='primary' size='lg'>Hover</Button>   

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
          onChange={(newValue) => {
            if (Number(newValue) >= 1) {
              setAge(newValue)
            }
          }}
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
            <li>Age: {age}</li>
          </ul>
        </div>

        <Button 
          onClick={() => setShowPassword(!showPassword)}
          variant='primary'
          size='sm'>
            {showPassword ? 'Hide' : 'Show'}
        </Button>

        <Typography size='sm'>SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
        <Typography size='md'>MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
        <Typography>MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
        <Typography size='lg'>LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>

        <Heading level='1'>H1. Heading</Heading>
        <Heading level='2'>H2. Heading</Heading>
        <Heading level='3'>H3. Heading</Heading>
        <Heading level='4'>H4. Heading</Heading>
        <Heading level='5'>H5. Heading</Heading>
        <Heading level='6'>H6. Heading</Heading>

        <br/>
        <br/>
        <br/>

        <Tooltip tooltipText='Hint' position='left'>
          <Typography size='sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography size='lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography size='lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography size='lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography size='lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography size='lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography size='md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography size='md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography size='md'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography size='sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </Tooltip>

        <br/>
        <br/>
        <br/>

        <Tooltip tooltipText='Hint' position='top'>
          fwefwerfwref
        </Tooltip>

        <br/>
        <br/>
        <br/>
        
        <Tooltip tooltipText='Hint' position='bottom'>
          fwefwerfwref
        </Tooltip>

        <br/>
        <br/>
        <br/>

        <Tooltip tooltipText='Hint' position='left'>
          fwefwerfwref
        </Tooltip>

        <br/>
        <br/>
        <br/>

        <Tooltip tooltipText='Hint' position='right'>
          fwefwerfwref
        </Tooltip>
        

        <Accordion defaultOpen={false} title='Accordion Expanded'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion>
        <Accordion defaultOpen={false} title='Accordion Expanded'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion>
        <Accordion defaultOpen={false} title='Accordion Expanded'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion>
        <Accordion defaultOpen={true} title='Accordion Expanded'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion>
        <Accordion defaultOpen={true} title='Accordion Expanded'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion>
        <Accordion defaultOpen={true} title='Accordion Expanded'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Accordion>
      </div>

    </div>
  );
}

export default App;
