import '../App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch("http://localhost:3000/nominees")
    .then(res => res.json())
    .then(data => console.log(data))
  }, [])

  return (

    <div className="App">
    </div>
  );
}

export default App;
