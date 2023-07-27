import React from 'react';
import {Button} from 'react-native';

type Props = {
  value: 'X' | 'O' | null; // The value of the square can be 'X', 'O', or null
  onPress: () => void; // This function will be called when the square is pressed
};

export const Square: React.FC<Props> = ({value, onPress}) => {
  return <Button onPress={onPress} title={value ? value : ' '} />;
};
