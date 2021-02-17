let back = document.getElementById('back');

console.log(back);

let body = document.getElementsByTagName('body');

console.log(body)

back.addEventListener('click' , function (){

if(body[0].style.backgroundColor !== "grey") {
body[0].style.backgroundColor = "grey" ;}

else {

  body[0].style.backgroundColor="white";
}

let a = document.createElement('a');
a.innerHTML="HR";

a.setAttribute('href','#');
back.nextElementSibling.innerHTML="";
back.nextElementSibling.appendChild(a);

})


let name = prompt ('enter your name') ;

console.log(name);


let navMenu= document.getElementById('navMenu');


let li = document.createElement('li');

li.innerHTML= `hello ${name}`;

navMenu.appendChild(li);


let previous = document.getElementById('previous') ;

previous.addEventListener('click',function(){


previous.previousElementSibling.innerHTML="hhhh";

})


let cards =Array.from(document.getElementsByClassName('card'));

console.log(cards);


for (let i=0 ; i<cards.length ; i++) {

let btnremove = document.createElement('button');
btnremove.innerHTML="Remove";

btnremove.className="btnrmv"

btnremove.style.backgroundColor="red";
btnremove.style.color = "white";
cards[i].appendChild(btnremove);


}



let buttons = Array.from(document.getElementsByClassName('btnrmv')) ;

for (let i=0 ;i<buttons.length ; i++) {

buttons[i].addEventListener('click' , function(){


buttons[i].parentElement.remove();


})

}

let svg = document.getElementsByTagName('svg');

svg[0].addEventListener('dblclick' , function(){

this.style.fill = getRandomColor();


})


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


let plus= document.getElementById('plus') ;

let moins = document.getElementById ('moins')


plus.addEventListener('click', function(){

plus.nextElementSibling.innerHTML= parseInt(plus.nextElementSibling.innerHTML,10)+1;
prix.innerHTML = parseInt(prix.innerHTML,10)+25 ;

})

moins.addEventListener('click', function(){

if (parseInt(moins.previousElementSibling.innerHTML,10) >1){
moins.previousElementSibling.innerHTML = parseInt(moins.previousElementSibling.innerHTML,10)-1;
prix.innerHTML = prix.innerHTML-25;
}
else {

  alert("error")
}
})



let prix = document.getElementById('prix');
