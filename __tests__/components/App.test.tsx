import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../../App';

describe('App component', () => {
  it('renders the game board and initial status message correctly', () => {
    const {getByText, getByTestId} = render(<App />);

    // Render the board
    expect(getByTestId('board')).toBeTruthy();

    // Ensure the status message indicates that 'x' goes first
    expect(getByText("No winner! ❌'s goes first next time")).toBeTruthy();
  });
});
