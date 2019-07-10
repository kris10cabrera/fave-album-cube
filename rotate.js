document.addEventListener("mousemove", flipCube);
document.addEventListener("touchmove", flipCube);
const questionMark = document.querySelector('.explainer');
const explanation = document.querySelector('.explanation');
function flipCube(event) {
  let windowWidth = window.innerWidth;
  const box = document.querySelector('.album-cube');
  const x = event.pageX;
  const y = event.pageY;
	if (windowWidth < 500) {
    const midX = (x - window.innerWidth / 2) * 2;
    const midY = (y - window.innerHeight / 2) * 2;
    box.style.transform = `rotateX(${midY}deg) rotateY(${midX}deg)`;
  } else {
    const midX = (x - window.innerWidth / 2) * .5;
    const midY = (y - window.innerHeight / 2) * .5;
    box.style.transform = `rotateX(${midY}deg) rotateY(${midX}deg)`;
  };
 
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

questionMark.addEventListener("click", function(){
  if (questionMark.innerHTML == "?") {
      questionMark.innerHTML = "X";
  } else {
    questionMark.innerHTML = "?";
  }
  
  questionMark.classList.toggle("clicked");
  explanation.classList.toggle("d-none");
});