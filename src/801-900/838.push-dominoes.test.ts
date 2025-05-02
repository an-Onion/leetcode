function pushDominoes( dominoes: string ): string {
    const n = dominoes.length;

    const left: number[] = Array( n ).fill( Infinity );
    let L = Infinity;

    for ( let i = n - 1; i >= 0; i-- ) {
        if ( dominoes[i] === 'R' ) {
            L = Infinity;
            continue;
        }
        if ( dominoes[i] === 'L' ) {
            L = i;
        }
        if ( L !== Infinity ) {
            left[i] = L - i;
        }
    }

    const right: number[] = Array( n ).fill( Infinity );
    let R = Infinity;

    for ( let i = 0; i < n; i++ ) {
        if ( dominoes[i] === 'L' ) {
            R = Infinity;
            continue;
        }
        if ( dominoes[i] === 'R' ) {
            R = i;
        }
        if ( R !== Infinity ) {
            right[i] = i - R;
        }
    }

    const ret = Array( n ).fill( '.' );

    for ( let i = 0; i < n; i++ ) {
        if ( left[i] < right[i] ) {
            ret[i] = 'L';
        } else if ( left[i] > right[i] ) {
            ret[i] = 'R';
        }
    }

    return ret.join( '' );
}

describe( '838. push dominoes', () => {
    it( 'case 1', () => {
        expect( pushDominoes( 'RR.L' ) ).toBe( 'RR.L' );
    } );

    it( 'case 2', () => {
        expect( pushDominoes( '.L.R...LR..L..' ) ).toBe( 'LL.RR.LLRRLL..' );
    } );
} );
