import { destCity } from '../src/1000/1436.destination-city';

describe( 'Destination City', () => {

  it( 'Sao Paulo', () => {
    const paths = [['London','New York'],['New York','Lima'],['Lima','Sao Paulo']];

    expect( destCity( paths ) ).toBe( 'Sao Paulo' );
  } );

  it( 'A', () => {
    const paths = [['B','C'],['D','B'],['C','A']];

    expect( destCity( paths ) ).toBe( 'A' );
  } );

  it( 'Z', () => {
    const paths = [['A','Z']];

    expect( destCity( paths ) ).toBe( 'Z' );
  } );

} );
