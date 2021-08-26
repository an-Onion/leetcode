/*
 * @lc app=leetcode id=756 lang=typescript
 *
 * [756] Pyramid Transition Matrix
 */

// @lc code=start
export function pyramidTransition(bottom: string, allowed: string[]): boolean {

  const map = new Map<string, string[]>();

  for(const all of allowed){
    const lower = all.substr(0, 2);
    if( !map.has(lower) ) map.set(lower, []);
    map.get(lower).push(all[2]);
  }

  const DFS = (bottom: string, start: number, next: string): boolean => {

    if( bottom.length === 1 ) return true;

    if( next.length === bottom.length-1 ) return DFS(next, 0, '');

    const candidate = bottom.substring(start, start+2);

    if( !map.has(candidate) ) return false;

    for(const char of map.get(candidate) ){
      if( DFS(bottom, start+1, next+char) )
        return true;
    }

    return false;
  };

  return DFS(bottom, 0, '');
}
// @lc code=end

