type Matrix = number[][];

export class MatrixValidator {
    static validateDimensions(A: Matrix, B: Matrix): void {
        if (A.length !== B.length || A[0].length !== B[0].length) {
            throw new Error("Матрицы должны иметь одинаковый размер");
        }
    }

    static validateDataLength(rows: number, cols: number, data: number[]): void {
        if (data.length !== rows * cols) {
            throw new Error("Количество элементов не соответствует размерности матрицы");
        }
    }

    static validateNonZeroScalar(scalar: number): void {
        if (scalar === 0) {
            throw new Error("Деление на ноль невозможно");
        }
    }
}