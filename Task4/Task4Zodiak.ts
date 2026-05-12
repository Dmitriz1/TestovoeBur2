/*
Задача 4. Вывести знак зодиака по дате рождения
 */

export function zodiacIdentifier(day: number, month: number): string {
    const zodList = ['Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева',
        'Весы', 'Скорпион', 'Стрелец', 'Козерог', 'Водолей', 'Рыбы'];

    const zodiacBoundaries = [
        { startMonth: 3, startDay: 21, endMonth: 4, endDay: 20, sign: zodList[0] }, // Овен
        { startMonth: 4, startDay: 21, endMonth: 5, endDay: 20, sign: zodList[1] }, // Телец
        { startMonth: 5, startDay: 21, endMonth: 6, endDay: 21, sign: zodList[2] }, // Близнецы
        { startMonth: 6, startDay: 22, endMonth: 7, endDay: 22, sign: zodList[3] }, // Рак
        { startMonth: 7, startDay: 23, endMonth: 8, endDay: 23, sign: zodList[4] }, // Лев
        { startMonth: 8, startDay: 24, endMonth: 9, endDay: 23, sign: zodList[5] }, // Дева
        { startMonth: 9, startDay: 24, endMonth: 10, endDay: 23, sign: zodList[6] }, // Весы
        { startMonth: 10, startDay: 24, endMonth: 11, endDay: 22, sign: zodList[7] }, // Скорпион
        { startMonth: 11, startDay: 23, endMonth: 12, endDay: 22, sign: zodList[8] }, // Стрелец
        { startMonth: 12, startDay: 23, endMonth: 1, endDay: 19, sign: zodList[9] }, // Козерог
        { startMonth: 1, startDay: 20, endMonth: 2, endDay: 18, sign: zodList[10] }, // Водолей
        { startMonth: 2, startDay: 19, endMonth: 3, endDay: 20, sign: zodList[11] }  // Рыбы
    ];

    // Проверка месяца
    if (month < 1 || month > 12) {
        return 'Ошибка: неверный месяц';
    }

    // Уточнение по дням
    const maxDaysInMonth = (month: number): number => {
        if (month === 2) return 28; // февраль без високосного года
        if ([4, 6, 9, 11].includes(month)) return 30; // Апрель, Июнь, Сентябрь и Ноябрь
        return 31;
    };

    // Проверка кол-ва дней в месяце
    if (day < 1 || day > maxDaysInMonth(month)) {
        return 'Ошибка: неверный день';
    }

    // Определение знака
    for (const boundary of zodiacBoundaries) {
        if ((month === boundary.startMonth && day >= boundary.startDay) ||
            (month === boundary.endMonth && day <= boundary.endDay)) {
            return boundary.sign;
        }
    }
    return 'Ошибка: неверная дата';
}