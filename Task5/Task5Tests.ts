import { guess } from './Task5Guess';
import * as fs from 'fs';

interface TestCase {
    input: string[];
    expected: string[];
}

interface TestGroup {
    name: string;
    cases: TestCase[];
}

interface TestData {
    testGroups: TestGroup[];
}

describe('Функция guess', () => {
    const data: TestData = JSON.parse(fs.readFileSync('Task5/Task5testData.json', 'utf-8'));

    for (const { name, cases } of data.testGroups) {
        describe(name, () => {
            for (const [index, testCase] of cases.entries()) {
                it(`должен корректно обработать сценарий ${index + 1}`, () => {
                    const result = guess(testCase.input);
                    expect(result).toEqual(testCase.expected);
                });
            }
        });
    }
});