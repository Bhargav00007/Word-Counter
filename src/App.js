import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
import './App.css';
import Alert from './Components/Alert';



function App() {
  return (
    <>
    <Navbar/>
    <Alert/>
    <div className="container my-3" >
    <h1>Find your Aura!</h1>
    <TextForm/>
    </div>


    </>
  );
}

export default App;
