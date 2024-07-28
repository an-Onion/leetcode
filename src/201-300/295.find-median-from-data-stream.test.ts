import {
    MaxPriorityQueue,
    MinPriorityQueue,
} from '@datastructures-js/priority-queue';

class MedianFinder {
    maxHeap: MaxPriorityQueue<number>;
    minHeap: MinPriorityQueue<number>;
    constructor() {
        this.maxHeap = new MaxPriorityQueue();
        this.minHeap = new MinPriorityQueue();
    }

    addNum( num: number ): void {
        if ( this.maxHeap.isEmpty() ) {
            this.maxHeap.enqueue( num );
            return;
        }

        if ( this.maxHeap.size() === this.minHeap.size() ) {
            if ( num <= this.minHeap.front().element ) {
                this.maxHeap.enqueue( num );
                return;
            }
            this.maxHeap.enqueue( this.minHeap.dequeue().element );
            this.minHeap.enqueue( num );
            return;
        }
        // maxHeap.size = minHeap.size + 1

        if ( num >= this.maxHeap.front().element ) {
            this.minHeap.enqueue( num );
            return;
        }

        this.minHeap.enqueue( this.maxHeap.dequeue().element );

        this.maxHeap.enqueue( num );
    }

    findMedian(): number {
        if ( this.maxHeap.size() === this.minHeap.size() ) {
            return (
                ( this.maxHeap.front().element + this.minHeap.front().element ) / 2
            );
        }

        return this.maxHeap.front().element;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

describe( '295. Find Median from Data Stream', () => {
    it( 'should return correct median', () => {
        const obj = new MedianFinder();
        obj.addNum( 1 );
        obj.addNum( 2 );
        expect( obj.findMedian() ).toBe( 1.5 );
        obj.addNum( 3 );
        expect( obj.findMedian() ).toBe( 2 );
    } );
} );
