import { useState, useEffect } from 'react';
import { conway } from './conway';

function App() {
  const zeroOrOne = () => Number(Math.random() > 0.5);
  const [grid, setGrid] = useState(
    Array(20).fill(0).map(row => (
      Array(20).fill(0).map(zeroOrOne)
    ))
  );

  useEffect(() => {
    const i = setInterval(
      () => setGrid(g => conway(g)),
      200
    );

    return () => clearInterval(i);
  }, []);

  return (
    grid.map(row => <Row data={row}/>)
  );
}

function Row({ data }) {
  return (
    <pre>{data.map(c => c ? '@' : String.fromCharCode(160)).join(' ')}</pre>
  );
}

export default App;
