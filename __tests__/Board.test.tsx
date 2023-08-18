import React from 'react';
import {render} from '@testing-library/react-native';
import {Board} from '../src/components/Board';

describe('Board component', () => {
it('initially renders correctly', () => {
        const squares = Array(9).fill(null);
        const { getByTestId } = render(<Board squares={squares} onPress={() => {}} />);
        expect(getByTestId('board')).toBeTruthy();
      });
    });