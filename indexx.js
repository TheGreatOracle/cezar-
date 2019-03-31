var fs = require('fs');
let str = "WXYZ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "

let text = fs.readFileSync('word.txt', 'utf-8')
var key =3
let worde = ""

for (var i=0; i < text.length; i++){
	for (var j = 5; j < str.length; j++) {
		if(text[i] === str[j]) {
			worde += str[j-key]
			break
		}
	}
}

console.log(worde)
fs.writeFileSync('deword.txt', JSON.stringify(worde))


// console.log(str.length)
// for (var i=0; i < word.length; i++){
// 	for (var j = 0; j < str.length; j++) {
// 		if(word[i] === str[j]) {
// 			worde += str[j+3]
// 			break
// 		}
// 	}
// }

