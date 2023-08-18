import {calculateWinner} from '../../App';

describe('testing calculate winner function', () => {
  test('it returns an empty array when passed an empty array', () => {
    const squares = [null, null, null, null, null, null, null, null, null];
    const winner = calculateWinner(squares);
    expect(winner).toBeNull();
  });

  test("input is not mutated", () => {
    const squares = ['❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌'];
    calculateWinner(squares);
    expect(squares).toEqual(['❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌', '❌']);
  });

  test('calculateWinner correctly identifies a winner', () => {
    const squares = ['X', 'X', 'X', null, 'O', null, null, null, null];
    const winner = calculateWinner(squares);
    expect(winner).toBe('X');
  });
});
