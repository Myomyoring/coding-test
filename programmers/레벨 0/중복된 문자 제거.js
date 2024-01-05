function solution(my_string) {
    return my_string
        .split('')
        .filter((over, idx) =>
            my_string.indexOf(over) === idx)
        .join('');
}