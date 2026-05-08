/*
Задача 3. Получить все цифры числа, число любое
 */
export function getDigits(input: number | string): number[] {
    const str = input.toString().replace(/[^0-9]/g, '');

    if (str.length === 0) {
        throw new Error('Вход должен содержать хотя бы одну цифру');
    }
    return str.split('').map(Number);
}