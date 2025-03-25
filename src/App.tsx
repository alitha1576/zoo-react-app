import './App.css'
import DisplayGreeting from "./DisplayGreeting";
import AnimalProfile from "./AnimalProfile";

function App() {
  return (
<>
<header><img src="assets/zoo-logo.png" className='logo' alt="" /></header>
<DisplayGreeting />
<div className="animalsList"></div>
<AnimalProfile/>
<footer>
  <p>Made for ReDI School</p>
  <p>Anna Petrova</p>
</footer>
</>
  )
}

export default App
