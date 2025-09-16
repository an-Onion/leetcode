function earliestTime( tasks: number[][] ): number {
    return Math.min( ...tasks.map( ( [s, t] ) => s + t ) );
}

describe( '3683. Earliest Time to Finish One Task', () => {
    it( 'case 1', () => {
        const tasks = [
            [1, 6],
            [2, 3],
        ];
        const result = earliestTime( tasks );
        expect( result ).toBe( 5 );
    } );

    it( 'case 2', () => {
        const tasks = [
            [100, 100],
            [100, 100],
            [100, 100],
        ];
        const result = earliestTime( tasks );
        expect( result ).toBe( 200 );
    } );
} );
