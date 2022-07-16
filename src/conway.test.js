import { conway, gridvals, neighbours } from './conway';

describe('conway', () => {
  it('should return next state for game of life', () => {

    const examples = [
      [[1]],
      [[0]],

      [[0,0,0],
       [0,0,0],
       [0,0,0]],
      [[0,0,0],
       [0,0,0],
       [0,0,0]],

      [[1,1,0],
       [0,1,0],
       [0,0,0]],
      [[1,1,0],
       [1,1,0],
       [0,0,0]],

      [[1,0,0],
       [1,0,0],
       [1,0,0]],
      [[0,0,0],
       [1,1,0],
       [0,0,0]],

    ];

    for (let i = 0; i < examples.length; i+=2) {
      const before = examples[i];
      const after = examples[i+1];
      expect(conway(before)).toEqual(after);
    }
  });
});

describe('neighbours', () => {
  it('should identify neighbours', () => {
    const _1x1 = [[0]];
    expect(neighbours(_1x1, [0, 0])).toEqual([]);

    const _2x2 = [
      [0, 0],
      [0, 0]
    ];
    expect(neighbours(_2x2, [0, 0]).sort()).toEqual([[0, 1], [1, 0], [1, 1]].sort());
    expect(neighbours(_2x2, [0, 1]).sort()).toEqual([[0, 0], [1, 0], [1, 1]].sort());
  });
});

describe('gridvals', () => {
  it('should extract values at points on grid', () => {
    const grid = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];

    const points = [[1, 0], [1, 2], [0, 0]];
    expect(gridvals(grid, points)).toEqual([3, 5, 0]);
  });
})
