import React, {useState} from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {Board} from './src/components/Board';

function calculateWinner(squares: Array<'X' | 'O' | null>): 'X' | 'O' | null {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const App: React.FC = () => {
  const [squares, setSquares] = useState<Array<'X' | 'O' | null>>(
    Array(9).fill(null),
  );
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'The winner is ' + winner + '! ';
  } else {
    status = "No winner! " + (xIsNext ? 'O' : 'X')+"'s" + " goes first next time";
  }

  const handlePress = (index: number) => {
    if (squares[index] != null || winner != null) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    const localWinner = calculateWinner(newSquares); 
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    if (localWinner || !newSquares.includes(null)) {
      setModalVisible(true);
    }
  };

  const handleRestartFromModal = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(!xIsNext);
    setModalVisible(false);
  };

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
