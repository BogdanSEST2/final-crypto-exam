import Button from "./components/Button";
import './App.css';


function App() {
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
          <Button onClick variant='bordered' size='lg'>Hover</Button>  
        </div>  
      </div> 
    </div>
  );
}

export default App;
