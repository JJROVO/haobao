const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

yesButton.addEventListener('click', () => {
    question.innerHTML = 'You are my Girlfriend now!';
    gif.src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnZ3cWlsbDJydzZndjhwcTdiNTlvajMyNnF4bXQ2dWRsbHdrNTBpcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/M4B4NeBqNK9L2S89XN/giphy.gif";
});

noButton.addEventListener('mouseover', () => {
  const noBtnRect = noButton.getBoundingClientRect();
  const maxx = window.innerWidth - noBtnRect.width;
  const maxy = window.innerHeight - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxx);
  const randomY = Math.floor(Math.random() * maxy);
  noButton.style.position = 'absolute';
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});