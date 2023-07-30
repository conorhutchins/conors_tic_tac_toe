import React, { useState } from 'react';
import { Text, View, Button} from 'react-native';
import { Board } from './src/components/Board';

function calculateWinner(squares: Array<'X' | 'O' | null>): 'X' | 'O' | null {
  // These are the 8 possible winning combinations
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // Check each combination to see if it's a winning one
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // If all squares in a combination are filled with the same player's mark, return the winner
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  // If no winner, return null
  return null;
}

// The main component of the app
const App: React.FC = () => {
  // The state of the game board and whose turn it is
  const [squares, setSquares] = useState<Array<'X' | 'O' | null>>(
    Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  // Determine the winner
  const winner = calculateWinner(squares);
  // Determine the game status
  let status;
  if (winner) {
    status = 'The winner is ' + winner + '!';
  } else {
    status = (xIsNext ? 'X' : 'O') + "it's your turn";
  }

  // Handle square presses
  const handlePress = (index: number) => {
    // If the square is already filled or the game is over, do nothing
    if (squares[index] != null || winner != null) {
      return;
    }
    // Otherwise, fill the square with the current player's mark, update the state, and switch turns
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  // function to reset the game
  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };
  // Render the game board and status message
  return (
    <View>
      <Text>{status}</Text>
      <Board squares={squares} onPress={handlePress} />
      {/* New 'Play Again' button */}
      <Button onPress={handleRestart} title="Play Again" />
    </View>
  );
};

export default App;
