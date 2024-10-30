

import './App.css'

import MyNav from './components/MyNav/MyNav'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'
import Axious from './components/Axious/Axious';



function App() {
const isRed = true
  return (
    <>
      <MyNav></MyNav>
      <h1 className="text-5xl font-bold">Tailwind + React</h1>
      <br />
      <br />
      <br />
      <PriceOptions></PriceOptions>
      <div className="mt-24 mb-6">
        <LineChart></LineChart>
        <br />
        <br />
        <br />
        <Axious></Axious>
      </div>
      <div className={`card-container ${isRed ? "red" : "blue"}`}></div>
    </>
  );
}

export default App
