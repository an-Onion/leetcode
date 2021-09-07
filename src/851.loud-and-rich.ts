/*
 * @lc app=leetcode id=851 lang=typescript
 *
 * [851] Loud and Rich
 */

// @lc code=start
export function loudAndRich(richer: number[][], quiet: number[]): number[] {

  const graph = new Map<number, number[]>();
  const inDegree = Array(quiet.length).fill(0);
  const ret = inDegree.map((_, idx) => idx);

  for(const [u, v] of richer){
    const node = getNode(u);
    node.push(v);
    inDegree[v]++;
  }

  const Q: number[]  = [];

  for(let i = 0; i < inDegree.length; i++){
    if( !inDegree[i] ){
     Q.push(i);
    }
  }

  while( Q.length ){
    const u = Q.shift();
    for(const v of getNode(u) ){

      if( quiet[ret[u]] < quiet[ret[v]] ){
        ret[v] = ret[u];
      }

      inDegree[v]--;

      if( !inDegree[v] ) {
        Q.push(v);
      }

    }
  }

  return ret;

  function getNode(u: number) {
    if( !graph.has(u) ) graph.set(u, []);
    return graph.get(u);
  }

}
// @lc code=end

