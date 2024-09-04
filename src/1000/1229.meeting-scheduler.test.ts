function minAvailableDuration(
    slots1: number[][],
    slots2: number[][],
    duration: number,
): number[] {
    const mergedArray = [...slots1, ...slots2]
        .filter( ( slot ) => slot[1] - slot[0] >= duration )
        .sort( ( a, b ) => a[0] - b[0] );

    for ( let i = 0; i < mergedArray.length - 1; i++ ) {
        const current = mergedArray[i];
        const next = mergedArray[i + 1];

        if ( current[1] - next[0] >= duration ) {
            return [next[0], next[0] + duration];
        }
    }

    return [];
}

describe( '1229. Meeting Scheduler', () => {
    it( 'should return [60, 68]', () => {
        expect(
            minAvailableDuration(
                [
                    [10, 50],
                    [60, 120],
                    [140, 210],
                ],
                [
                    [0, 15],
                    [60, 70],
                ],
                8,
            ),
        ).toEqual( [60, 68] );
    } );

    it( 'should return []', () => {
        expect(
            minAvailableDuration(
                [
                    [10, 50],
                    [60, 120],
                    [140, 210],
                ],
                [
                    [0, 15],
                    [60, 70],
                ],
                12,
            ),
        ).toEqual( [] );
    } );

    it( 'should return [21,29]', () => {
        const slots1 = [[10, 60]],
            slot2 = [
                [12, 17],
                [21, 50],
            ],
            duration = 8;
        expect( minAvailableDuration( slots1, slot2, duration ) ).toEqual( [21, 29] );
    } );
} );
