import './App.css';
// import PointCloudRenderer from './index'
import RotatingPointCloud from './rotatingCube';
import React from 'react';

function App() {
  
  // const [coordinates, setCoordinates] = useState([]);

  // const handleFileUpload = (content) => {
  //   // Processa o conteúdo do arquivo .xyz para extrair as coordenadas
  //   // Aqui você precisa implementar a lógica para extrair as coordenadas do conteúdo do arquivo
  //   // No exemplo, estamos apenas dividindo o conteúdo em linhas e esperando que cada linha tenha três valores separados por espaços
  //   const lines = content.trim().split('\n');
  //   const newCoordinates = lines.map((line) => {
  //     const [x, y, z] = line.split(' ').map(parseFloat);
  //     return { x, y, z };
  //   });
  //   setCoordinates(newCoordinates);
  // };

  // const [cloudData] = useState(null);


  return (
    <div className="App">
      {/* <FileUploader onFileUpload={handleFileUpload} />
      <RotatingCube coordinates={coordinates} /> */}
      {/* {cloudData && <RotatingCloud cloudData={cloudData} />} */}
      <RotatingPointCloud/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
