var a1='javascript string method';
var a2='hello javscript hello';
var a3='         HI WELCOME';
var a4='hello welcome hELlo wElcome';
//1.charAt()
console.log(a1.charAt(4));
//2.charCodeAt()
console.log(a1.charCodeAt(3));
//3.concat()
console.log(a1.concat(a2));
//4.endsWith() & startsWith()
console.log(a1.startsWith('j'));
console.log(a2.endsWith('t'));
//5.fromCharCode()
console.log(String.fromCharCode(83));
//6.includes()
console.log(a1.includes('string'));
//7.indexOf
console.log(a2.indexOf('hello'));
//8.lastIndexOf
console.log(a2.lastIndexOf('hello'));
//9.match()
console.log(a4.match(/el/));
console.log(a4.match(/el/i));
console.log(a4.match(/el/gi));
//10.repeat()
console.log(a1.repeat(5));
//11.replace()
console.log(a2.replace(/ello/,'ELLO'));
//12.search()
console.log(a1.search('method'));
//13.slice()
console.log(a1.slice(2,5));
//14.split()
console.log(a1.split(''));
//15.substring()
console.log(a1.substring(2,5));
//16.toUppercase()
console.log(a1.toUpperCase());
//17.toLowercase()
console.log(a3.toLowerCase());
//18.trim()
console.log(a3.trim());