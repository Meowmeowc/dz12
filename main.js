// document.querySelector('.one').onclick = function () {
// 	document.querySelector('.one').style.width = '45px'
// 	document.querySelector('.one').style.height = '45px'
// }

// document.querySelector('.two').ondblclick = function () {
// 	document.querySelector('.two').innerHTML = '<h1>Что-то написало</h1>'
// }

// document.querySelector('.third').onclick = function () {
// 	document.querySelector('.third').innerHTML = '<h1>2</h1>'
// }

// document.querySelector('.inp').onkeypress = function (e) {
// 	document.querySelector('.four').innerHTML = (e.key)
// }



let inp2 = document.querySelector('.inp-2')
let text = document.querySelector('.text')
let userValue = +inp2.value
console.log(typeof userValue)

document.querySelector('.inp-2').onkeypress = function () {
	document.querySelector('.five').innerHTML = `${checkValue(userValue)}`
	function checkValue() {
		if (userValue = Number) {
			return false;
		}
	}
}