/*
 * @lc app=leetcode id=641 lang=typescript
 *
 * [641] Design Circular Deque
 */

// @lc code=start
export class MyCircularDeque {

    length: number;
    capacity: number;
    queue: number[];
    front: number;

    constructor(k: number) {
      this.capacity = k;
      this.length = 0;
      this.queue = Array(k).fill(-1);
      this.front = k-1;
    }

    getRearIndex(): number {
      return (this.front + this.length-1 + this.capacity) % this.capacity;
    }

    insertFront(value: number): boolean {
      if( this.isFull() ) return false;

      this.length++;
      this.front = (this.front - 1 + this.capacity ) % this.capacity;
      this.queue[this.front] =  value;
      return true;
    }

    insertLast(value: number): boolean {
      if( this.isFull() ) return false;

      this.length++;
      const rear = this.getRearIndex();
      this.queue[rear] =  value;
      return true;
    }

    deleteFront(): boolean {
      if(this.isEmpty()) return false;
      this.length--;
      this.front = (this.front + 1 + this.capacity) % this.capacity;
      return true;
    }

    deleteLast(): boolean {
      if(this.isEmpty()) return false;
      this.length--;
      return true;
    }

    getFront(): number {
      if( this.isEmpty() ) return -1;
      return this.queue[this.front];
    }

    getRear(): number {
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
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

