export const coletar2 = (arr: number[]) :number[] => {
    return arr.slice(0, 2);
}

let rei = [2, 3, 4, 5, 6];
console.log(rei.slice(0, 2))
console.log(coletar2(rei))