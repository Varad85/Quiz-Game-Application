
let start=document.querySelector("#start");

let exit=document.querySelector("#exit");
let continueBtn=document.querySelector("#continue");

let quiz=document.querySelector("#quiz");
let time=document.querySelector("#time");

let questionNo=document.querySelector("#questionNo");
let questionText=document.querySelector("#questionText");

let option1=document.querySelector("#option1");
let option2=document.querySelector("#option2");
let option3=document.querySelector("#option3");
let option4=document.querySelector("#option4");

let total_correct=document.querySelector("#total_correct");
let next_question=document.querySelector("#next_question");

let result=document.querySelector("#result");
let points=document.querySelector("#points");
let quit=document.querySelector("#quit");
let restart=document.querySelector("#restart");

let choice_que=document.querySelectorAll(".choice_que");
let optionList=document.querySelectorAll("#optionList"); 


let Progress=document.querySelector("#progressBar");
let fullprogress=document.querySelector("#progressBarFull");

let index=0;
let timer=0;
let interval=0;
let timeout;

let correct=0;

let que_count=0;

start.addEventListener("click",function(){
	start.style.display="none";
	rules.style.display="block";
});

exit.addEventListener("click",function(){
	start.style.display="block";
	rules.style.display="none";
});

let countDown=function(){

	console.log(`Timer ${timer}`)
	if (timer===15)
	{
		clearInterval(interval);
		
	}
	else{
		timer++;
		time.innerText=timer;
	}
}
let loadData=function(){
	if(index === 4){
		document.querySelector("#next_question").innerHTML = "Submit"
	}
	
	questionNo.innerText=index+1+".";
	questionText.innerText=MCQS[index].question;
	option1.innerText=MCQS[index].option1;
	option2.innerText=MCQS[index].option2;
	option3.innerText=MCQS[index].option3;
	option4.innerText=MCQS[index].option4;
	timer=0;
}
loadData();
    continueBtn.addEventListener("click",function(){
	quiz.style.display="block";
	rules.style.display="none";
	document.querySelector("#progressBarFull").style.display = "block"
	total_correct.innerHTML= `${correct=0} of ${MCQS.length} questions`


		timeout = setTimeout(()=>{

		let options = Array.from(option)
		options.forEach((op)=>{
			op.classList.add('disabled')
		})

	},15000)

    interval=setInterval(countDown,1000);
	loadData();
});

const removeActive = (option) => {
    let options = Array.from(option)

    options.forEach((op)=>{
        op.classList.remove('disabled')
        if(op.classList.contains('active')){
            op.classList.remove('active')
        }
        if(op.classList.contains('correct')){
            op.classList.remove('correct')
        }
        if(op.classList.contains('incorrect')){
            op.classList.remove('incorrect')
        }
    })
}

const changeProgress = ()=> {
    let width = parseInt(index*20)
    document.querySelector("#progressBarFull").style.width = `${width}%`
}

const completedProgress = ()=> {
    console.log("completed")
        document.querySelector("#progressBarFull").style.width = `100%`
}

const resetProgress = () => {
    document.querySelector("#progressBarFull").style.width = 0
}

next_question.addEventListener("click",function(){
    quiz.style.display="block";
    //if (index < 4){
    if(index !== MCQS.length-1){
     index++;
     changeProgress()
     clearInterval(interval);
     clearTimeout(timeout)
     removeActive(option)

     timeout = setTimeout(()=>{

        let options = Array.from(option)
        options.forEach((op)=>{
            op.classList.add('disabled')
        })

    },15000);

loadData(); 

total_correct.style.display="block";
 	total_correct.innerHTML=`${correct} correct of ${MCQS.length} questions`;
 	clearInterval
 	interval=setInterval(countDown,1000);
 	
 }
 else{
 	index=0;
 	completedProgress()
 	clearInterval(interval);
 	quiz.style.display="none";
 	points.innerHTML=`You got ${correct} out of ${MCQS.length}`;
 	result.style.display="block";
 }
	
    });