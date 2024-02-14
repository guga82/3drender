import React from "react";
// import * as THREE from "three";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// function PointCloudRenderer() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     // Cria um novo scene, camera e renderer
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Cria uma nuvem de pontos
//     const numPoints = 1000;
//     const geometry = new THREE.BufferGeometry();
//     const positions = new Float32Array(numPoints * 3);

//     for (let i = 0; i < numPoints; i++) {
//       positions[i * 3] = Math.random() * 100 - 50; // Posição X
//       positions[i * 3 + 1] = Math.random() * 100 - 50; // Posição Y
//       positions[i * 3 + 2] = Math.random() * 100 - 50; // Posição Z
//     }

//     geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     const material = new THREE.PointsMaterial({ color: 0xffffff });

//     const points = new THREE.Points(geometry, material);
//     scene.add(points);

//     // Atualiza a posição da câmera
//     camera.position.z = 100;

//     // Função de animação
//     function animate() {
//       requestAnimationFrame(animate);

//       // Gira a nuvem de pontos
//       points.rotation.x += 0.01;
//       points.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     }

//     animate();

//     // Atualiza a posição da câmera ao redimensionar a janela
//     function handleWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }

//     window.addEventListener('resize', handleWindowResize);

//     return () => {
//       window.removeEventListener('resize', handleWindowResize);
//       // Limpa o canvas ao desmontar o componente
//       scene.remove(points);
//       geometry.dispose();
//       material.dispose();
//     };
//   }, []);

//   return <canvas ref={canvasRef} />;
// }

// export default PointCloudRenderer;

// function RotatingCube() {
//   const canvasRef = useRef(null);
//   const scene = useRef(null);
//   const camera = useRef(null);
//   const renderer = useRef(null);
//   const cube = useRef(null);
//   const mouse = useRef({ x: 0, y: 0 });
//   const target = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     // Configura a cena, a câmera e o renderer
//     scene.current = new THREE.Scene();
//     camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//     renderer.current.setSize(window.innerWidth, window.innerHeight);

//     // Adiciona um cubo à cena
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     cube.current = new THREE.Mesh(geometry, material);
//     scene.current.add(cube.current);

//     // Define a posição da câmera
//     camera.current.position.z = 5;

//     // Função para atualizar a rotação do cubo com base no movimento do mouse
//     function handleMouseMove(event) {
//       const deltaX = event.clientX - mouse.current.x;
//       const deltaY = event.clientY - mouse.current.y;
//       target.current.x += deltaX * 0.01;
//       target.current.y += deltaY * 0.01;
//       mouse.current.x = event.clientX;
//       mouse.current.y = event.clientY;
//     }

//     // Adiciona o evento de mousemove ao documento
//     document.addEventListener('mousemove', handleMouseMove);

//     // Função de animação
//     function animate() {
//       requestAnimationFrame(animate);
//       // Atualiza a rotação do cubo com base no movimento do mouse
//       cube.current.rotation.x += 0.05 * (target.current.y - cube.current.rotation.x);
//       cube.current.rotation.y += 0.05 * (target.current.x - cube.current.rotation.y);
//       renderer.current.render(scene.current, camera.current);
//     }

//     animate();

//     // Limpa os eventos ao desmontar o componente
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return <canvas ref={canvasRef} />;
// }

// export default RotatingCube;


// const fs = require("fs");
// const {
//   BufferGeometry,
//   Float32BufferAttribute,
//   PointsMaterial,
//   Points,
// } = require("three");

// // Função para ler o arquivo .xyz e retornar as coordenadas como uma matriz
// function lerArquivoXYZ(nomeArquivo) {
//   const linhas = fs.readFileSync(nomeArquivo, "utf-8").split("\n");
//   const coordenadas = [];
//   for (let linha of linhas) {
//     const [x, y, z] = linha.trim().split(/\s+/).map(parseFloat);
//     coordenadas.push({ x, y, z });
//   }
//   return coordenadas;
// }

// // Função para criar e retornar uma nuvem de pontos Three.js baseada em uma lista de coordenadas
// function criarNuvemDePontos(coordenadas) {
//   const geometry = new BufferGeometry();
//   const position = [];
//   coordenadas.forEach(({ x, y, z }) => {
//     position.push(x, y, z);
//   });
//   geometry.setAttribute("position", new Float32BufferAttribute(position, 3));
//   const material = new PointsMaterial({ color: 0xffffff, size: 0.1 }); // Ajuste o tamanho dos pontos conforme necessário
//   return new Points(geometry, material);
// }

// // Ler as coordenadas do arquivo .xyz
// const coordenadas = lerArquivoXYZ("./output.xyz");

// // Criar a nuvem de pontos Three.js
// const nuvemDePontos = criarNuvemDePontos(coordenadas);

// function RotatingCube() {
//   const canvasRef = useRef(null);
//   const scene = useRef(null);
//   const camera = useRef(null);
//   const renderer = useRef(null);
//   const cube = useRef(null);
//   const mouse = useRef({ x: 0, y: 0 });
//   const target = useRef({ x: 0, y: 0 });
//   const isDragging = useRef(false);

//   useEffect(() => {
//     // Configura a cena, a câmera e o renderer
//     scene.current = new THREE.Scene();
//     camera.current = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//     renderer.current.setSize(window.innerWidth, window.innerHeight);

//     // Adiciona um cubo à cena
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     cube.current = new THREE.Mesh(geometry, material);
//     // scene.current.add(cube.current);
//     // Adicionar a nuvem de pontos à cena Three.js e fazer a renderização
//     scene.add(nuvemDePontos);

//     // Define a posição da câmera
//     camera.current.position.z = 5;

//     // Função para atualizar a rotação do cubo com base no movimento do mouse
//     function handleMouseDown(event) {
//       if (event.button === 1) {
//         // Botão do scroll do mouse
//         isDragging.current = true;
//         mouse.current.x = event.clientX;
//         mouse.current.y = event.clientY;
//       }
//     }

//     function handleMouseMove(event) {
//       if (isDragging.current) {
//         const deltaX = event.clientX - mouse.current.x;
//         const deltaY = event.clientY - mouse.current.y;
//         target.current.x += deltaX * 0.01;
//         target.current.y += deltaY * 0.01;
//         mouse.current.x = event.clientX;
//         mouse.current.y = event.clientY;
//       }
//     }

//     function handleMouseUp() {
//       isDragging.current = false;
//     }

//     // Adiciona os eventos de mouse ao documento
//     document.addEventListener("mousedown", handleMouseDown);
//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseUp);

//     // Função de animação
//     function animate() {
//       requestAnimationFrame(animate);
//       // Atualiza a rotação do cubo com base no movimento do mouse
//       cube.current.rotation.x +=
//         0.05 * (target.current.y - cube.current.rotation.x);
//       cube.current.rotation.y +=
//         0.05 * (target.current.x - cube.current.rotation.y);
//       renderer.current.render(scene.current, camera.current);
//     }

//     animate();

//     // Limpa os eventos ao desmontar o componente
//     return () => {
//       document.removeEventListener("mousedown", handleMouseDown);
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return <canvas ref={canvasRef} />;
// }

// export default RotatingCube;


