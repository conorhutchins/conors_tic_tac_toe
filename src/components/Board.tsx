import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Square } from './Square';
import { makeMove } from '../redux/game/gameSlice' // imports the action makeMove
import { calculateWinner } from '../../App';

type BoardProps = {

};

export const Board: React.FC<BoardProps> = () => {
  const squares = useSelector((state) => state.game.squares) // access the game state
  const dispatch = useDispatch() // get the dispatch function

  // define a func to handle square presses and dispatch the makeMove action
  const handleSquarePress = (index: number) => {
    // check if the square is already filled of if theres a winner
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    // dispatch the makeMove action with selected square index
    dispatch(makeMove(index));
  };

return (
    <View style={styles.board} testID="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} onPress={() => handleSquarePress(i)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    backgroundColor: 'yellow',
  },
});