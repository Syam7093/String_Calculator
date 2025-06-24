export function Calculator(numbers:string):number{
    if(!numbers) return 0
    const parts = numbers.split(/,|\n/).map(Number);
    return parts.reduce((sum, n) => sum + n, 0);
}