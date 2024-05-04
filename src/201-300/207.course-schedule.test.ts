function canFinish( numCourses: number, prerequisites: number[][] ): boolean {

    const inDegree = Array( numCourses ).fill( 0 );
    const graph = Array.from( { length: numCourses }, () => [] );

    for( const [ course, pre] of prerequisites ){
       inDegree[course]++;
       graph[pre].push( course );
    }

    const Q = [];

    inDegree.forEach( ( val, idx ) => {
        if( val === 0 ){
            Q.push( idx );
        }
    } );

    while( Q.length ){
        const top = Q.shift()!;
        numCourses--;

        for( const next of graph[top] ){
            if( --inDegree[next] === 0 ){
                Q.push( next );
            }
        }
    }

    return numCourses <= 0;
}

describe( '207. course-schedule', () => {

    it( 'numCourses = 2, prerequisites = [[0, 1]]', () => {
        const numCourses = 2, prerequisites = [[0, 1]];
        expect( canFinish( numCourses, prerequisites ) ).toBeTruthy();
    } );

    it( 'numCourses = 2, prerequisites = [[1,0]]', () => {
        const numCourses = 2, prerequisites = [[1,0]];
        expect( canFinish( numCourses, prerequisites ) ).toBeTruthy();
    } );

    it( 'numCourses = 2, prerequisites = [[1,0],[0,1]]', () => {
        const numCourses = 2, prerequisites = [[1,0],[0,1]];
        expect( canFinish( numCourses, prerequisites ) ).toBeFalsy();
    } );

    it( 'numCourses = 1, prerequisites = []', () => {
        const numCourses = 1, prerequisites = [];
        expect( canFinish( numCourses, prerequisites ) ).toBeTruthy();
    } );

} );