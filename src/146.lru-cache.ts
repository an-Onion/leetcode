/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start
export class LRUCache {

  length: number;
  limit: number;
  head: DoubleLink;
  tail: DoubleLink;
  map: Map<number, DoubleLink>;
  constructor(k: number){
      this.limit = k;
      this.length = 0;
      this.head = new DoubleLink(-1, -1);
      this.map = new Map();
  }

  set(key: number, value: number): void{
      let node = this._get(key);
      if(!node) {
        node = this.create(key, value);
      }
      node.value = value;
  }

  create(key: number, value: number): DoubleLink {
    const node = new DoubleLink(key, value);
    this.map.set(key, node);
    this.toTop(node);
    this.length++;
    this.checkLength();
    return node;
  }

  _get(key: number): DoubleLink {
      const node: DoubleLink = this.map.get(key);
      if( !node ) return null;
      this.delete(node);
      this.toTop(node);
      return node;
  }

  toTop(node: DoubleLink) {
     node.next = this.head.next;
     if (node.next) node.next.pre = node;
     this.head.next = node;
     if( !this.tail ) this.tail = node;
  }
  checkLength() {
      if( this.length > this.limit ){
        const key = this.tail.key;
        this.map.delete(key);
        this.delete(this.tail);
        this.length--;
      }
  }
  delete(node: DoubleLink) {
    if( this.tail === node ){
      this.tail = node.pre;
    }
    if( node.pre ) node.pre.next = node.next;
    else this.head.next = node.next;

    if( node.next ) node.next.pre = node.pre;

    node.pre = null;
    node.next = null;
    return node;
  }

  get(key: number): number {
    return this._get(key)?.value ?? -1;
  }

  put(key: number, value: number): void {
    this.set(key, value);
  }
}
class DoubleLink {
  value: number;
  key: number;
  pre: DoubleLink;
  next: DoubleLink;
  constructor(key:number, value: number) {
      this.value = value;
      this.key = key;
  }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

