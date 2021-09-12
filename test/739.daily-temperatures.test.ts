import { dailyTemperatures } from '../src/739.daily-temperatures';

describe( 'Daily Temperatures', () => {

  it( 'e.g. 1' ,() => {
    const temperatures = [73,74,75,71,69,72,76,73];
    expect( dailyTemperatures( temperatures ) ).toStrictEqual( [1,1,4,2,1,1,0,0] );
  } );

  it( 'e.g. 2' ,() => {
    const temperatures = [30,40,50,60];
    expect( dailyTemperatures( temperatures ) ).toStrictEqual( [1,1,1,0] );
  } );

  it( 'e.g. 3' ,() => {
    const temperatures = [30,60,90];
    expect( dailyTemperatures( temperatures ) ).toStrictEqual( [1,1,0] );
  } );

} );
