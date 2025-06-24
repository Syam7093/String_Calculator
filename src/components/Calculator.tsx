export function Calculator(numbers: string): number {
    if (!numbers) return 0
    let delimiter = /,|\n/;
    let numberString = numbers;

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numberString = parts[1];
    }

    const numArray = numberString.split(delimiter).map(Number);
    return numArray.reduce((sum, n) => sum + n, 0);
}