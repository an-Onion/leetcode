/*
 * @lc app=leetcode id=722 lang=typescript
 *
 * [722] Remove Comments
 */

// @lc code=start
export function removeComments( source: string[] ): string[] {

  const res: string[] = [];
  let blockOpen = false;
  let buff = '';
  for( const line of source ) {
    for( let i = 0; i < line.length; i++ ) {

      // //
      if( !blockOpen && !blockOpen && line[i] === '/' && line[i+1] === '/' ){
        break;
      }

      // /*
      else if( !blockOpen && line[i] === '/' && line[i+1] === '*' ){
        blockOpen = true;
        i++;
      }

      // */
      /* /*
      //sdf */
      else if( blockOpen && line[i] === '*' && line[i+1] === '/' ){
        blockOpen = false;
        i++;
      }

      else if( !blockOpen ){
        buff += line[i];
      }

    }

    if( buff && !blockOpen ){
      res.push( buff );
      buff = '';
    }

  }

  return res;

}
// @lc code=end

