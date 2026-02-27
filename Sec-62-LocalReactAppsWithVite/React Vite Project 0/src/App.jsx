
import './App.css'
import Greeter from './assets/Greeter.jsx';
import Chicken from "./Chicken.jsx"

function App() {
  return <>
    <Chicken/>
    <Chicken/>
    <Greeter person="Shivam"/>
    <Greeter person="Shivanshu"/>
    <Greeter person="Shaurya"/>
    <Greeter person="Vipul"/>
  </>
}

export default App;