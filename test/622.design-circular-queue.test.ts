import { MyCircularQueue } from '../src/601-700/622.design-circular-queue';

function runTestCase( commands: string[], values: number[][] ){

  const output = [null];

  const capacity = values[0][0];

  const queue: MyCircularQueue = new MyCircularQueue( capacity );

  for( let i = 1; i < commands.length; i++ ){
    const cmd = commands[i];
    output.push( queue[cmd]( values[i][0] ) );
  }

  return output;
}

describe( 'Design Circular Queue', () => {

  it( 'e.g. 1', () => {
    const commands = ['MyCircularQueue', 'enQueue', 'enQueue', 'enQueue', 'enQueue', 'Rear', 'isFull', 'deQueue', 'enQueue', 'Rear'];
    const values = [[3], [1], [2], [3], [4], [], [], [], [4], []];

    expect( runTestCase( commands, values ) ).toStrictEqual( [null, true, true, true, false, 3, true, true, true, 4] );
  } );

  it( 'e.g. 2', () => {
    const commands = ['MyCircularQueue','enQueue','Rear','Front','deQueue','Front','deQueue','Front','enQueue','enQueue','enQueue','enQueue'];
    const values = [[3],[2],[],[],[],[],[],[],[4],[2],[2],[3]];

    expect( runTestCase( commands, values ) ).toStrictEqual( [null,true,2,2,true,-1,false,-1,true,true,true,false] );
  } );
} );
