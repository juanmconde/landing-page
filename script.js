const rainContainer = document.querySelector('.rain');

for (let i = 0; i < 50; i++) {
  const drop = document.createElement('div');
  drop.classList.add('drop');

  drop.style.left = Math.random() * 100 + 'vw';
  drop.style.animationDuration = Math.random() * 3 + 2 + 's';
  rainContainer.appendChild(drop);
}
