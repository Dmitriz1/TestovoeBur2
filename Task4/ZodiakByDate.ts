/*
Задача 4. Вывести знак зодиака по дате рождения
 */
import {DateValidator} from "./DateValidator";

const zodiacBoundaries = [
    {start: [3, 21], end: [4, 20], sign: 'Овен'},  // Овен
    {start: [4, 21], end: [5, 20], sign: 'Телец'},  // Телец
    {start: [5, 21], end: [6, 21], sign: 'Близнецы'},  // Близнецы
    {start: [6, 22], end: [7, 22], sign: 'Рак'},  // Рак
    {start: [7, 23], end: [8, 23], sign: 'Лев'},  // Лев
    {start: [8, 24], end: [9, 23], sign: 'Дева'},  // Дева
    {start: [9, 24], end: [10, 23], sign: 'Весы'}, // Весы
    {start: [10, 24], end: [11, 22], sign: 'Скорпион'},// Скорпион
    {start: [11, 23], end: [12, 22], sign: 'Стрелец'},// Стрелец
    {start: [12, 23], end: [1, 19], sign: 'Козерог'},// Козерог
    {start: [1, 20], end: [2, 18], sign: 'Водолей'},// Водолей
    {start: [2, 19], end: [3, 20], sign: 'Рыбы'} // Рыбы
];

export function zodiacIdentifier(birthDate: Date): string {
    // 1) Валидация вынесена в отдельный класс
    if (!DateValidator.isValid(birthDate)) {
        return 'Ошибка: неверная дата';
    }

    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1;

    // Определение знака
    for (const {start, end, sign} of zodiacBoundaries) {
        const [startMonth, startDay] = start;
        const [endMonth, endDay] = end;

        if ((month === startMonth && day >= startDay) ||
            (month === endMonth && day <= endDay)) {
            return sign;
        }
    }
    return 'Ошибка: неверная дата'
}