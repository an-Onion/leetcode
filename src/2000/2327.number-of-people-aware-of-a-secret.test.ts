import { Deque } from '@datastructures-js/deque';

function peopleAwareOfSecret( n: number, delay: number, forget: number ): number {
    const MOD = 10e8 + 7;
    const know = new Deque<number[]>();
    const share = new Deque<number[]>();
    know.pushBack( [1, 1] );
    let knowCnt = 1,
        shareCnt = 0;

    for ( let i = 2; i <= n; i++ ) {
        if ( !know.isEmpty() && know.front()[0] === i - delay ) {
            const first = know.popFront();
            knowCnt = ( knowCnt - first[1] + MOD ) % MOD;
            shareCnt = ( shareCnt + first[1] ) % MOD;
            share.pushBack( first );
        }
        if ( !share.isEmpty() && share.front()[0] === i - forget ) {
            const first = share.popFront();
            shareCnt = ( shareCnt - first[1] + MOD ) % MOD;
        }
        if ( !share.isEmpty() ) {
            knowCnt = ( knowCnt + shareCnt ) % MOD;
            know.pushBack( [i, shareCnt] );
        }
    }
    return ( knowCnt + shareCnt ) % MOD;
}

describe( '2327. Number of People Aware of a Secret', () => {
    it( 'case 1', () => {
        expect( peopleAwareOfSecret( 6, 2, 4 ) ).toBe( 5 );
    } );

    it( 'case 2', () => {
        expect( peopleAwareOfSecret( 4, 1, 3 ) ).toBe( 6 );
    } );
} );
