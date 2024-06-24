import { Solution } from '../src/501-600/528.random-pick-with-weight';

describe( 'Random Pick with Weight', () => {


  it( '[1,3,1]', () => {
    const sol = new Solution( [1,3,1] );
    sol.pickIndex();
    sol.pickIndex();
    sol.pickIndex();
    sol.pickIndex();
   } );

} );
