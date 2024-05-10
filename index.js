let adviceMsg = document.querySelector('.advice');
let adviceId = document.querySelector('.advice-id');
let dice = document.querySelector('.dice-wrapper');
const URL = 'https://api.adviceslip.com/advice';

dice.addEventListener('click', async () => {
  const response = await fetch(URL);
  const { slip: { id, advice } } = await response.json();
  
  adviceMsg.textContent = advice;
  adviceId.textContent = id;
});