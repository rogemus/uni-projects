const app = document.getElementById('app');

export function clear() {
	app.innerHTML = '';
}

export function addNode(content, tag = 'p') {
	const newNode = document.createElement(tag);

	if (content) {
		newNode.innerHTML = content;
	}

	app.appendChild(newNode);
}

export function addHeading(content) {
	addNode(content, 'h2');
}

export function addLine() {
	addNode(undefined, 'hr');
}

export function addParagraph(content) {
	const helper = document.createElement('div');
	const strong = document.createElement('strong');
	const span = document.createElement('span');
	const splited = content.split(' = ');
	const label = splited[0];
	const value = splited[1];
	strong.innerHTML = label;
	span.innerHTML = ` = ${value.replace('\n', '<br />')}`;
	helper.appendChild(strong);
	helper.appendChild(span);

	addNode(helper.innerHTML);
}
