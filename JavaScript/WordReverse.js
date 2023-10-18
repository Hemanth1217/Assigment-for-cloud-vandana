function reverse_Words(str) {
    let s = [];
    for (let i = 0; i < str.length; ++i) {
        if (str[i] != ' ')
            s.unshift(str[i]);
        else {
            while (s.length != 0) {
                process.stdout.write(s[0]);
                s.shift();
            }
            process.stdout.write(' ');
        }
    }
    while (s.length != 0) {
        process.stdout.write(s[0]);
        s.shift();
    }
}
let str = "Geeks for Geeks";
reverse_Words(str);