function printChangeString(str) {
    str = str.split('');
    str = str.map((s) => {
        if (s === s.toUpperCase()) {
            return s.toLowerCase();
        } else {
            return s.toUpperCase();
        }
    });
    return str.join('');
}
