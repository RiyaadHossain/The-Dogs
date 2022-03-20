import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllDogs from './Components/AllDogs/AllDogs';

function App() {
  return (
    <div className="App">
      <h1 className='my-5'>🐶 Choose Your Favourite Dog 🐕</h1>
      <AllDogs></AllDogs>
    </div>
  );
}

export default App;
