const methods= document.querySelector('#method');
const code1= document.querySelector('.code-1'); 
const code2= document.querySelector('.code-2'); 
const code3= document.querySelector('.code-3'); 
const code4= document.querySelector('.code-4'); 
const code5= document.querySelector('.code-5'); 
const code6= document.querySelector('.code-6'); 
const descP2= document.querySelector('.desc-p2');
const code = [code1,code2,code3,code4,code5,code6]
document.querySelector('.desc-p2').textContent='Creating a dataframe using list';
methods.addEventListener('change',function(e){
    if (e.target.value==='m1') {
        document.querySelector('.desc-p2').textContent='Creating a dataframe using list';
        code[0].style.display= 'block'
        code[1].style.display= 'none'
        code[2].style.display= 'none'
        code[3].style.display= 'none'
        code[4].style.display= 'none'
        code[5].style.display= 'none'
        descP2.textContent= 'Pandas DataFrame using nested list';
    }
    else if (e.target.value==='m2'){
        document.querySelector('.desc-p2').textContent='Creating a dataframe from dict of n arrays/lists';
        code[0].style.display= 'none'
        code[1].style.display= 'block'
        code[2].style.display= 'none'
        code[3].style.display= 'none'
        code[4].style.display= 'none'
        code[5].style.display= 'none'
        descP2.textContent= 'Pandas DataFrame using dictionary';
    }
    else if (e.target.value==='m3'){
        document.querySelector('.desc-p2').textContent='Creating a indexes DataFrame using arrays';
        code[0].style.display= 'none'
        code[1].style.display= 'none'
        code[2].style.display= 'block'
        code[3].style.display= 'none'
        code[4].style.display= 'none'
        code[5].style.display= 'none'
    }
    else if (e.target.value==='m4'){
        document.querySelector('.desc-p2').textContent='Creating Dataframe from list of dicts';
        code[0].style.display= 'none'
        code[1].style.display= 'none'
        code[2].style.display= 'none'
        code[3].style.display= 'block'
        code[4].style.display= 'none'
        code[5].style.display= 'none'
    }
    else if (e.target.value==='m5'){
        document.querySelector('.desc-p2').textContent='Creating DataFrame using zip() function';
        code[0].style.display= 'none'
        code[1].style.display= 'none'
        code[2].style.display= 'none'
        code[3].style.display= 'none'
        code[4].style.display= 'block'
        code[5].style.display= 'none'
    }
    else if (e.target.value==='m6'){
        document.querySelector('.desc-p2').textContent='Creating DataFrame from Dicts of series';
        code[0].style.display= 'none'
        code[1].style.display= 'none'
        code[2].style.display= 'none'
        code[3].style.display= 'none'
        code[4].style.display= 'none'
        code[5].style.display= 'block'
    };
});


// ananya js   


var steps = 0;
function next()
{
    steps++;

    if(steps == 1)
    {
        var step1 = document.getElementsByClassName("circle1")
        for(var i = 0 ; i < step1.length ; i++)
        {
            step1[i].style.backgroundColor="red";
        }
        document.getElementById("number").innerHTML="";
        document.getElementById("result").innerHTML="";
    }
    if(steps == 2) 
    {
        var step2 = document.getElementsByClassName("circle2")
        for(var i = 0 ; i < step2.length ; i++)
        {
            step2[i].style.backgroundColor="lightgreen";
        }
        document.getElementById("number").innerHTML="n = 1";
        document.getElementById("result").innerHTML="Nth Prime Number = 2";
    }
    if(steps == 3) 
    {
        var step3 = document.getElementsByClassName("circle3")
        for(var i = 0 ; i < step3.length ; i++)
        {
            step3[i].style.backgroundColor="lightgreen";
        }
        var step2 = document.getElementsByClassName("circle2")
        for(var i = 0 ; i < step2.length ; i++)
        {
            step2[i].style.backgroundColor="yellow";
        }
        document.getElementById("number").innerHTML="n = 2";
        document.getElementById("result").innerHTML="Nth Prime Number = 3";
    }
    if(steps == 4) 
    {
        var step4 = document.getElementsByClassName("circle4")
        for(var i = 0 ; i < step4.length ; i++)
        {
            step4[i].style.backgroundColor="red";
        }
        var step3 = document.getElementsByClassName("circle3")
        for(var i = 0 ; i < step3.length ; i++)
        {
            step3[i].style.backgroundColor="yellow";
        }
        document.getElementById("number").innerHTML="";
        document.getElementById("result").innerHTML="";
    }
    if(steps == 5) 
    {
        var step5 = document.getElementsByClassName("circle5")
        for(var i = 0 ; i < step5.length ; i++)
        {
            step5[i].style.backgroundColor="lightgreen";
        }
        document.getElementById("number").innerHTML="n = 3";
        document.getElementById("result").innerHTML="Nth Prime Number = 5";
    }
    if(steps == 6) 
    {
        var step6 = document.getElementsByClassName("circle6")
        for(var i = 0 ; i < step6.length ; i++)
        {
            step6[i].style.backgroundColor="red";
        }
        var step5 = document.getElementsByClassName("circle5")
        for(var i = 0 ; i < step5.length ; i++)
        {
            step5[i].style.backgroundColor="yellow";
        }
        document.getElementById("number").innerHTML="";
        document.getElementById("result").innerHTML="";
    }
    if(steps == 7) 
    {
        var step7 = document.getElementsByClassName("circle7")
        for(var i = 0 ; i < step7.length ; i++)
        {
            step7[i].style.backgroundColor="lightgreen";
        }
        document.getElementById("number").innerHTML="n = 4";
        document.getElementById("result").innerHTML="Nth Prime Number = 7";
    }
    if(steps == 8) 
    {
        var step8 = document.getElementsByClassName("circle8")
        for(var i = 0 ; i < step8.length ; i++)
        {
            step8[i].style.backgroundColor="red";
        }
        var step7 = document.getElementsByClassName("circle7")
        for(var i = 0 ; i < step7.length ; i++)
        {
            step7[i].style.backgroundColor="yellow";
        }
        document.getElementById("number").innerHTML="";
        document.getElementById("result").innerHTML="";
    }
    if(steps == 9) 
    {
        var step9 = document.getElementsByClassName("circle9")
        for(var i = 0 ; i < step9.length ; i++)
        {
            step9[i].style.backgroundColor="red";
        }
        document.getElementById("number").innerHTML="";
        document.getElementById("result").innerHTML="";
    }
    if(steps == 10) 
    {
        var step10 = document.getElementsByClassName("circle10")
        for(var i = 0 ; i < step10.length ; i++)
        {
            step10[i].style.backgroundColor="red";
        }
        document.getElementById("number").innerHTML="";
        document.getElementById("result").innerHTML="";
        
        
    }
    if(steps == 11)
    {
        var step1 = document.getElementsByClassName("circle1")
        for(var i = 0 ; i < step1.length ; i++)
        {
            step1[i].style.backgroundColor="white";
        }
        var step2 = document.getElementsByClassName("circle2")
        for(var i = 0 ; i < step2.length ; i++)
        {
            step2[i].style.backgroundColor="white";
        }  
        var step3 = document.getElementsByClassName("circle3")
        for(var i = 0 ; i < step3.length ; i++)
        {
            step3[i].style.backgroundColor="white";
        }  
        var step4 = document.getElementsByClassName("circle4")
        for(var i = 0 ; i < step4.length ; i++)
        {
            step4[i].style.backgroundColor="white";
        }
        var step5 = document.getElementsByClassName("circle5")
        for(var i = 0 ; i < step5.length ; i++)
        {
            step5[i].style.backgroundColor="white";
        } 
        var step6 = document.getElementsByClassName("circle6")
        for(var i = 0 ; i < step6.length ; i++)
        {
            step6[i].style.backgroundColor="white";
        } 
        var step7 = document.getElementsByClassName("circle7")
        for(var i = 0 ; i < step7.length ; i++)
        {
            step7[i].style.backgroundColor="white";
        } 
        var step8 = document.getElementsByClassName("circle8")
        for(var i = 0 ; i < step8.length ; i++)
        {
            step8[i].style.backgroundColor="white";
        }
        var step9 = document.getElementsByClassName("circle9")
        for(var i = 0 ; i < step9.length ; i++)
        {
            step9[i].style.backgroundColor="white";
        } 
        var step10 = document.getElementsByClassName("circle10")
        for(var i = 0 ; i < step10.length ; i++)
        {
            step10[i].style.backgroundColor="white";
        }
        document.getElementById("number").innerHTML="n = ";
        document.getElementById("result").innerHTML="Nth Prime Number = ";
        steps=0;
    }

}


// quizz js

//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
// if startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}
// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}
// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}
let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}
// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++; 
        que_numb++; 
        showQuetions(que_count);
        queCounter(que_numb); 
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    }else{
        clearInterval(counter); 
        clearInterval(counterLine);
        showResult();
    }
}
// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");
    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");
        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}
function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ 
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of timeCount with time value
        time--; //decrement the time value
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(time < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //change the time text to time off
            const allOptions = option_list.children.length; //getting all option items
            let correcAns = questions[que_count].answer; //getting correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px"; 
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}
function queCounter(index){
    
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; 
}