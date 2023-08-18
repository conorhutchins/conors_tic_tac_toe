import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Square} from '../../src/components/Square';

describe('Square component', () => {
  it('renders correctly with given value', () => {
    const {getByText} = render(<Square value="❌" onPress={() => {}} />);
    expect(getByText('❌')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<Square value="❌" onPress={onPressMock} />);
    fireEvent.press(getByTestId('square'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
