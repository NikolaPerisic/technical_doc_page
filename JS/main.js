let mainNavToggle = document.querySelector('.main-nav');
let toggleBtn = document.querySelector('.navbar-toggle-btn');
toggleBtn.addEventListener('click', toggle);

function toggle() {
    mainNavToggle.classList.toggle('hidden');
};


collapseNav();

function collapseNav() {
    let navLink = document.querySelectorAll('.nav-link');
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener('click', toggle);
    }
};


let toggleDivBtn = document.querySelectorAll('.btn1');
let toggleDivs = document.querySelectorAll('.div1');

Array.from(toggleDivBtn).forEach(link => {
	//add click event
	link.addEventListener('click', function(event) {
		//hide all divs
		Array.from(toggleDivs).forEach(item => item.classList.add('div-hidden'));
		//Get target DIV
		let target = this.getAttribute('href');
		//Show target div
		document.querySelector(target).classList.remove('div-hidden');
		event.preventDefault();
	}, false);
});

let toggleDivBtn2 = document.querySelectorAll('.btn2');
let toggleDivs2 = document.querySelectorAll('.div2');

Array.from(toggleDivBtn2).forEach(link => {
	//add click event
	link.addEventListener('click', function(event) {
		//hide all divs
		Array.from(toggleDivs2).forEach(item => item.classList.add('div-hidden'));
		//Get target DIV
		let target = this.getAttribute('href');
		//Show target div
		document.querySelector(target).classList.remove('div-hidden');
		event.preventDefault();
	}, false);
});

let toggleDivBtn3 = document.querySelectorAll('.btn3');
let toggleDivs3 = document.querySelectorAll('.div3');

Array.from(toggleDivBtn3).forEach(link => {
	//add click event
	link.addEventListener('click', function(event) {
		//hide all divs
		Array.from(toggleDivs3).forEach(item => item.classList.add('div-hidden'));
		//Get target DIV
		let target = this.getAttribute('href');
		//Show target div
		document.querySelector(target).classList.remove('div-hidden');
		event.preventDefault();
	}, false);
});

let toggleDivBtn4 = document.querySelectorAll('.btn4');
let toggleDivs4 = document.querySelectorAll('.div4');

Array.from(toggleDivBtn4).forEach(link => {
	//add click event
	link.addEventListener('click', function(event) {
		//hide all divs
		Array.from(toggleDivs4).forEach(item => item.classList.add('div-hidden'));
		//Get target DIV
		let target = this.getAttribute('href');
		//Show target div
		document.querySelector(target).classList.remove('div-hidden');
		event.preventDefault();
	}, false);
});

let toggleDivBtn5 = document.querySelectorAll('.btn5');
let toggleDivs5 = document.querySelectorAll('.div5');

Array.from(toggleDivBtn5).forEach(link => {
	//add click event
	link.addEventListener('click', function(event) {
		//hide all divs
		Array.from(toggleDivs5).forEach(item => item.classList.add('div-hidden'));
		//Get target DIV
		let target = this.getAttribute('href');
		//Show target div
		document.querySelector(target).classList.remove('div-hidden');
		event.preventDefault();
	}, false);
});

let toggleDivBtn6 = document.querySelectorAll('.btn6');
let toggleDivs6 = document.querySelectorAll('.div6');

Array.from(toggleDivBtn6).forEach(link => {
	//add click event
	link.addEventListener('click', function(event) {
		//hide all divs
		Array.from(toggleDivs6).forEach(item => item.classList.add('div-hidden'));
		//Get target DIV
		let target = this.getAttribute('href');
		//Show target div
		document.querySelector(target).classList.remove('div-hidden');
		event.preventDefault();
	}, false);
});