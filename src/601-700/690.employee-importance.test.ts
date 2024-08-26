class Employee {
    id: number;
    importance: number;
    subordinates: number[];
    constructor( id: number, importance: number, subordinates: number[] ) {
        this.id = id === undefined ? 0 : id;
        this.importance = importance === undefined ? 0 : importance;
        this.subordinates = subordinates === undefined ? [] : subordinates;
    }
}

function getImportance( employees: Employee[], id: number ): number {
    const map = new Map<number, Employee>();

    for ( const employee of employees ) {
        map.set( employee.id, employee );
    }

    return DFS( id );

    function DFS( root: number ): number {
        const employee = map.get( root );
        let total = employee.importance;
        for ( const subordinate of employee.subordinates ) {
            total += DFS( subordinate );
        }
        return total;
    }
}

const toEmployees = ( inputs: Array<[number, number, number[]]> ): Employee[] => {
    return inputs.map(
        ( [id, importance, subordinates] ) =>
            new Employee( id, importance, subordinates ),
    );
};

describe( '690. Employee Importance', () => {
    it( 'e.g. 1', () => {
        const employees: Array<[number, number, number[]]> = [
                [1, 5, [2, 3]],
                [2, 3, []],
                [3, 3, []],
            ],
            id = 1;
        expect( getImportance( toEmployees( employees ), id ) ).toBe( 11 );
    } );

    it( 'e.g. 2', () => {
        const employees: Array<[number, number, number[]]> = [
                [1, 2, [5]],
                [5, -3, []],
            ],
            id = 5;
        expect( getImportance( toEmployees( employees ), id ) ).toBe( -3 );
    } );
} );
