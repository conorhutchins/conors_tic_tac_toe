import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Square} from './Square';

type BoardProps = {
  squares: ('❌' | '⭕️' | null)[];
  onPress: (index: number) => void;
};

export const Board: React.FC<BoardProps> = ({squares, onPress}) => {
  return (
    <View style={styles.board} testID="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} onPress={() => onPress(i)} />
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
