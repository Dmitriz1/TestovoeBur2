export class Task2TestData {
    // === Создание матрицы ===
    readonly validCreation = {
        rows: 2,
        cols: 3,
        data: [1, 2, 3, 4, 5, 6],
        expected: [[1, 2, 3], [4, 5, 6]]
    };

    readonly invalidCreation = {
        rows: 2,
        cols: 2,
        data: [1, 2, 3] // Недостаточно элементов
    };

    // === Арифметические операции ===
    readonly m1 = [[1, 2], [3, 4]];
    readonly m2 = [[5, 6], [7, 8]];
    readonly sumExpected = [[6, 8], [10, 12]];
    readonly diffExpected = [[4, 4], [4, 4]];

    // === Треугольная матрица ===
    readonly triangularInput = [
        [2, 1, 1],
        [4, -6, 0],
        [-2, 7, 2]
    ];

    // === Матрица перестановки ===
    readonly swapMatrix = [
        [0, 1],
        [1, 1]
    ];
}