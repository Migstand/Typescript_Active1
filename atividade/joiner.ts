export const juntar = (x:string[]): string => {
    return x.join(' ');
}

let arr: string[] = ['Arrays', 'com', 'TypeScript'];

let junto: string = arr.join(' ');

console.log(junto);
console.log(juntar(arr));