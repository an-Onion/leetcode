import { shortestBridge } from '../src/934.shortest-bridge';

describe('Shortest Bridge', () => {

  it('e.g. 1', () => {
    const grid = [[0,1,0],[0,0,0],[0,0,1]];
    expect(shortestBridge(grid)).toBe(2);
  });

  it('e.g. 2', () => {
    const grid = [[0,1],[1,0]];
    expect(shortestBridge(grid)).toBe(1);
  });

  it('e.g. 3', () => {
    const grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]];
    expect(shortestBridge(grid)).toBe(1);
  });
});
