import * as _ from 'lodash';

function minPartitions( n: string ): number {
    return Number( _.max( n ) );
}

describe( '1689. Partitioning Into Minimum Number Of Deci-Binary Numbers', () => {
    it( 'case 1', () => {
        expect( minPartitions( '32' ) ).toBe( 3 );
    } );

    it( 'case 2', () => {
        expect( minPartitions( '82734' ) ).toBe( 8 );
    } );

    it( 'case 3', () => {
        expect( minPartitions( '27346209830709182346' ) ).toBe( 9 );
    } );
} );
