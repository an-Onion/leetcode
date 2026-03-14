function getHappyString(n: number, k: number): string {
    if (k > 3 * (1 << (n - 1))) {
        return '';
    }
    const ret = [];

    for (let i = 0; i < n; i++) {
        const count = 1 << (n - 1 - i);

        for (const c of ['a', 'b', 'c']) {
            if (ret.at(-1) === c) {
                continue;
            }
            if (k <= count) {
                ret.push(c);
                break;
            }
            k -= count;
        }
    }

    return ret.join('');
}

describe('1415. The k-th Lexicographical String of All Happy Strings of Length n', () => {
    it('case 1', () => {
        expect(getHappyString(1, 3)).toBe('c');
    });

    it('case 2', () => {
        expect(getHappyString(1, 4)).toBe('');
    });

    it('case 3', () => {
        expect(getHappyString(3, 9)).toBe('cab');
    });
});
