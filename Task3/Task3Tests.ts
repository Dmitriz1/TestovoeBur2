import { getDigits } from "./NumbersToDigits";
import * as fs from 'fs';

interface TestCase {
    number?: number;
    string?: string;
    expected: number[];
}

interface TestGroup {
    name: string;
    cases: TestCase[];
}

interface TestData {
    testGroups: TestGroup[];
}

describe('Разбиение чисел на цифры', () => {
    const data: TestData = JSON.parse(fs.readFileSync('Task3/Task3testData.json', 'utf-8'));

    for (const { name, cases } of data.testGroups) {
        describe(name, () => {
            for (const testCase of cases) {
                const { number, string, expected } = testCase;
                if (number !== undefined) {
                    it(`Число ${number} должно быть разбито на ${expected.join(', ')}`, () => {
                        expect(getDigits(number)).toEqual(expected);
                    });
                } else if (string !== undefined) {
                    it(`Строка "${string}" должна выбросить ошибку`, () => {
                        expect(() => getDigits(string)).toThrow();
                    });
                }
            }
        });
    }
});