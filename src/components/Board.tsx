import React from 'react';
import {View} from 'react-native';
import {Square} from './Square';

type BoardProps = {
  squares: ('X' | 'O' | null)[];
  onPress: (index: number) => void;
};

export const Board: React.FC<BoardProps> = ({ squares, onPress }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onPress={() => onPress(i)} />
      ))}
    </View>
  );
};
