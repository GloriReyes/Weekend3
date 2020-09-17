let form = document.querySelector('form');
let input = document.querySelector('#inputbox');
const chatbox = document.querySelector('#chatbox');
//form to not wipe out content
const time = new Date().toLocaleTimeString();
//form.addEventListener('submit', handleSubmit);
form.addEventListener('submit', handleSubmit);

function handleSubmit(noRefresh) {
	noRefresh.preventDefault();

	const meMyselfI = [ 'Me', 'Myself', 'I' ][Math.floor(Math.random() * 3)];

	const divEl = document.createElement('div');
	divEl.className = 'message';
	divEl.setAttribute('id', 3);

	divEl.innerHTML = `
    <span>${time}</span>
    <span class="sender">${meMyselfI}</span>
    <span>${input.value}</span>
    <span class="delete">❌</span>`;

	chatbox.appendChild(divEl);
	console.log(divEl);

	form.reset();
}

let deleteIt = false;
function submitMes(send, theText) {
	if (!theText.length) return;
	deleteIt++;
	const text = `<ul class='message' id='${deleteIt}'>
    <li>${time}</li>
    <li class="send">${send}:</li>
  <li>${theText}</li>
   <li class="delete" onclick='deleteMe(${deleteIt})'>❌</li>
    </ul>`;
	chatbox.innerHTML += text;
	chatbox.scrollTop = chatbox.scrollHeight;
}

function deleteMe(deleteIt) {
	const text = document.getElementById(deleteIt);
	text.remove();
}

const button = document.querySelector('button');
button.addEventListener('click', getJoke);

function getJoke() {
	fetch('https://api.icndb.com/jokes/random?limitTo=[nerdy]')
		.then((resp) => resp.json())
		.then((json) => submitMes('Fun Fact', json.value.joke));
}

// create message

//const createMessage = (meMyselfI, input) => {
//	const divEl = document.createElement('div');
//	divEl.className = 'message';
//	divEl.setAttribute('id', 3);
//	divEl.innerHTML = `
//  <span>10:22</span>
//<span class="sender">${meMyselfI}</span>
//    <span>${input.value}</span>
//  <span class="delete">❌</span>`;
//	chatbox.appendChild(divEl);
//};

// const newMessageLi = document.createElement(message);
// const messageContent = document.createTextNode(input.value);
// newMessageLi.appendChild(messageContent);
// chatbox.appendChild(newMessageLi);
