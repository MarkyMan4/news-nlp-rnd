import React from 'react';
import './App.css';
import { useRef } from 'react';
import Cloud from './components/cloud';

function App() {
  const canvasRef = useRef(null);

  return (
    <div>
      <Cloud />
    </div>
  );
}

export default App;
