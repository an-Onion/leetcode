function canBeEqual(s1: string, s2: string): boolean {
    if (
        !(
            (s1[0] === s2[0] && s1[2] === s2[2]) ||
            (s1[2] === s2[0] && s1[0] === s2[2])
        )
    ) {
        return false;
    }

    return (
        (s1[1] === s2[1] && s1[3] === s2[3]) ||
        (s1[1] === s2[3] && s1[3] === s2[1])
    );
}

describe('2839. Check if Strings Can Be Made Equal With Operations I', () => {
    it('case 1', () => {
        expect(canBeEqual('abcd', 'cdab')).toBeTruthy();
    });

    it('case 2', () => {
        expect(canBeEqual('abcd', 'dacb')).toBeFalsy();
    });
});
