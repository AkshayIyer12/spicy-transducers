import tail from '../tail';

describe('array/tail', () => {
  it('should get value from array at n-1th index', () => {
    const arr = [100, 200, 300];
    expect(tail(arr)).toEqual(300);
  })
})
