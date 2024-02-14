// import React, { useRef } from 'react';

// function FileUploader() {
//   const fileInputRef = useRef(null);

//   const handleFileChange = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     try {
//       const content = await readFile(file);
//       console.log(content); // Aqui você pode processar o conteúdo do arquivo .xyz
//     } catch (error) {
//       console.error('Erro ao ler o arquivo:', error);
//     }
//   };

//   const readFile = (file) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         resolve(event.target.result);
//       };
//       reader.onerror = (error) => {
//         reject(error);
//       };
//       reader.readAsText(file);
//     });
//   };

//   return (
//     <div>
//       <input type="file" accept=".xyz" ref={fileInputRef} onChange={handleFileChange} />
//     </div>
//   );
// }

// export default FileUploader;

import React, { useRef } from "react";

function FileUploader({ onFileLoad }) {
  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const content = await readFile(file);
      onFileLoad(content);
    } catch (error) {
      console.error("Erro ao ler o arquivo:", error);
    }
  };

  //   const readFile = (file) => {
  //     return new Promise((resolve, reject) => {
  //       const reader = new FileReader();
  //       reader.onload = (event) => {
  //         resolve(event.target.result);
  //       };
  //       reader.onerror = (error) => {
  //         reject(error);
  //       };
  //       reader.readAsText(file);
  //     });
  //   };
  const readFile = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        const coordenadas = content
          .split("\n")
          .map((line) => line.trim().split(/\s+/).map(parseFloat))
          .filter((coords) => coords.length === 3); // Filtra linhas com número incorreto de coordenadas
        resolve(coordenadas);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsText(file);
    });
  };

  return (
    <div>
      <input
        type="file"
        accept=".xyz"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
    </div>
  );
}

export default FileUploader;
