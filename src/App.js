import imagePath from './images/image.png';
import './App.css';
import RowItem from './components/RowItem';

function App() {
  const rows = [
    {
      name: 'Helip',
      text: 'An easy to use and beautiful location application.',
      longText: 'This is a long description of the Helip app. It helps you navigate and find locations easily.',
      image: imagePath,
    },
    {
      name: "Project Two",
      text: "Another project description.",
      longText: "This is a long description of Project Two. It's a feature-rich project with many possibilities.",
      image: imagePath,
    }
  ];

  return (
    <div className="App">
      <div className='fill'></div>
      {rows.map((row, index) => (
        <RowItem
          key={index}
          index={index}
          title={row.name}
          shortDescription={row.text}
          longDescription={row.longText}
          imageSrc={row.image}
        />
      ))}
      <div className='fill'></div>
    </div>
  );
}

export default App;
