import React, {useState} from 'react';
import {Board} from './src/components/Board';

const App: React.FC = () => {
  const [squares, setSquares] = useState<Array<'X' | 'O' | null>>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState<boolean>(true);

const handlePress = (index: number) => {
    if (squares[index] != null) {
      // if square is already filled, do nothing
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext); // Switch turns
  };

  return <Board squares={squares} onPress={handlePress} />;
};

export default App;