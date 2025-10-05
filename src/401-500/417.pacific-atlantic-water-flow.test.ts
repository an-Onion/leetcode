import { Queue } from '@datastructures-js/queue';

function pacificAtlantic(heights: number[][]): number[][] {
    const [m, n] = [heights.length, heights[0].length];

    const pacific = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    for (let i = 0; i < m; i++) {
        BFS(i, 0, pacific);
        BFS(i, n - 1, atlantic);
    }

    for (let j = 0; j < n; j++) {
        BFS(0, j, pacific);
        BFS(m - 1, j, atlantic);
    }

    const ret: number[][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!pacific[i][j] || !atlantic[i][j]) continue;
            ret.push([i, j]);
        }
    }
    return ret;

    function BFS(row: number, col: number, ocean: boolean[][]) {
        if (ocean[row][col]) return;

        const Q = new Queue<[number, number]>([[row, col]]);
        ocean[row][col] = true;

        while (Q.size()) {
            const [row, col] = Q.dequeue();
            for (const [dr, dc] of dirs) {
                const r = row + dr,
                    c = col + dc;
                if (
                    r < 0 ||
                    r >= heights.length ||
                    c < 0 ||
                    c >= heights[0].length
                )
                    continue;
                if (ocean[r][c]) continue;
                if (heights[r][c] < heights[row][col]) continue;
                ocean[r][c] = true;
                Q.push([r, c]);
            }
        }
    }
}

describe('417. Pacific Atlantic Water Flow', () => {
    it('case 1', () => {
        const heights = [
            [1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4],
        ];
        expect(pacificAtlantic(heights)).toEqual([
            [0, 4],
            [1, 3],
            [1, 4],
            [2, 2],
            [3, 0],
            [3, 1],
            [4, 0],
        ]);
    });

    it('case 2', () => {
        const heights = [
            [2, 1],
            [1, 2],
        ];
        expect(pacificAtlantic(heights)).toEqual([
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1],
        ]);
    });

    it('case 3', () => {
        const heights = [[1]];
        expect(pacificAtlantic(heights)).toEqual([[0, 0]]);
    });
});
