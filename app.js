let countdown;
var timeDisplay = document.querySelector('.un');
var endTime = document.querySelector('.deux');
var buttons = document.querySelectorAll('[data-time]');

function timer(seconds){

	clearInterval(countdown);

	var now = Date.now();
	var then = now + seconds * 1000;
	displayTimeLeft(seconds);
	displayEndtime(then);

	countdown = setInterval(() =>{
		var secondsLeft = Math.round((then - Date.now()) / 1000);

		if (secondsLeft <= 0) {
			clearInterval(countdown);
			return;
		} 
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds){
	var minutes = Math.floor(seconds / 60);
	var remainderSeconds = seconds % 60;
	var display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
	document.title = display;
	timerDisplay.textContent = display;
}

function displayEndTime(timestamp){
	var end = new Date(timestamp);
	var hour = end.getHours();
	var minutes = end.getMinutes();
	endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer(){
	var seconds = parseInt(this.dataset.time);
	timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e){
	e.preventDefault();
	var mins = this.minutes.value;
	console.log(mins);
	timer(mins * 60);
	this.reset();
}); 