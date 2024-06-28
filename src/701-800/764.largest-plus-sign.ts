/*
 * @lc app=leetcode id=764 lang=typescript
 *
 * [764] Largest Plus Sign
 */

// @lc code=start
export function orderOfLargestPlusSign( n: number, mines: number[][] ): number {

  const matrix = Array( n ).fill( 0 ).map( () => Array( n ).fill( n ) );

  for( const mine of mines ) {
    matrix[mine[0]][mine[1]] = 0;
  }

  for( let r = 0; r < n; ++r ){
    let count = 0;

    for( let c = 0; c < n; ++c ){
      if( !matrix[r][c] ){
        count = 0;
        continue;
      }
      matrix[r][c] = Math.min( ++count, matrix[r][c] );
    }

    count = 0;
    for( let c = n-1; c >= 0; --c ){
      if( !matrix[r][c] ){
        count = 0;
        continue;
      }
      matrix[r][c] = Math.min( ++count, matrix[r][c] );
    }
  }

  let ans = 0;
  for( let c = 0; c < n; ++c ){
    let count = 0;
    for( let r = 0; r < n; ++ r ){
      if( !matrix[r][c] ){
        count = 0;
        continue;
      }
      matrix[r][c] = Math.min( ++count, matrix[r][c] );
    }

    count = 0;
    for( let r = n-1; r >= 0; --r ){
      if( !matrix[r][c] ){
        count = 0;
        continue;
      }
      matrix[r][c] = Math.min( ++count, matrix[r][c] );
      ans = Math.max( matrix[r][c], ans );
    }
  }

  return ans;
}
// @lc code=end

