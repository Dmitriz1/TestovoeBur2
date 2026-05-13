import { zodiacIdentifier } from "./ZodiakByDate";
import * as fs from 'fs';

interface TestCase {
    date: string;
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
            for (const { date, expected } of cases) {
                it(`должен вернуть "${expected}" для даты ${date}`, () => {
                    const dateObj = new Date(date);
                    expect(zodiacIdentifier(dateObj)).toBe(expected);
                });
            }
        });
    }
});