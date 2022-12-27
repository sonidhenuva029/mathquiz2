var player1_score = 0;
var player2_score = 0;
document.getElementById('player1Score').innerHTML = player1_score;
document.getElementById('player2Score').innerHTML = player2_score;
Player_1NAME = localStorage.getItem('Name_Player_1');
Player_2NAME = localStorage.getItem('Name_Player_2');
console.log(Player_1NAME);
console.log(Player_2NAME);
document.getElementById('player1').innerHTML = Player_1NAME + " : ";
document.getElementById('player2').innerHTML = Player_2NAME + " : ";
document.getElementById('Player_Question').innerHTML = Player_1NAME;
document.getElementById('Player_Answer').innerHTML = Player_2NAME;


function send() {
    answer = document.getElementById('answer').innerHTML;
    

}