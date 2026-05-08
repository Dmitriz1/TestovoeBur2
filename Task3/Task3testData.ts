export class Task3TestData {
    // === Валидные числа ===
    readonly validNumbers = [
        { number: 123, expected: [1, 2, 3], result: true },
        { number: 23, expected: [2, 3], result: true },
        { number: 10000, expected: [1, 0, 0, 0, 0], result: true }
    ];

    // === Числа с десятичной точкой ===
    readonly decimalNumbers = [
        { number: 1.23, expected: [1, 2, 3], result: true },
        { number: 3.10, expected: [3, 1], result: true }
    ];

    // === Нулевые значения ===
    readonly zeroValues = [
        { number: 0, expected: [0], result: true }
    ];

    // === Невалидные значения ===
    readonly invalidValues = [
        {number: -123, expected: [1, 2, 3], result: true},
        {string: 'abc', expected: [], result: false}
    ]
}