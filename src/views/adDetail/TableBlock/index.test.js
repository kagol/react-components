const abs = Math.abs;

describe('test abs()', () => {
    it('positive -> positive', () => {
        expect(abs(1)).toEqual(1)
        expect(abs(1.1)).toEqual(1.1)
    })
    it('negative -> positive', () => {
        expect(abs(-1)).toEqual(1)
        expect(abs(-1.1)).toEqual(1.1)
    })
    it('0 -> 0', () => {
        expect(abs(0)).toEqual(0)
    })
    // it('throws TypeError', () => {
    //     expect(function () {
    //     abs({})
    //     }).toThrow('TypeError')
    // })
})
