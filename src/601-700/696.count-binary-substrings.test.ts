function countBinarySubstrings(s: string): number {
    const n = s.length;
    let ptr = 0,
        last = 0,
        ret = 0;

    while (ptr < n) {
        const c = s[ptr];
        let count = 0;
        while (ptr < n && s[ptr] === c) {
            ptr++;
            count++;
        }
        ret += Math.min(count, last);
        last = count;
    }

    return ret;
}

describe('696. Count Binary Substrings', () => {
    it('case 1', () => {
        expect(countBinarySubstrings('00110011')).toBe(6);
    });

    it('case 2', () => {
        expect(countBinarySubstrings('10101')).toBe(4);
    });
});
