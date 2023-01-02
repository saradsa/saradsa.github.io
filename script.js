light = '#65fff2'
dark = '#002925'
document.addEventListener('DOMContentLoaded', function() {
	body = document.querySelector('body')
	button = document.querySelector('button')
	heading = document.querySelector('h1')

	function change_color(color){
		if(color == light){
			button.innerHTML = 'LIGHT';
			button.style.backgroundColor = light;
			button.style.color = dark;
			body.style.backgroundColor = dark;
			heading.style.color = light;
			console.log('hi')
		} else {
			button.innerHTML = 'DARK';
			button.style.backgroundColor = dark;
			button.style.color = light;
			body.style.backgroundColor = light;
			heading.style.color = dark;
			console.log('Hello')
		}
	}
	body.style.backgroundColor = dark;
	heading.style.color = light;
	button.style.backgroundColor = light;
	button.style.color = dark;
	button.addEventListener('click', function() {
		if(button.innerHTML === 'DARK') {
			change_color(light);
		} else if(button.innerHTML === 'LIGHT') {
			change_color(dark);
		}
	})
})