function findItinerary( tickets: string[][] ): string[] {

    tickets.sort( ( a, b ) => {
        if( b[ 0 ] === a[ 0 ] ){
            return b[ 1 ].localeCompare( a[ 1 ] );
        }
        return b[ 0 ].localeCompare( a[ 0 ] );
    } );

    const map = new Map<string, number[]>();

    for( let i = 0; i < tickets.length; i++ ){
        const [ from ] = tickets[ i ];
        if( !map.has( from ) ){
            map.set( from, [] );
        }
        map.get( from )!.push( i );
    }

    const ret = [];
    function DFS( curr: string ) {

        while( map.get( curr )?.length > 0 ){
            const index = map.get( curr )!.pop()!;
            DFS( tickets[ index ][1] );
        }

        ret.push( curr );
    }

    DFS( 'JFK' );
    return ret.reverse();
}

describe( '332. reconstruct-itinerary', () => {
    it( 'case 1', () => {
        const tickets = [
            ['MUC', 'LHR'],
            ['JFK', 'MUC'],
            ['SFO', 'SJC'],
            ['LHR', 'SFO'],
        ];
        expect( findItinerary( tickets ) ).toStrictEqual( [
            'JFK',
            'MUC',
            'LHR',
            'SFO',
            'SJC',
        ] );
    } );

    it( 'case 2', () => {
        const tickets = [
            ['JFK', 'SFO'],
            ['JFK', 'ATL'],
            ['SFO', 'ATL'],
            ['ATL', 'JFK'],
            ['ATL', 'SFO'],
        ];
        expect( findItinerary( tickets ) ).toStrictEqual( [
            'JFK',
            'ATL',
            'JFK',
            'SFO',
            'ATL',
            'SFO',
        ] );
    } );

    it( 'case 3', () => {
        const tickets = [['JFK','KUL'],['JFK','NRT'],['NRT','JFK']];
        expect( findItinerary( tickets ) ).toStrictEqual( [
            'JFK',
            'NRT',
            'JFK',
            'KUL',
        ] );

    } );
} );
