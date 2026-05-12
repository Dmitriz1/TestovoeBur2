import { zodiacIdentifier } from "./ZodiakByDate";
import * as fs from 'fs';

interface TestCase {
    day: number;
    month: number;
    expected: string;
}

interface TestGroup {
    name: string;
    cases: TestCase[];
}

interface TestData {
    testGroups: TestGroup[];
}

describe('Проверка определения знака зодиака', () => {
    const data: TestData = JSON.parse(fs.readFileSync('Task4/Task4testData.json', 'utf-8'));

    for (const { name, cases } of data.testGroups) {
        describe(name, () => {
            for (const { day, month, expected } of cases) {
                it(`должен вернуть "${expected}" для ${day}/${month}`, () => {
                    expect(zodiacIdentifier(day, month)).toBe(expected);
                });
            }
        });
    }
});

