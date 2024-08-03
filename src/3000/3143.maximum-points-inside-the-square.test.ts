import { MinPriorityQueue } from '@datastructures-js/priority-queue';

function maxPointsInsideSquare( points: number[][], s: string ): number {
    const Q = new MinPriorityQueue<[number, string]>();

    for ( let i = 0; i < points.length; i++ ) {
        const [x, y] = points[i];
        const d = Math.max( Math.abs( x ), Math.abs( y ) );
        Q.enqueue( [d, s[i]], d );
    }

    let ret = 0;
    const set = new Set<string>();

    while ( !Q.isEmpty() ) {
        const [d] = Q.front().element;

        let len = 0;
        while ( !Q.isEmpty() && Q.front().element[0] === d ) {
            const [, s] = Q.dequeue().element;
            if ( set.has( s ) ) {
                return ret;
            }
            set.add( s );
            len++;
        }
        ret += len;
    }
    return ret;
}

describe( '3143. Maximum Points Inside a Square', () => {
    it( 'example 1', () => {
        const points = [
                [2, 2],
                [-1, -2],
                [-4, 4],
                [-3, 1],
                [3, -3],
            ],
            s = 'abdca';
        expect( maxPointsInsideSquare( points, s ) ).toBe( 2 );
    } );

    it( 'example 2', () => {
        const points = [
                [1, 1],
                [-2, -2],
                [-2, 2],
            ],
            s = 'abb';

        expect( maxPointsInsideSquare( points, s ) ).toBe( 1 );
    } );

    it( 'example 3', () => {
        const points = [
                [1, 1],
                [-1, -1],
                [2, -2],
            ],
            s = 'ccd';
        expect( maxPointsInsideSquare( points, s ) ).toBe( 0 );
    } );
} );
