var fs = require('fs');
let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ abcde"

let word = "Walking, running, cycling and playing football are some kinds of sports that you do every day. Some people think that doing sports is useless, the other consider that it is tiring. So, why is it so important to do sports?"
let worde = ""
var key = 3
// console.log(str.length)
for (var i=0; i < word.length; i++){
	for (var j = 0; j < str.length; j++) {
		if(word[i] === str[j]) {
			worde += str[j+key]
			break
		}
	}
}
console.log(worde)
fs.writeFileSync('word.txt', JSON.stringify(worde))
