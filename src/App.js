import imagePath from './images/image.png';
import './App.css';
import Row from './components/Row';

function App() {

  const rows = [{
    name: 'Helip',
    text: 'An easy to use and beautiful location application.',
    image: imagePath
  }, {
    name: "Project Two",
    text: "Another project description.",
    image: imagePath,
  }]

  return (
    <div className="App">
      <Row index={0} data={rows[0]} />
      <Row index={1} data={rows[1]} />
    </div>
  );
}

export default App;