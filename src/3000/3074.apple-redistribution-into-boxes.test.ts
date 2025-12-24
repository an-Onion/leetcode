import * as _ from 'lodash';

function minimumBoxes(apple: number[], capacity: number[]): number {
    let sum = _.sum(apple);
    capacity.sort((a, b) => b - a);

    for (let i = 0; i < capacity.length; i++) {
        sum -= capacity[i];
        if (sum <= 0) {
            return i + 1;
        }
    }
    return capacity.length;
}

describe('3074. Apple Redistribution into Boxes', () => {
    it('case 1', () => {
        expect(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2])).toBe(2);
    });

    it('case 2', () => {
        expect(minimumBoxes([5, 5, 5], [2, 4, 2, 7])).toBe(4);
    });
});
