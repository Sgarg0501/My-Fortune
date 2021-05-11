var n=Math.random();
n=n*100;
n=Math.floor(n)+1;
var p=Math.random();
p=p*100;
p=Math.floor(p)+1;

let answer=document.querySelector(".b1");
answer.onclick=function(){
  document.querySelector(".right").textContent=n;
  document.querySelector(".wrong").textContent=p;
  if(n>p)
  {
    document.querySelector(".result").textContent="Success Percentage is more";


  }
  else if(p>n)
  {
    document.querySelector(".result").textContent="Failing Percentage is more";
  }
  else if(n==p){
    document.querySelector(".result").textContent="Intermediate state: There is 50% risk";
  }


}
var count=0;
var audio=document.getElementById("audio");
var buttom=document.querySelector(".g");
function playpause(){
  if(count==0){
    count=1;
    audio.play();
    buttom.innerHTML="Pause &#9208";
  }
  else{
    count--;
    audio.pause();
      buttom.innerHTML="Play &#9658";
  }
}
