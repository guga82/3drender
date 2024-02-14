// import React, { useRef, useEffect } from 'react';
// import * as THREE from "three";

// function RotatingPointCloud({ coordinates }) {
//     const canvasRef = useRef(null);
//     const scene = useRef(null);
//     const camera = useRef(null);
//     const renderer = useRef(null);
//     const cloudPoints = useRef(null);
//     const mouse = useRef({ x: 0, y: 0 });
//     const target = useRef({ x: 0, y: 0 });

//     useEffect(() => {
//       // Configura a cena, a câmera e o renderer
//       scene.current = new THREE.Scene();
//       camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//       renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//       renderer.current.setSize(window.innerWidth, window.innerHeight);

//       // Adiciona um cubo à cena (apenas para referência, pode ser removido)
//       const geometry = new THREE.BoxGeometry();
//       const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//       const cube = new THREE.Mesh(geometry, material);
//       scene.current.add(cube);

//       // Adiciona uma nuvem de pontos à cena
//       const pointGeometry = new THREE.BufferGeometry();
//       const positions = new Float32Array(coordinates.length * 3);
//       for (let i = 0; i < coordinates.length; i++) {
//         positions[i * 3] = coordinates[i].x;
//         positions[i * 3 + 1] = coordinates[i].y;
//         positions[i * 3 + 2] = coordinates[i].z;
//       }
//       pointGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//       const pointMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 }); // Tamanho dos pontos ajustável
//       cloudPoints.current = new THREE.Points(pointGeometry, pointMaterial);
//       scene.current.add(cloudPoints.current);

//       // Define a posição da câmera
//       camera.current.position.z = 5;

//       // Função para atualizar a rotação do cubo com base no movimento do mouse
//       function handleMouseMove(event) {
//         const deltaX = event.clientX - mouse.current.x;
//         const deltaY = event.clientY - mouse.current.y;
//         target.current.x += deltaX * 0.01;
//         target.current.y += deltaY * 0.01;
//         mouse.current.x = event.clientX;
//         mouse.current.y = event.clientY;
//       }

//       // Adiciona o evento de mousemove ao documento
//       document.addEventListener('mousemove', handleMouseMove);

//       // Função de animação
//       function animate() {
//         requestAnimationFrame(animate);
//         // Atualiza a rotação do cubo com base no movimento do mouse
//         cloudPoints.current.rotation.x += 0.05 * (target.current.y - cloudPoints.current.rotation.x);
//         cloudPoints.current.rotation.y += 0.05 * (target.current.x - cloudPoints.current.rotation.y);
//         renderer.current.render(scene.current, camera.current);
//       }

//       animate();

//       // Limpa os eventos ao desmontar o componente
//       return () => {
//         document.removeEventListener('mousemove', handleMouseMove);
//         // Limpa a cena ao desmontar o componente
//         scene.current.remove(cloudPoints.current);
//         geometry.dispose();
//         material.dispose();
//         pointGeometry.dispose();
//         pointMaterial.dispose();
//       };
//     }, [coordinates]);

//     return <canvas ref={canvasRef} />;
//   }

//   export default RotatingPointCloud;

// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// function RotationPointCloud() {
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

// export default RotationPointCloud;

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const response = [
  {
    x: 2408,
    y: 168,
    z: 0,
  },
  {
    x: 2393,
    y: 209,
    z: 0,
  },
  {
    x: 2362,
    y: 416,
    z: 0,
  },
  {
    x: 2348,
    y: 499,
    z: 0,
  },
  {
    x: 2339,
    y: 540,
    z: 0,
  },
  {
    x: 2329,
    y: 580,
    z: 0,
  },
  {
    x: 2319,
    y: 621,
    z: 0,
  },
  {
    x: 2307,
    y: 661,
    z: 0,
  },
  {
    x: 2309,
    y: 705,
    z: 0,
  },
  {
    x: 2296,
    y: 746,
    z: 0,
  },
  {
    x: 2298,
    y: 791,
    z: 0,
  },
  {
    x: 2271,
    y: 872,
    z: 0,
  },
  {
    x: 2267,
    y: 916,
    z: 0,
  },
  {
    x: 2265,
    y: 961,
    z: 0,
  },
  {
    x: 2251,
    y: 1002,
    z: 0,
  },
  {
    x: 2245,
    y: 1047,
    z: 0,
  },
  {
    x: 2708,
    y: 1321,
    z: 0,
  },
  {
    x: 2235,
    y: 1138,
    z: 0,
  },
  {
    x: 2228,
    y: 1184,
    z: 0,
  },
  {
    x: 2219,
    y: 1230,
    z: 0,
  },
  {
    x: 2204,
    y: 1272,
    z: 0,
  },
  {
    x: 2203,
    y: 1323,
    z: 0,
  },
  {
    x: 2192,
    y: 1369,
    z: 0,
  },
  {
    x: 2181,
    y: 1416,
    z: 0,
  },
  {
    x: 2171,
    y: 1464,
    z: 0,
  },
  {
    x: 2162,
    y: 1513,
    z: 0,
  },
  {
    x: 2152,
    y: 1564,
    z: 0,
  },
  {
    x: 2138,
    y: 1611,
    z: 0,
  },
  {
    x: 2136,
    y: 1669,
    z: 0,
  },
  {
    x: 2109,
    y: 1708,
    z: 0,
  },
  {
    x: 2035,
    y: 1707,
    z: 0,
  },
  {
    x: 1929,
    y: 1677,
    z: 0,
  },
  {
    x: 1835,
    y: 1652,
    z: 0,
  },
  {
    x: 1769,
    y: 1650,
    z: 0,
  },
  {
    x: 1699,
    y: 1640,
    z: 0,
  },
  {
    x: 302,
    y: 302,
    z: 0,
  },
  {
    x: 287,
    y: 297,
    z: 0,
  },
  {
    x: 273,
    y: 292,
    z: 0,
  },
  {
    x: 267,
    y: 297,
    z: 0,
  },
  {
    x: 262,
    y: 302,
    z: 0,
  },
  {
    x: 257,
    y: 306,
    z: 0,
  },
  {
    x: 251,
    y: 311,
    z: 0,
  },
  {
    x: 240,
    y: 307,
    z: 0,
  },
  {
    x: 239,
    y: 317,
    z: 0,
  },
  {
    x: 231,
    y: 318,
    z: 0,
  },
  {
    x: 226,
    y: 323,
    z: 0,
  },
  {
    x: 222,
    y: 329,
    z: 0,
  },
  {
    x: 217,
    y: 334,
    z: 0,
  },
  {
    x: 211,
    y: 338,
    z: 0,
  },
  {
    x: 206,
    y: 343,
    z: 0,
  },
  {
    x: 200,
    y: 346,
    z: 0,
  },
  {
    x: 194,
    y: 350,
    z: 0,
  },
  {
    x: 188,
    y: 353,
    z: 0,
  },
  {
    x: 183,
    y: 361,
    z: 0,
  },
  {
    x: 182,
    y: 374,
    z: 0,
  },
  {
    x: 179,
    y: 384,
    z: 0,
  },
  {
    x: 175,
    y: 395,
    z: 0,
  },
  {
    x: 179,
    y: 423,
    z: 0,
  },
  {
    x: 1163,
    y: 2880,
    z: 0,
  },
  {
    x: 1212,
    y: 3159,
    z: 0,
  },
  {
    x: 1144,
    y: 3145,
    z: 0,
  },
  {
    x: 1045,
    y: 3035,
    z: 0,
  },
  {
    x: 949,
    y: 2923,
    z: 0,
  },
  {
    x: 949,
    y: 3105,
    z: 0,
  },
  {
    x: 872,
    y: 3041,
    z: 0,
  },
  {
    x: 725,
    y: 2706,
    z: 0,
  },
  {
    x: 704,
    y: 2825,
    z: 0,
  },
  {
    x: 704,
    y: 3052,
    z: 0,
  },
  {
    x: 650,
    y: 3058,
    z: 0,
  },
  {
    x: 591,
    y: 3044,
    z: 0,
  },
  {
    x: 536,
    y: 3043,
    z: 0,
  },
  {
    x: 480,
    y: 3031,
    z: 0,
  },
  {
    x: 424,
    y: 3019,
    z: 0,
  },
  {
    x: 259,
    y: 2110,
    z: 0,
  },
  {
    x: 180,
    y: 1717,
    z: 0,
  },
  {
    x: 150,
    y: 1720,
    z: 0,
  },
  {
    x: 119,
    y: 1712,
    z: 0,
  },
  {
    x: 89,
    y: 1709,
    z: 0,
  },
  {
    x: 59,
    y: 1704,
    z: 0,
  },
  {
    x: 29,
    y: 1696,
    z: 0,
  },
  {
    x: 1,
    y: 1683,
    z: 0,
  },
  {
    x: -87,
    y: 1678,
    z: 0,
  },
  {
    x: -117,
    y: 1676,
    z: 0,
  },
  {
    x: -145,
    y: 1661,
    z: 0,
  },
  {
    x: -202,
    y: 1652,
    z: 0,
  },
  {
    x: -231,
    y: 1648,
    z: 0,
  },
  {
    x: -259,
    y: 1638,
    z: 0,
  },
  {
    x: -286,
    y: 1627,
    z: 0,
  },
  {
    x: -343,
    y: 1616,
    z: 0,
  },
  {
    x: -371,
    y: 1610,
    z: 0,
  },
  {
    x: -401,
    y: 1609,
    z: 0,
  },
  {
    x: -430,
    y: 1607,
    z: 0,
  },
  {
    x: -458,
    y: 1600,
    z: 0,
  },
  {
    x: -487,
    y: 1593,
    z: 0,
  },
  {
    x: -515,
    y: 1585,
    z: 0,
  },
  {
    x: -547,
    y: 1588,
    z: 0,
  },
  {
    x: -574,
    y: 1579,
    z: 0,
  },
  {
    x: -630,
    y: 1559,
    z: 0,
  },
  {
    x: -662,
    y: 1561,
    z: 0,
  },
  {
    x: -691,
    y: 1552,
    z: 0,
  },
  {
    x: -723,
    y: 1551,
    z: 0,
  },
  {
    x: -750,
    y: 1539,
    z: 0,
  },
  {
    x: -782,
    y: 1536,
    z: 0,
  },
  {
    x: -811,
    y: 1525,
    z: 0,
  },
  {
    x: -844,
    y: 1524,
    z: 0,
  },
  {
    x: -876,
    y: 1518,
    z: 0,
  },
  {
    x: -905,
    y: 1506,
    z: 0,
  },
  {
    x: -913,
    y: 1462,
    z: 0,
  },
  {
    x: -896,
    y: 1380,
    z: 0,
  },
  {
    x: -884,
    y: 1310,
    z: 0,
  },
  {
    x: -877,
    y: 1252,
    z: 0,
  },
  {
    x: -863,
    y: 1187,
    z: 0,
  },
  {
    x: -853,
    y: 1132,
    z: 0,
  },
  {
    x: -844,
    y: 1080,
    z: 0,
  },
  {
    x: -836,
    y: 1033,
    z: 0,
  },
  {
    x: -832,
    y: 992,
    z: 0,
  },
  {
    x: -820,
    y: 944,
    z: 0,
  },
  {
    x: -834,
    y: 926,
    z: 0,
  },
  {
    x: -873,
    y: 936,
    z: 0,
  },
  {
    x: -2579,
    y: 2671,
    z: 0,
  },
  {
    x: -921,
    y: 921,
    z: 0,
  },
  {
    x: -937,
    y: 905,
    z: 0,
  },
  {
    x: -934,
    y: 871,
    z: 0,
  },
  {
    x: -945,
    y: 851,
    z: 0,
  },
  {
    x: -946,
    y: 823,
    z: 0,
  },
  {
    x: -932,
    y: 782,
    z: 0,
  },
  {
    x: -932,
    y: 755,
    z: 0,
  },
  {
    x: -931,
    y: 727,
    z: 0,
  },
  {
    x: -932,
    y: 702,
    z: 0,
  },
  {
    x: -924,
    y: 671,
    z: 0,
  },
  {
    x: -919,
    y: 643,
    z: 0,
  },
  {
    x: -918,
    y: 619,
    z: 0,
  },
  {
    x: -916,
    y: 594,
    z: 0,
  },
  {
    x: -902,
    y: 564,
    z: 0,
  },
  {
    x: -918,
    y: 551,
    z: 0,
  },
  {
    x: -914,
    y: 527,
    z: 0,
  },
  {
    x: -892,
    y: 494,
    z: 0,
  },
  {
    x: -894,
    y: 475,
    z: 0,
  },
  {
    x: -903,
    y: 460,
    z: 0,
  },
  {
    x: -884,
    y: 431,
    z: 0,
  },
  {
    x: -876,
    y: 408,
    z: 0,
  },
  {
    x: -782,
    y: 348,
    z: 0,
  },
  {
    x: -733,
    y: 311,
    z: 0,
  },
  {
    x: -723,
    y: 292,
    z: 0,
  },
  {
    x: -728,
    y: 279,
    z: 0,
  },
  {
    x: -740,
    y: 269,
    z: 0,
  },
  {
    x: -751,
    y: 258,
    z: 0,
  },
  {
    x: -754,
    y: 245,
    z: 0,
  },
  {
    x: -747,
    y: 228,
    z: 0,
  },
  {
    x: -750,
    y: 215,
    z: 0,
  },
  {
    x: -834,
    y: 223,
    z: 0,
  },
  {
    x: -837,
    y: 208,
    z: 0,
  },
  {
    x: -865,
    y: 199,
    z: 0,
  },
  {
    x: -867,
    y: 184,
    z: 0,
  },
  {
    x: -856,
    y: 166,
    z: 0,
  },
  {
    x: -851,
    y: 150,
    z: 0,
  },
  {
    x: -833,
    y: 132,
    z: 0,
  },
  {
    x: -820,
    y: 115,
    z: 0,
  },
  {
    x: -847,
    y: 104,
    z: 0,
  },
  {
    x: -823,
    y: 86,
    z: 0,
  },
  {
    x: -833,
    y: 72,
    z: 0,
  },
  {
    x: -821,
    y: 57,
    z: 0,
  },
  {
    x: -825,
    y: 43,
    z: 0,
  },
  {
    x: -816,
    y: 28,
    z: 0,
  },
  {
    x: -830,
    y: 14,
    z: 0,
  },
  {
    x: -798,
    y: 9,
    z: 0,
  },
  {
    x: -796,
    y: -13,
    z: 0,
  },
  {
    x: -793,
    y: -27,
    z: 0,
  },
  {
    x: -792,
    y: -41,
    z: 0,
  },
  {
    x: -794,
    y: -55,
    z: 0,
  },
  {
    x: -793,
    y: -69,
    z: 0,
  },
  {
    x: -782,
    y: -82,
    z: 0,
  },
  {
    x: -773,
    y: -94,
    z: 0,
  },
  {
    x: -772,
    y: -108,
    z: 0,
  },
  {
    x: -755,
    y: -119,
    z: 0,
  },
  {
    x: -660,
    y: -116,
    z: 0,
  },
  {
    x: -668,
    y: -129,
    z: 0,
  },
  {
    x: -748,
    y: -159,
    z: 0,
  },
  {
    x: -760,
    y: -175,
    z: 0,
  },
  {
    x: -757,
    y: -188,
    z: 0,
  },
  {
    x: -763,
    y: -204,
    z: 0,
  },
  {
    x: -765,
    y: -219,
    z: 0,
  },
  {
    x: -764,
    y: -233,
    z: 0,
  },
  {
    x: -758,
    y: -246,
    z: 0,
  },
  {
    x: -751,
    y: -258,
    z: 0,
  },
  {
    x: -757,
    y: -275,
    z: 0,
  },
  {
    x: -751,
    y: -288,
    z: 0,
  },
  {
    x: -747,
    y: -301,
    z: 0,
  },
  {
    x: -753,
    y: -319,
    z: 0,
  },
  {
    x: -744,
    y: -331,
    z: 0,
  },
  {
    x: -740,
    y: -345,
    z: 0,
  },
  {
    x: -738,
    y: -360,
    z: 0,
  },
  {
    x: -741,
    y: -377,
    z: 0,
  },
  {
    x: -741,
    y: -394,
    z: 0,
  },
  {
    x: -728,
    y: -403,
    z: 0,
  },
  {
    x: -703,
    y: -406,
    z: 0,
  },
  {
    x: -621,
    y: -373,
    z: 0,
  },
  {
    x: -594,
    y: -371,
    z: 0,
  },
  {
    x: -600,
    y: -390,
    z: 0,
  },
  {
    x: -598,
    y: -403,
    z: 0,
  },
  {
    x: -626,
    y: -438,
    z: 0,
  },
  {
    x: -623,
    y: -453,
    z: 0,
  },
  {
    x: -623,
    y: -469,
    z: 0,
  },
  {
    x: -615,
    y: -480,
    z: 0,
  },
  {
    x: -606,
    y: -491,
    z: 0,
  },
  {
    x: -593,
    y: -497,
    z: 0,
  },
  {
    x: -577,
    y: -502,
    z: 0,
  },
  {
    x: -561,
    y: -505,
    z: 0,
  },
  {
    x: -547,
    y: -510,
    z: 0,
  },
  {
    x: -549,
    y: -530,
    z: 0,
  },
  {
    x: -541,
    y: -541,
    z: 0,
  },
  {
    x: -531,
    y: -550,
    z: 0,
  },
  {
    x: -521,
    y: -559,
    z: 0,
  },
  {
    x: -532,
    y: -590,
    z: 0,
  },
  {
    x: -525,
    y: -604,
    z: 0,
  },
  {
    x: -512,
    y: -610,
    z: 0,
  },
  {
    x: -505,
    y: -624,
    z: 0,
  },
  {
    x: -490,
    y: -627,
    z: 0,
  },
  {
    x: -477,
    y: -633,
    z: 0,
  },
  {
    x: -470,
    y: -648,
    z: 0,
  },
  {
    x: -453,
    y: -647,
    z: 0,
  },
  {
    x: -418,
    y: -620,
    z: 0,
  },
  {
    x: -407,
    y: -627,
    z: 0,
  },
  {
    x: -322,
    y: -606,
    z: 0,
  },
  {
    x: -311,
    y: -612,
    z: 0,
  },
  {
    x: -291,
    y: -597,
    z: 0,
  },
  {
    x: -286,
    y: -614,
    z: 0,
  },
  {
    x: -274,
    y: -616,
    z: 0,
  },
  {
    x: -256,
    y: -604,
    z: 0,
  },
  {
    x: -250,
    y: -619,
    z: 0,
  },
  {
    x: -236,
    y: -617,
    z: 0,
  },
  {
    x: -226,
    y: -621,
    z: 0,
  },
  {
    x: -214,
    y: -621,
    z: 0,
  },
  {
    x: -194,
    y: -598,
    z: 0,
  },
  {
    x: -182,
    y: -597,
    z: 0,
  },
  {
    x: -173,
    y: -604,
    z: 0,
  },
  {
    x: -156,
    y: -582,
    z: 0,
  },
  {
    x: -147,
    y: -592,
    z: 0,
  },
  {
    x: -131,
    y: -569,
    z: 0,
  },
  {
    x: -120,
    y: -566,
    z: 0,
  },
  {
    x: -110,
    y: -568,
    z: 0,
  },
  {
    x: -100,
    y: -569,
    z: 0,
  },
  {
    x: -90,
    y: -572,
    z: 0,
  },
  {
    x: -80,
    y: -570,
    z: 0,
  },
  {
    x: -68,
    y: -561,
    z: 0,
  },
  {
    x: -57,
    y: -549,
    z: 0,
  },
  {
    x: -47,
    y: -548,
    z: 0,
  },
  {
    x: -38,
    y: -547,
    z: 0,
  },
  {
    x: -28,
    y: -548,
    z: 0,
  },
  {
    x: -19,
    y: -548,
    z: 0,
  },
  {
    x: -9,
    y: -547,
    z: 0,
  },
  {
    x: -1,
    y: -547,
    z: 0,
  },
  {
    x: 9,
    y: -547,
    z: 0,
  },
  {
    x: 19,
    y: -547,
    z: 0,
  },
  {
    x: 28,
    y: -546,
    z: 0,
  },
  {
    x: 38,
    y: -546,
    z: 0,
  },
  {
    x: 47,
    y: -545,
    z: 0,
  },
  {
    x: 53,
    y: -512,
    z: 0,
  },
  {
    x: 54,
    y: -445,
    z: 0,
  },
  {
    x: 62,
    y: -443,
    z: 0,
  },
  {
    x: 68,
    y: -434,
    z: 0,
  },
  {
    x: 75,
    y: -427,
    z: 0,
  },
  {
    x: 82,
    y: -425,
    z: 0,
  },
  {
    x: 90,
    y: -424,
    z: 0,
  },
  {
    x: 103,
    y: -446,
    z: 0,
  },
  {
    x: 118,
    y: -477,
    z: 0,
  },
  {
    x: 140,
    y: -524,
    z: 0,
  },
  {
    x: 150,
    y: -523,
    z: 0,
  },
  {
    x: 160,
    y: -523,
    z: 0,
  },
  {
    x: 171,
    y: -528,
    z: 0,
  },
  {
    x: 177,
    y: -516,
    z: 0,
  },
  {
    x: 186,
    y: -512,
    z: 0,
  },
  {
    x: 191,
    y: -500,
    z: 0,
  },
  {
    x: 193,
    y: -478,
    z: 0,
  },
  {
    x: 177,
    y: -419,
    z: 0,
  },
  {
    x: 185,
    y: -416,
    z: 0,
  },
  {
    x: 205,
    y: -441,
    z: 0,
  },
  {
    x: 199,
    y: -409,
    z: 0,
  },
  {
    x: 207,
    y: -407,
    z: 0,
  },
  {
    x: 214,
    y: -403,
    z: 0,
  },
  {
    x: 288,
    y: -519,
    z: 0,
  },
  {
    x: 292,
    y: -505,
    z: 0,
  },
  {
    x: 311,
    y: -517,
    z: 0,
  },
  {
    x: 308,
    y: -493,
    z: 0,
  },
  {
    x: 332,
    y: -512,
    z: 0,
  },
  {
    x: 347,
    y: -515,
    z: 0,
  },
  {
    x: 359,
    y: -512,
    z: 0,
  },
  {
    x: 371,
    y: -511,
    z: 0,
  },
  {
    x: 383,
    y: -508,
    z: 0,
  },
  {
    x: 405,
    y: -518,
    z: 0,
  },
  {
    x: 405,
    y: -500,
    z: 0,
  },
  {
    x: 425,
    y: -506,
    z: 0,
  },
  {
    x: 697,
    y: -801,
    z: 0,
  },
  {
    x: 419,
    y: -466,
    z: 0,
  },
  {
    x: 1519,
    y: -1629,
    z: 0,
  },
  {
    x: 1704,
    y: -1764,
    z: 0,
  },
  {
    x: 1841,
    y: -1841,
    z: 0,
  },
  {
    x: 1884,
    y: -1820,
    z: 0,
  },
  {
    x: 1948,
    y: -1817,
    z: 0,
  },
  {
    x: 2024,
    y: -1823,
    z: 0,
  },
  {
    x: 2110,
    y: -1834,
    z: 0,
  },
  {
    x: 2152,
    y: -1805,
    z: 0,
  },
  {
    x: 2215,
    y: -1794,
    z: 0,
  },
  {
    x: 2266,
    y: -1770,
    z: 0,
  },
  {
    x: 2314,
    y: -1744,
    z: 0,
  },
  {
    x: 2422,
    y: -1760,
    z: 0,
  },
  {
    x: 2476,
    y: -1733,
    z: 0,
  },
  {
    x: 2524,
    y: -1702,
    z: 0,
  },
  {
    x: 2625,
    y: -1705,
    z: 0,
  },
  {
    x: 2749,
    y: -1718,
    z: 0,
  },
  {
    x: 2802,
    y: -1683,
    z: 0,
  },
  {
    x: 2799,
    y: -1616,
    z: 0,
  },
  {
    x: 2781,
    y: -1542,
    z: 0,
  },
  {
    x: 2753,
    y: -1463,
    z: 0,
  },
  {
    x: 2741,
    y: -1396,
    z: 0,
  },
  {
    x: 2739,
    y: -1336,
    z: 0,
  },
  {
    x: 2725,
    y: -1270,
    z: 0,
  },
  {
    x: 1629,
    y: -725,
    z: 0,
  },
  {
    x: 750,
    y: -318,
    z: 0,
  },
  {
    x: 766,
    y: -309,
    z: 0,
  },
  {
    x: 773,
    y: -296,
    z: 0,
  },
  {
    x: 2619,
    y: -953,
    z: 0,
  },
  {
    x: 925,
    y: -318,
    z: 0,
  },
  {
    x: 850,
    y: -276,
    z: 0,
  },
  {
    x: 840,
    y: -256,
    z: 0,
  },
  {
    x: 878,
    y: -251,
    z: 0,
  },
  {
    x: 897,
    y: -240,
    z: 0,
  },
  {
    x: 908,
    y: -226,
    z: 0,
  },
  {
    x: 972,
    y: -224,
    z: 0,
  },
  {
    x: 995,
    y: -211,
    z: 0,
  },
  {
    x: 1047,
    y: -203,
    z: 0,
  },
  {
    x: 1099,
    y: -193,
    z: 0,
  },
  {
    x: 1153,
    y: -182,
    z: 0,
  },
  {
    x: 1216,
    y: -170,
    z: 0,
  },
  {
    x: 1302,
    y: -159,
    z: 0,
  },
  {
    x: 1378,
    y: -144,
    z: 0,
  },
  {
    x: 1475,
    y: -129,
    z: 0,
  },
  {
    x: 1569,
    y: -109,
    z: 0,
  },
  {
    x: 1712,
    y: -89,
    z: 0,
  },
  {
    x: 1872,
    y: -65,
    z: 0,
  },
  {
    x: 2032,
    y: -35,
    z: 0,
  },
  {
    x: 2135,
    y: -5,
    z: 0,
  },
];

// function RotationPointCloud() {
//   const canvasRef = useRef(null);
//   const scene = useRef(null);
//   const camera = useRef(null);
//   const renderer = useRef(null);
//   const points = useRef(null);
//   const mouse = useRef({ x: 0, y: 0 });
//   const target = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     // Função para carregar os dados do arquivo JSON
//     async function loadPointCloudData() {
//       // const response = await fetch('coordenadas.json');
//       const data = response;
//       return data;
//     }

//     // Configura a cena, a câmera e o renderer
//     async function setup() {
//       const jsonData = await loadPointCloudData();

//       scene.current = new THREE.Scene();
//       camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//       renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//       renderer.current.setSize(window.innerWidth, window.innerHeight);

//       // Crie um grupo para os pontos
//       points.current = new THREE.Group();

//       // Adicione pontos à cena com base nos dados do arquivo JSON
//       const pointGeometry = new THREE.BufferGeometry();
//       const vertices = [];
//       jsonData.forEach(pointData => {
//         const { x, y, z } = pointData;
//         vertices.push(x, y, z);
//       });
//       pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

//       // jsonData.forEach(pointData => {
//       //   const { x, y, z } = pointData;
//       //   console.log(pointGeometry)
//       //   pointGeometry.vertices.push(new THREE.Vector3(x, y, z));
//       // });

//       const pointMaterial = new THREE.PointsMaterial({ color: 0xff0000, size: 0.1 });
//       const pointCloud = new THREE.Points(pointGeometry, pointMaterial);
//       points.current.add(pointCloud);
//       scene.current.add(points.current);

//       // Define a posição da câmera
//       camera.current.position.z = 5;

//       // Função para atualizar a rotação dos pontos com base no movimento do mouse
//       function handleMouseMove(event) {
//         const deltaX = event.clientX - mouse.current.x;
//         const deltaY = event.clientY - mouse.current.y;
//         target.current.x += deltaX * 0.01;
//         target.current.y += deltaY * 0.01;
//         mouse.current.x = event.clientX;
//         mouse.current.y = event.clientY;
//       }

//       // Adiciona o evento de mousemove ao documento
//       document.addEventListener('mousemove', handleMouseMove);

//       // Função de animação
//       function animate() {
//         requestAnimationFrame(animate);
//         // Atualiza a rotação dos pontos com base no movimento do mouse
//         points.current.rotation.x += 0.05 * (target.current.y - points.current.rotation.x);
//         points.current.rotation.y += 0.05 * (target.current.x - points.current.rotation.y);
//         renderer.current.render(scene.current, camera.current);
//       }

//       animate();

//       // Limpa os eventos ao desmontar o componente
//       return () => {
//         document.removeEventListener('mousemove', handleMouseMove);
//       };
//     }

//     setup();

//   }, []);

//   return <canvas ref={canvasRef} />;
// }

// export default RotationPointCloud;
document.addEventListener('wheel', handleMouseWheel);

let wheel = 0;
const incremento = 2;


// Função de callback para lidar com o evento de scroll do mouse
function handleMouseWheel(event) {
    // A propriedade 'deltaY' do evento contém a quantidade de rolagem vertical
    const deltaY = event.deltaY;

    // Faça algo com o valor de deltaY, como ajustar o zoom da câmera ou rolar a cena
    // Por exemplo:
    if (deltaY > 0) {
        // Rolar para baixo
        wheel =+ incremento
        console.log('Rolando para baixo');
    } else if (deltaY < 0) {
        // Rolar para cima
        wheel =- incremento
        console.log('Rolando para cima');
    }
}

function RotationPointCloud() {
  const canvasRef = useRef(null);
  const scene = useRef(null);
  const camera = useRef(null);
  const renderer = useRef(null);
  const points = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const zoomSpeed = 0.1;

  useEffect(() => {
    // Função para carregar os dados do arquivo JSON
    async function loadPointCloudData() {
      // const response = await fetch('coordenadas.json');
      const data = response;
      return data;
    }

    // Configura a cena, a câmera e o renderer
    async function setup() {
      const jsonData = await loadPointCloudData();

      scene.current = new THREE.Scene();
      // Crie uma câmera ortográfica
      camera.current = new THREE.OrthographicCamera(
        window.innerWidth / -2,
        window.innerWidth / 2,
        window.innerHeight / 2,
        window.innerHeight / -2,
        0.1,
        1000
      );
      // Crie uma câmera ortográfica
      camera.current = new THREE.OrthographicCamera(
        window.innerWidth / -2,
        window.innerWidth / 2,
        window.innerHeight / 2,
        window.innerHeight / -2,
        0.1,
        1000000000000000
      );

      const zoomFactor = 14; // Ajuste esse valor conforme necessário para controlar o nível de zoom
      const aspect = window.innerWidth / window.innerHeight;
      const halfHeight = (camera.current.top - camera.current.bottom) / 2;
      const halfWidth = aspect * halfHeight;
      camera.current.left = -halfWidth * zoomFactor;
      camera.current.right = halfWidth * zoomFactor;
      camera.current.top = halfHeight * zoomFactor;
      camera.current.bottom = -halfHeight * zoomFactor;
      camera.current.updateProjectionMatrix();

      // Posicione a câmera de forma que todos os pontos sejam visíveis
      camera.current.position.set(0, 0, 1000000000000000); // Ajuste a posição conforme necessário

      // camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current });
      renderer.current.setSize(window.innerWidth, window.innerHeight);
      // camera.current.far = 1000000000000000; // Ajuste esse valor conforme necessário

      // Crie um grupo para os pontos
      points.current = new THREE.Group();

      // Adicione pontos à cena com base nos dados do arquivo JSON
      const pointGeometry = new THREE.BufferGeometry();
      const vertices = [];
      jsonData.forEach((pointData) => {
        const { x, y, z } = pointData;
        vertices.push(x, y, z);
      });
      pointGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      const pointMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2,
      });
      const pointCloud = new THREE.Points(pointGeometry, pointMaterial);
      points.current.add(pointCloud);
      scene.current.add(points.current);

      // Define a posição inicial da câmera
      camera.current.position.z = 5;

      // Função para atualizar a rotação dos pontos com base no movimento do mouse
      function handleMouseMove(event) {
        const deltaX = event.clientX - mouse.current.x;
        const deltaY = event.clientY - mouse.current.y;
        target.current.x += deltaX * 0.01;
        target.current.y += deltaY * 0.01;
        mouse.current.x = event.clientX;
        mouse.current.y = event.clientY;
      }

      // Função para lidar com o zoom
      function handleZoom(event) {
        camera.current.position.z += event.deltaY * zoomSpeed;
      }

      // Adiciona os eventos ao documento
      document.addEventListener("mousemove", handleMouseMove);
      canvasRef.current.addEventListener("wheel", handleZoom);

      // Função de animação
      function animate() {
        requestAnimationFrame(animate);
        // Atualiza a rotação dos pontos com base no movimento do mouse
        points.current.rotation.x +=
          0.05 * (target.current.y - points.current.rotation.x);
        points.current.rotation.y +=
          0.05 * (target.current.x - points.current.rotation.y);
        renderer.current.render(scene.current, camera.current);
      }

      animate();

      // Limpa os eventos ao desmontar o componente
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        canvasRef.current.removeEventListener("wheel", handleZoom);
      };
    }

    setup();
  }, []);

  return <canvas ref={canvasRef} />;
}

export default RotationPointCloud;

// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// function RotatingCloud({ cloudData }) {
//   const canvasRef = useRef(null);
//   const scene = useRef(null);
//   const camera = useRef(null);
//   const renderer = useRef(null);
//   const points = useRef(null);
//   const mouse = useRef({ x: 0, y: 0 });
//   const target = useRef({ x: 0, y: 0 });

//   useEffect(() => {

//     // Função para calcular a caixa delimitadora (bounding box) dos pontos
// function calcularBoundingBox(coordenadas) {
//     let minX = Infinity, minY = Infinity, minZ = Infinity;
//     let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;

//     coordenadas.forEach(({ x, y, z }) => {
//         minX = Math.min(minX, x);
//         minY = Math.min(minY, y);
//         minZ = Math.min(minZ, z);
//         maxX = Math.max(maxX, x);
//         maxY = Math.max(maxY, y);
//         maxZ = Math.max(maxZ, z);
//     });

//     return { minX, minY, minZ, maxX, maxY, maxZ };
// }

// // Função para ajustar o zoom da câmera para visualizar todos os pontos na mesma tela
// // function ajustarZoomDaCamera(camera, coordenadas) {
// //     const { minX, minY, minZ, maxX, maxY, maxZ } = calcularBoundingBox(coordenadas);
// //     const boxWidth = maxX - minX;
// //     const boxHeight = maxY - minY;
// //     const boxDepth = maxZ - minZ;

// //     const maxSide = Math.max(boxWidth, boxHeight, boxDepth);
// //     const fov = camera.fov * (Math.PI / 180);
// //     const distance = Math.abs(maxSide / Math.sin(fov / 2));

// //     camera.position.set(minX + boxWidth / 2, minY + boxHeight / 2, minZ + boxDepth / 2 + distance);
// //     camera.lookAt(minX + boxWidth / 2, minY + boxHeight / 2, minZ + boxDepth / 2);
// // }

// function ajustarZoomDaCamera(camera, coordenadas) {
//   if (!camera.current) return; // Verifica se camera.current não é null
//   const { minX, minY, minZ, maxX, maxY, maxZ } = calcularBoundingBox(coordenadas);
//   const boxWidth = maxX - minX;
//   const boxHeight = maxY - minY;
//   const boxDepth = maxZ - minZ;

//   const maxSide = Math.max(boxWidth, boxHeight, boxDepth);
//   const fov = camera.current.fov * (Math.PI / 180);
//   const distance = Math.abs(maxSide / Math.sin(fov / 2));

//   camera.current.position.set(minX + boxWidth / 2, minY + boxHeight / 2, minZ + boxDepth / 2 + distance);
//   camera.current.lookAt(minX + boxWidth / 2, minY + boxHeight / 2, minZ + boxDepth / 2);
// }

// // Dentro do useEffect, após criar a nuvem de pontos
// // Ajusta o zoom da câmera para visualizar todos os pontos na mesma tela
// console.log('Valores cloudData: ', cloudData)
// ajustarZoomDaCamera(camera.current, cloudData);

//     // Configura a cena, a câmera e o renderer
//     scene.current = new THREE.Scene();
//     camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     renderer.current = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//     renderer.current.setSize(window.innerWidth, window.innerHeight);

//     // Cria uma nuvem de pontos com base nos dados carregados
//     const geometry = new THREE.BufferGeometry();
//     const positions = cloudData.split('\n').map(line => line.trim().split(/\s+/).map(parseFloat));
//     const positionArray = new Float32Array(positions.flat());
//     geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
//     const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
//     points.current = new THREE.Points(geometry, material);
//     scene.current.add(points.current);

//     // Define a posição da câmera
//     camera.current.position.z = 5;

//     // Função para atualizar a rotação da nuvem de pontos com base no movimento do mouse
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
//       // Atualiza a rotação da nuvem de pontos com base no movimento do mouse
//       points.current.rotation.x += 0.05 * (target.current.y - points.current.rotation.x);
//       points.current.rotation.y += 0.05 * (target.current.x - points.current.rotation.y);
//       renderer.current.render(scene.current, camera.current);
//     }

//     animate();

//     // Atualiza a posição da câmera ao redimensionar a janela
//     function handleWindowResize() {
//       camera.current.aspect = window.innerWidth / window.innerHeight;
//       camera.current.updateProjectionMatrix();
//       renderer.current.setSize(window.innerWidth, window.innerHeight);
//     }

//     window.addEventListener('resize', handleWindowResize);

//     return () => {
//       window.removeEventListener('resize', handleWindowResize);
//       document.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, [cloudData]);

//   return <canvas ref={canvasRef} />;
// }

// export default RotatingCloud;

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import coordenadasArq from './coordenadas.json'

// function RotatingPointCloud() {
//   const canvasRef = useRef(null);
//   const camera = useRef(null);
//   const scene = useRef(null);

//   useEffect(() => {
//     // Inicializa a cena, a câmera e o renderer
//     scene.current = new THREE.Scene();
//     camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Adiciona pontos à cena (será substituído pelos pontos do arquivo .xyz)
//     const geometry = new THREE.BufferGeometry();
//     const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
//     const points = new THREE.Points(geometry, material);
//     scene.current.add(points);
//     ajustarZoomDaCamera();

//     // Define a posição da câmera
//     camera.current.position.z = 5;

//     // Função para ajustar o zoom da câmera para visualizar todos os pontos na mesma tela (adapte de acordo com a sua necessidade)
//     function ajustarZoomDaCamera() {
//       const boundingBox = new THREE.Box3().setFromObject(points);
//       const center = boundingBox.getCenter(new THREE.Vector3());
//       const size = boundingBox.getSize(new THREE.Vector3());
//       const maxDim = Math.max(size.x, size.y, size.z);
//       const fov = camera.current.fov * (Math.PI / 180);
//       let distance = maxDim / (2 * Math.tan(fov / 2));
//       const direction = camera.current.position.clone().sub(center).normalize();
//       const newPos = direction.multiplyScalar(distance).add(center);
//       camera.current.position.copy(newPos);
//       camera.current.lookAt(center);
//     }

//     // Função para carregar e renderizar pontos do arquivo .xyz
//     (async function renderizarPontosDoArquivo(arquivo) {
//       try {
//         // const content = coordenadasArq
//         // const coordenadas = content
//         //   .split('\n')
//         //   .map(line => line.trim().split(/\s+/).map(parseFloat))
//         //   .filter(coords => coords.length === 3);
//         // const vertices = coordenadas.map(coord => new THREE.Vector3(coord[0], coord[1], coord[2]));
//         const vertices = coordenadasArq.map(coord=>new THREE.Vector3(coord.x, coord.y, coord.z))
//         geometry.vertices = vertices;
//         geometry.verticesNeedUpdate = true;
//         ajustarZoomDaCamera();
//       } catch (error) {
//         console.error('Erro ao ler o arquivo:', error);
//       }
//     })();

//   }, []);

//   return (
//     <div>
//       <canvas ref={canvasRef} />
//     </div>
//   );
// }

// export default RotatingPointCloud;

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import coordenadasArq from './coordenadas.json';

// function RotatingPointCloud() {
//   const canvasRef = useRef(null);
//   const camera = useRef(null);
//   const scene = useRef(null);

//   useEffect(() => {
//     // Inicializa a cena, a câmera e o renderer
//     scene.current = new THREE.Scene();
//     camera.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     // Adiciona pontos à cena
//     const geometry = new THREE.BufferGeometry();
//     const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
//     const points = new THREE.Points(geometry, material);
//     scene.current.add(points);
//     ajustarZoomDaCamera();

//     // Define a posição da câmera
//     camera.current.position.z = 5;

//     // Função para ajustar o zoom da câmera para visualizar todos os pontos na mesma tela
//     function ajustarZoomDaCamera() {
//       const boundingBox = new THREE.Box3().setFromObject(points);
//       const center = boundingBox.getCenter(new THREE.Vector3());
//       const size = boundingBox.getSize(new THREE.Vector3());
//       const maxDim = Math.max(size.x, size.y, size.z);
//       const fov = camera.current.fov * (Math.PI / 180);
//       let distance = maxDim / (2 * Math.tan(fov / 2));
//       const direction = camera.current.position.clone().sub(center).normalize();
//       const newPos = direction.multiplyScalar(distance).add(center);
//       camera.current.position.copy(newPos);
//       camera.current.lookAt(center);
//     }

//     // Função para renderizar pontos do arquivo JSON
//     const renderizarPontosDoArquivo = () => {
//       try {
//         const vertices = coordenadasArq.map(coord => new THREE.Vector3(coord.x, coord.y, coord.z));
//         geometry.setFromPoints(vertices);
//         ajustarZoomDaCamera();
//       } catch (error) {
//         console.error('Erro ao ler o arquivo JSON:', error);
//       }
//     };

//     renderizarPontosDoArquivo();

//   }, []);

//   return (
//     <div>
//       <canvas ref={canvasRef} />
//     </div>
//   );
// }

// export default RotatingPointCloud;
