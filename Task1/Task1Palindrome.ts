export const isPalindrome = (str: string): boolean => {
    const clrSlovo = str.toLowerCase().replace(/[^a-zа-я0-9]/g, '');
    const rvrsdSlovo = clrSlovo.split('').reverse().join('');
    return clrSlovo !== '' && clrSlovo === rvrsdSlovo;
}