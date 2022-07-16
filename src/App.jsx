import { useState, useEffect, useLayoutEffect } from 'react';
import { conway } from './conway';
import { CELL_SIZE } from './constants';
import './App.scss';

function getWindowDimensions() {
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

  return { windowWidth, windowHeight };
}

function App() {
  const [{ windowWidth, windowHeight }, setWindowDimensions] = useState(getWindowDimensions())
  
  const [cols, setCols] = useState(windowWidth/CELL_SIZE|0);
  const [rows, setRows] = useState(windowHeight/CELL_SIZE|0);
  const zeroOrOne = () => Number(Math.random() > 0.5);
  const randgrid = (r, c) => (
    Array(rows).fill(0).map(() => (
      Array(cols).fill(0).map(zeroOrOne)
    ))
  );
  const [grid, setGrid] = useState(randgrid(rows, cols));

  useEffect(() => {
    const resize = () => {
      setCols(window.innerWidth/CELL_SIZE|0);
      setRows(window.innerHeight/CELL_SIZE|0);
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    setGrid(randgrid(rows, cols));
  }, [rows, cols])

  useEffect(() => {
    const i = setInterval(
      () => setGrid(g => conway(g)),
      150
    );

    return () => clearInterval(i);
  }, []);

  return (
    grid.map((row, rowNum) => (
      <Row key={rowNum}>
        {row.map((cell, cellNum) => <Cell size={CELL_SIZE} state={cell}/>)}
      </Row>
    ))
  );
}

function Row({ children }) {
  return (
    <div>{ children }</div>
  );
}

function Cell({ size, state }) {
  return (
    <div style={{
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: state ? "silver" : "white",
      borderRadius: "20px"
    }}></div>
  )
}

export default App;
