import { MyCircularDeque } from '../src/641.design-circular-deque';

function runTestCase(commands: string[], values: number[][]){

  const output = [null];

  const capacity = values[0][0];

  const queue: MyCircularDeque = new MyCircularDeque(capacity);

  for(let i = 1; i < commands.length; i++){
    const cmd = commands[i];
    const res = queue[cmd](values[i][0]);
    output.push(res);
  }

  return output;
}

describe('Design Circular Deque', () => {

  it('e.g. 1', () => {
    const commands = ['MyCircularDeque', 'insertLast', 'insertLast', 'insertFront', 'insertFront', 'getRear', 'isFull', 'deleteLast', 'insertFront', 'getFront'];
    const values = [[3], [1], [2], [3], [4], [], [], [], [4], []];
    const output = [null, true, true, true, false, 2, true, true, true, 4];
    expect(runTestCase(commands, values)).toStrictEqual(output);
  });

});
