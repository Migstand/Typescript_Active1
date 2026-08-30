import { coletar2 } from "./slice";

test('Coletar 2 elementos iniciais da lista', () => {
    expect(
        coletar2([2, 4, 6, 2, 8, 9, 5])
    ).toEqual([2,4]);
});