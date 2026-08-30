export const pares = (x:number[]) : number[] =>{
    return x.filter(va => va % 2 == 0);
}

let nums = [2, 1, 10, 8, 55, 90];

console.log(pares(nums));