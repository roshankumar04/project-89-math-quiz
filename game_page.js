player1name=localStorage.getItem("p1name");
player2name=localStorage.getItem("p2name");

player1score=0;
player2score=0;

document.getElementById("p1name").innerHTML=player1name+":";
document.getElementById("p2name").innerHTML=player2name+":";

document.getElementById("p1score").innerHTML=player1score;
document.getElementById("p2score").innerHTML=player2score;

document.getElementById("player_ques").innerHTML="Question turn="+player1name;
document.getElementById("player_ans").innerHTML="Answer turn="+player2name;

function send(){
    number1=document.getElementById("n1").value;
    number2=document.getElementById("n2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
    console.log(actual_answer);

    question_number="<h4>"+number1+"X"+number2+"</h4>";
    input_box="<br>Answer: <input type='text' id='input_check_box'>";
    check_button="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row =question_number+input_box+check_button;
    
    document.getElementById("output").innerHTML=row;
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";

}