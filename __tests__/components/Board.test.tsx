import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Board} from '../../src/components/Board';

describe('Board component', () => {
it('initially renders correctly', () => {
        const squares = Array(9).fill(null);
        const { getByTestId } = render(<Board squares={squares} onPress={() => {}} />);
        expect(getByTestId('board')).toBeTruthy();
});
it('calls onPress with the correct index when a square is pressed', () => {
    const onPressMock = jest.fn();  // this is the mock function
    const squares = Array(9).fill(null); 
    const { getAllByTestId } = render(<Board squares={squares} onPress={onPressMock} />);
  
    fireEvent.press(getAllByTestId('square')[0]); // simulates a press on the first square
  
    expect(onPressMock).toHaveBeenCalledWith(0);
  });

    });