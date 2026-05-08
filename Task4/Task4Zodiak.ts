/*
Задача 4. Вывести знак зодиака по дате рождения
 */

export function zOpred(day: number, month: number): string {
    const zodList = ['Овен', //0
        'Телец', //1
        'Близнецы', //2
        'Рак', //3
        'Лев', //4
        'Дева', //5
        'Весы', //6
        'Скорпион', //7
        'Стрелец', //8
        'Козерог', //9
        'Водолей', //10
        'Рыбы']; //11

/*
        { startM: 3, startD: 21, endM: 4, endD: 20 }, // Овен
        { startM: 4, startD: 21, endM: 5, endD: 20 }, // Телец
        { startM: 5, startD: 21, endM: 6, endD: 21 }, // Близнецы
        { startM: 6, startD: 22, endM: 7, endD: 22 }, // Рак
        { startM: 7, startD: 23, endM: 8, endD: 23 }, // Лев
        { startM: 8, startD: 24, endM: 9, endD: 23 }, // Дева
        { startM: 9, startD: 24, endM: 10, endD: 23 }, // Весы
        { startM: 10, startD: 24, endM: 11, endD: 22 }, // Скорпион
        { startM: 11, startD: 23, endM: 12, endD: 22 }, // Стрелец
        { startM: 12, startD: 23, endM: 1, endD: 19 }, // Козерог
        { startM: 1, startD: 20, endM: 2, endD: 19 }, // Водолей
        { startM: 2, startD: 20, endM: 3, endD: 20 } // Рыбы
*/
    // проверка валидности даты:
    if (month < 1 || month > 12) {
        return 'Ошибка: неверный месяц';
    }

    const maxDaysInMonth = (month: number): number => {
        if (month === 2) return 28; // Февраль (год не учитывается)
        if ([4, 6, 9, 11].includes(month)) return 30; // Апрель, Июнь, Сентябрь, Ноябрь
        return 31; // Остальные месяцы
    };

    if (day < 1 || day > maxDaysInMonth(month)) {
        return 'Ошибка: неверный день';
    }

    // условия для определения знака зодиака
    switch (month) {
        case 1: // Январь
            if (day >= 20)
                return zodList[10]; // Водолей
            else
                return zodList[9]; // Козерог
            break;
        case 2: // Февраль
            if (day >= 19)
                return zodList[11]; // Рыбы
            else
                return zodList[10]; // Водолей
            break;
        case 3: // Март
            if (day >= 21)
                return zodList[0]; // Овен
            else
                return zodList[11]; // Рыбы
            break;
        case 4: // Апрель
            if (day >= 21)
                return zodList[1]; // Телец
            else
                return zodList[0]; // Овен
            break;
        case 5: // Май
            if (day >= 21)
                return zodList[2]; // Близнецы
            else
                return zodList[1]; // Телец
            break;
        case 6: // Июнь
            if (day >= 22)
                return zodList[3]; // Рак
            else
                return zodList[2]; // Близнецы
            break;
        case 7: // Июль
            if (day >= 23)
                return zodList[4]; // Лев
            else
                return zodList[3]; // Рак
            break;
        case 8: // Август
            if (day >= 24)
                return zodList[5]; // Дева
            else
                return zodList[4]; // Лев
            break;
        case 9: // Сентябрь
            if (day >= 24)
                return zodList[6]; // Весы
            else
                return zodList[5]; // Дева
            break;
        case 10: // Октябрь
            if (day >= 24)
                return zodList[7]; // Скорпион
            else
                return zodList[6]; // Весы
            break;
        case 11: // Ноябрь
            if (day >= 23)
                return zodList[8]; // Стрелец
            else
                return zodList[7]; // Скорпион
            break;
        case 12: // Декабрь
            if (day >= 22)
                return zodList[9]; // Козерог
            else
                return zodList[8]; // Стрелец
            break;
        default:
            return 'Ошибка: неверная дата';
    }
}