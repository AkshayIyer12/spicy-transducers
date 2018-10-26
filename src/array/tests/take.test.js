import take from '../take';

describe('array/take', () => {
  it('uses the built in slice method', () => {
    const input = [0, 1, 2, 3, 4, 5];
    const expected = [0, 1, 2];
  
    expect(take(3)(input)).toEqual(expected);
  });
});
