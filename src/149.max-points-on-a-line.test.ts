function maxPoints( points: number[][] ): number {

    let ret = 1;
    
    for( const [xA, yA] of points ){
        const slope = new Map<number, number>();
        
        for( const [xB, yB] of points ){

            if( xA === xB && yA === yB ) continue;

            if( xA === xB ){
                slope.set( Infinity, ( slope.get( Infinity ) ?? 0 ) + 1 );
                continue;
            }
            const slopeValue = ( yB - yA ) / ( xB - xA );
            slope.set( slopeValue, ( slope.get( slopeValue ) ?? 0 ) + 1 );
        }
        ret = Math.max( ret, 1+ Math.max( ...slope.values() ) );
    }
    return ret;
}

describe( '149. max points', () => {

    it( '[[1,1]]', () => {
        expect( maxPoints( [ [1,1] ] ) ).toStrictEqual( 1 );
    } );

    it( '[[1,1],[2,2],[3,3]]', () => {
        expect( maxPoints( [
            [1,1],
            [2,2],
            [3,3],
        ] ) ).toStrictEqual( 3 );
    } );
    it( '[[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]', () => {

        expect( maxPoints( [
            [1,1],
            [3,2],
            [5,3],
            [4,1],
            [2,3],
            [1,4],
        ] ) ).toStrictEqual( 4 );
    } );
} );