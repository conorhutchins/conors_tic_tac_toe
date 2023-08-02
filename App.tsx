import React, {useState} from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {Board} from './src/components/Board';

// Function to calculate the winner
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
    Array(9).fill(null),
  );
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // Determine the winner
  const winner = calculateWinner(squares);
  // Determine the game status
  let status;
  if (winner) {
    status = 'The winner is ' + winner + '! ';
  } else {
    status = "No winner! " + (xIsNext ? 'X' : 'O')+"'s" + " goes first next time";
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
    const localWinner = calculateWinner(newSquares); // Calculate the winner here
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    // If the game is over, show the modal
    if (localWinner || !newSquares.includes(null)) {
      setModalVisible(true);
    }
  };

  // function to reset the game
  const handleRestartFromModal = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setModalVisible(false);
  };

  // Render the game board and status message
  return (
    <View style={styles.container}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        presentationStyle='overFullScreen'
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{status}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleRestartFromModal}>
              <Text style={styles.textStyle}>Go Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text>{status}</Text>
      <Board squares={squares} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '0%',
    marginBottom: '120%',
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  closeButton: {
    backgroundColor: "orange",
    borderRadius: 10,
    padding: 10,
    elevation: 4,
    marginTop: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
