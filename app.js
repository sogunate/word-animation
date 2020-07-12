

/*grab the h1 and assign it to a const*/
const text = document.querySelector(".fancy");
/*grab the content of the H1* and place it in a var*/
const strText = text.textContent;
/*split the string and assign it to a var, it becomes an array. */
const splitText = strText.split("");
/*delete the first text*/
text.textContent = "";
/*for each item in split text wrap it in a span */
for(let i = 0; i < splitText.length; i++){
	text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
	const span = text.querySelectorAll('span')[char];
	span.classList.add('fade');
	char++;
	if(char == splitText.length){
		complete();
		return;
	}
	
}

function complete(){
	clearInterval(timer);
	timer = null;
}