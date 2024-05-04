/*
 * @lc app=leetcode id=59 lang=typescript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
export function generateMatrix( n: number ): number[][] {

    const matrix: number[][] = Array.from( { length: n }, () => Array( n ).fill( 0 ) );

    let [top, bottom, left, right] = [0, n - 1, 0, n - 1];

    let count = 1;

    while( count <= n * n ) {

        for( let i = left; i <= right; i++ ) {
            matrix[top][i] = count++;
        }

        top++;

        for( let i = top; i <= bottom; i++ ) {
            matrix[i][right] = count++;
        }
        right--;

        for( let i = right; i >= left; i-- ) {
            matrix[bottom][i] = count++;
        }

        bottom--;

        for( let i = bottom; i >= top; i-- ) {
            matrix[i][left] = count++;
        }

        left++;

    }

    return matrix;
}
// @lc code=end

