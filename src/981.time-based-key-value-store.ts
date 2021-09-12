/*
 * @lc app=leetcode id=981 lang=typescript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start
export class TimeMap {

  timeOfValue: Map<number, string>;
  keyOfTime: Map<string, number[]>;

  constructor() {
    this.timeOfValue = new Map<number, string>();
    this.keyOfTime = new Map<string, number[]>();
  }

  set( key: string, value: string, timestamp: number ): void {
    this.timeOfValue.set( timestamp, value );

    if( !this.keyOfTime.has( key ) ) {
      this.keyOfTime.set( key, [] );
    }

    this.keyOfTime.get( key ).push( timestamp );
  }

  get( key: string, timestamp: number ): string {
    const times = this.keyOfTime.get( key );
    if( !times ) return '';
    const pre = this.bs( times, timestamp );
    return this.timeOfValue.get( pre ) || '';
  }

  bs( times: number[], target: number ): number {
    let l = 0, u = times.length-1;
    while( l <= u ){
      const m = l + u >> 1;
      if( times[m] <= target ) l = m + 1;
      else u = m - 1;
    }
    return times[u];
  }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end

