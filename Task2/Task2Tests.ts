import * as m from "./Task2Matrix";
import * as fs from 'fs';

interface MatrixCreationData {
    rows: number;
    cols: number;
    data: number[];
    expected?: number[][];
}

interface ScalarOperationData {
    matrix: number[][];
    scalar: number;
    expected: number[][];
}

interface TestData {
    validCreation: MatrixCreationData;
    invalidCreation: MatrixCreationData;
    m1: number[][];
    m2: number[][];
    sumExpected: number[][];
    diffExpected: number[][];
    triangularInput: number[][];
    swapMatrix: number[][];
    scalarMultiplication: ScalarOperationData;
    scalarDivision: ScalarOperationData;
    original: number[][];
}

describe('Операции с матрицами', () => {
    const data: TestData = JSON.parse(fs.readFileSync('Task2/Task2TestData.json', 'utf-8'));

    describe('Создание матрицы', () => {
        it('должен правильно создавать матрицу', () => {
            const { rows, cols, data: values, expected } = data.validCreation;
            expect(m.createMatrix(rows, cols, values)).toEqual(expected);
        });

        it('должен выбрасывать ошибку при неверном количестве данных', () => {
            const { rows, cols, data: values } = data.invalidCreation;
            expect(() => m.createMatrix(rows, cols, values)).toThrow();
        });
    });

    describe('Арифметические операции', () => {
        it('должен складывать две матрицы', () => {
            expect(m.summ(data.m1, data.m2)).toEqual(data.sumExpected);
        });

        it('должен вычитать одну матрицу из другой', () => {
            expect(m.subtract(data.m2, data.m1)).toEqual(data.diffExpected);
        });

        it('должен умножать на скаляр', () => {
            const { matrix, scalar, expected } = data.scalarMultiplication;
            expect(m.multiplyScalar(matrix, scalar)).toEqual(expected);
        });

        it('должен делить на скаляр', () => {
            const { matrix, scalar, expected } = data.scalarDivision;
            expect(m.divideScalar(matrix, scalar)).toEqual(expected);
        });
    });

    describe('Операции с треугольной матрицей', () => {
        it('должен приводить квадратную матрицу к верхнетреугольному виду', () => {
            const result = m.toUpperTriangular(data.triangularInput);
            expect(result[1][0]).toBeCloseTo(0);
            expect(result[2][0]).toBeCloseTo(0);
            expect(result[2][1]).toBeCloseTo(0);
        });

        it('не должен изменять оригинальную матрицу (immutability)', () => {
            const copy = JSON.parse(JSON.stringify(data.original));
            m.toUpperTriangular(data.original);
            expect(data.original).toEqual(copy);
        });

        it('должен корректно обрабатывать матрицы с перестановкой строк', () => {
            const result = m.toUpperTriangular(data.swapMatrix);
            expect(result[0][0]).not.toBe(0);
            expect(result[1][0]).toBeCloseTo(0);
        });
    });
});
