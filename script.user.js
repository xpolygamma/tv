// ==UserScript==
// @name        qTV
// @namespace   qtv
// @match       *://*.themoviedb.org/movie/*
// @match       *://*.themoviedb.org/tv/*
// @match       *://*.imdb.com/title/*
// @grant       none
// @version     1.0
// @author      qTV
// @description qTV
// @run-at		document-end
// ==/UserScript==

const style = document.createElement('style');
style.innerText = `
#qtv {
    --u: 1.2vw;
	--bg: #47474977;
	--bg-h: #6b6b6d77;
	--border: #fafaff1a;
	--border-h: #fafaff22;
	--h: calc(5 * var(--u));

	position: fixed;
	top: calc(2 * var(--u));
	left: calc(2.5 * var(--u));
    z-index: 99999;

    font-family: Arial;
	font-size: calc(2 * var(--u));
	margin: 0;
	color: #fff;
    padding: 0 calc(1 * var(--u));
    text-align: center;
    line-height: calc(4.4 * var(--u));

	height: var(--h);
	background-color: var(--bg);
	border: calc(0.07 * var(--h)) solid var(--border);
	border-radius: calc(0.2 * var(--h));
	transition: .2s;
	box-sizing: border-box;

	&:hover {
		background-color: var(--bg-h);
		border-color: var(--border-h);
	}
    &::selection {
        background: #fff5;
    }
}
@media only screen and (min-aspect-ratio: 1/1) {
	#qtv {
		--u: 1vh;
	}
}
`;
document.body.appendChild(style);

const btn = document.createElement('btn');
btn.id = 'qtv';
btn.innerText = 'qTV';
btn.onclick = () => window.location.host = 'movie.bike';
document.body.appendChild(btn);
