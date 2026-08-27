import {juntar} from './joiner';

test('Usar join para concatenar as strings dos arrays', () => {
    expect(juntar(['Arrays', 'com', 'TypeScript'])).toBe('Arrays com TypeScript');
})