var nav = document.querySelector('#nav');

document.querySelector('.btn').addEventListener('click', function (e) { e.preventDefault();

if (nav.getAttribute('data-state') == 'expanded') {
	nav.setAttribute('data-state', 'collapsed');
} else {
	nav.setAttribute('data-state', 'expanded');
}
});
