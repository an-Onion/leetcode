/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start
export class LRUCache {

  capacity: number;
  length: number;
  map: Map<number, DoubleLink>;
  head: DoubleLink;
  tail: DoubleLink;

  constructor( capacity: number ) {
    this.capacity = capacity;
    this.length = 0;
    this.map = new Map<number, DoubleLink>();
    this.head = new DoubleLink( { key: -1, value: -1 } );
    this.tail = this.head;
  }

  get( key: number ): number {

    if ( !this.map.has( key ) ) {
      return -1;
    }
    
    return this.#update( key );
    
  }

  #update( key: number ): number {
    const node = this.map.get( key );

    this.#remove( key );

    this.#insert( key, node );

    return node.value;
  }

  put( key: number, value: number ): void {

    if ( this.map.has( key ) ) {
      this.map.get( key ).value = value;
      this.#update( key );
      return;
    }

    const node = new DoubleLink( { key, value } );
    
    if( this.length === this.capacity ){
      this.#remove( this.tail.key );
    }

    this.#insert( key, node );
  }

  #remove( key: number ): void {
    
    const node = this.map.get( key );
    this.length--;
    this.map.delete( key );

    const prev = node.pre;
    const next = node.next;
    prev.next = next;

    if( !next ) {
      this.tail = prev;
      return; 
    }
    
    next.pre = prev; 
  }

  #insert( key: number, node: DoubleLink ): void {    

    this.map.set( key, node );
    this.length++;
    const next = this.head.next;
    node.next = next;
    node.pre = this.head;
    this.head.next = node;

    if( this.tail === this.head ) {
      this.tail = node;
      return;
    }
    next.pre = node;

  }

}
class DoubleLink {
  key: number;
  value: number;
  pre: DoubleLink;
  next: DoubleLink;
  constructor( { key,value }:{key: number, value: number}  ) {
    this.key = key;
    this.value = value;
    this.pre = null;
    this.next = null;
  }
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

