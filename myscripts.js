var header = document.querySelector('main-nav');

window.addEventListener('scroll', function (){
	if(window.pageYOffest >100) {
		header.classlist += ' second-nav'
	} else {
		header.classlist = 'main-nav';
	}
})