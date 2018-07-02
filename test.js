var Answer = function (question, ans1, ans2, ans3) {
    this.question = question;
	this.ans1 = ans1;
	this.ans2 = ans2;
	this.ans3 = ans3;
};

var answers = [];
answers.push(
	new Answer(
		"Refer to the exhibit. What pillar in the Internet of Everything is represented by the second icon?",
		"process"
	);
);
answers.push(
	new Answer(
		"What is used to determine where wireless access points should be located?",
		"a flowchart",
		"
an analytics tool"
	);
);



for(let i = 0; i < answers.length; i++){
	if(document.querySelectorAll(".coreContent")[i*2].textContent.slice(0,50) === answers[i].question.slice(0,50)){
		let odp = document.querySelectorAll(".ai-option");
		for(let j = 0; j < odp.length; j++){
			if(odp[j].textContent === answers[i].ans1) odp[j].textContent += ".....";
			if(odp[j].textContent === answers[i].ans2) odp[j].textContent += ".....";
			if(odp[j].textContent === answers[i].ans3) odp[j].textContent += ".....";
		}
	}
}






// for(var i = 0; i < answers.length; i++){
// 	document.querySelectorAll(".post-content")[0].querySelectorAll("p:nth-of-type(2n)")[i].querySelectorAll("span")[0].textContent
// }
