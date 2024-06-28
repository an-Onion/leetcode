/*
 * @lc app=leetcode id=622 lang=typescript
 *
 * [622] Design Circular Queue
 */

// @lc code=start
export class MyCircularQueue {

    capacity: number;
    length: number;
    queue: number[];
    front: number;

    constructor( k: number ) {
      this.capacity = k;
      this.length = 0;
      this.queue = Array( k ).fill( -1 );
      this.front = 0;
    }

    enQueue( value: number ): boolean {

      if( this.isFull() ) return false;
      this.length++;
      const rear = this.getRearIndex();
      this.queue[rear] = value;
      return true;
    }

    getRearIndex(): number {
      return ( this.front + this.length - 1 + this.capacity ) % this.capacity;
    }

    deQueue(): boolean {
      if( this.isEmpty() ) return false;

      this.front = ( this.front + 1 + this.capacity ) % this.capacity;
      this.length--;
      return true;
    }

    Front(): number {
      if( this.isEmpty() ) return -1;
      return this.queue[this.front];
    }

    Rear(): number {
      if( this.isEmpty() ) return -1;
      const rear = this.getRearIndex();
      return this.queue[rear];
    }

    isEmpty(): boolean {
      return this.length === 0;
    }

    isFull(): boolean {
      return this.length === this.capacity;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

