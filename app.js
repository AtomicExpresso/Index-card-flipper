const frontCard = document.getElementById('front-card');
const backCard = document.getElementById('back-card');

frontCard.classList.remove('flip-animaiton');
backCard.style.display = 'none';

let clicked = 1;

document.getElementById('flipfront').addEventListener('click', function() {
  clicked++;
  console.log('front');

  if(clicked === 1){
    frontCard.classList.remove('flip-animation'); 
    frontCard.style.display = 'none';
    backCard.style.display = 'flex';
  }
  else {
    frontCard.classList.add('flip-animation'); 
    frontCard.style.display = 'flex';
    backCard.style.display = 'none';
    clicked = 1;
  }

});

document.getElementById('flipback').addEventListener('click', function () {
  clicked++
  console.log('back');
  
  if(clicked === 1){
    backCard.classList.remove('flip-animation'); 
    frontCard.style.display = 'flex';
    backCard.style.display = 'none';
  }
  else {
    backCard.classList.add('flip-animation'); 
    frontCard.style.display = 'none';
    backCard.style.display = 'flex';
    clicked = 1;
  }

})