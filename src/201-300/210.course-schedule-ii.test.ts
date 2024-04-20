function findOrder( numCourses: number, prerequisites: number[][] ): number[] {
    
    const inDegree = Array( numCourses ).fill( 0 );
    const graph = Array.from( { length: numCourses }, () => [] );
    
    for( const [a,b] of prerequisites ){
        inDegree[a]++;
        graph[b].push( a );
    }
    
    const queue = [];
    for( let i = 0; i < inDegree.length; i++ ){
        if( inDegree[i] === 0 ) 
            queue.push( i );
    }

    const orders = [];

    while( queue.length ) {
        const course = queue.shift();
        orders.push( course );
        numCourses--;

        for( const neighbor of graph[course] ){
            if( --inDegree[neighbor] ) 
                continue;
            queue.push( neighbor );
        }
    }
        
    return numCourses ? [] : orders;
}

describe( '210. course-schedule-ii', () => {

    it( 'numCourses = 2, prerequisites = [[1,0]]', () => {
        const courses =  findOrder( 2, [ [1,0] ] );
        expect( courses ).toStrictEqual( [0,1] );
    } );

    it( 'numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]', () => {
        const courses =  findOrder( 4, [ [1,0],[2,0],[3,1],[3,2] ] );
        expect( courses ).toStrictEqual( [0,1,2,3] );
    } );

    it( 'numCourses = 1, prerequisites = []', () => {
        const courses =  findOrder( 1, [] );
        expect( courses ).toStrictEqual( [0] );
    } );

} );