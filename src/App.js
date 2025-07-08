import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import Itemdate from './components/Itemdata';

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <Item name="Surf Excel"></Item>
      <Itemdate day="15" month="March" year="2005"></Itemdate>

      <Item name="Wheel"></Item>
      <Itemdate day="7" month="August" year="2012"></Itemdate>

      <Item name="Rin"></Item>
      <Itemdate day="30" month="November" year="2018"></Itemdate>
    </div>

  );
}

export default App;
