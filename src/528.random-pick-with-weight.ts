/*
 * @lc app=leetcode id=528 lang=typescript
 *
 * [528] Random Pick with Weight
 */

// @lc code=start
export class Solution {
    w: number[];
    sum: number;
    constructor(w: number[]) {
      this.w = Array(w.length+1).fill(0);
      for(let i = 0; i < w.length; ++i){
        this.w[i+1] = this.w[i] + w[i];
      }
      this.sum = this.w[w.length];
    }

    pickIndex(): number {
      const cand = Math.floor(Math.random() * this.sum);
      return this.bs(cand);
    }

    bs(cand: number): number {
      let l = 0, u = this.w.length-2;

      while(l <= u ){
        const mid = l + u >> 1;
        if( this.w[mid] <= cand ) l = mid + 1;
        else u = mid - 1;
      }

      return u;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end

