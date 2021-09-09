import { TimeMap } from '../src/981.time-based-key-value-store';

function runCommands(commands: string[], values: (string | number)[][]){
  const timeMap = new TimeMap();
  const ret: (string | null)[] = [null];

  for(let i = 1; i < commands.length; i++){
    ret.push( timeMap[commands[i]](...values[i]) ?? null );
  }

  return ret;
}

describe('Time Based Key-Value Store', () => {

  it('e.g. 1', () => {
    const commands = ['TimeMap', 'set', 'get', 'get', 'set', 'get', 'get'];
    const values = [[], ['foo', 'bar', 1], ['foo', 1], ['foo', 3], ['foo', 'bar2', 4], ['foo', 4], ['foo', 5]];
    const output = runCommands(commands, values);
    expect(output).toStrictEqual([null, null, 'bar', 'bar', null, 'bar2', 'bar2']);
  });

});
