// TODO hér þarf að sækja viðeigandi föll sem nota þarf

import { el } from './helpers.js';

/**
 * Býr til takka fyrir umferðir, festir `onClick` við og bætir
 * við `.rounds__buttons`.
 *
 * @param {number} max Hámark umferða
 * @param {function} onClick Fall sem keyra skal þegar ýtt er á takka
 */
export function createButtons(max, onClick) {
  // TODO útfæra
  const roundsbuttons = document.querySelector('.rounds__buttons');
  for (let i = 1; i< max; i++){
    if(!isValidBestOf(i)){
      continue;
    }
    const button = el('button', i.toString());
    button.addEventListener('click', onClick);
    roundsbuttons.appendChild(button);
  }
}

export function show(part) {
  // TODO klára að útfæra fyrir allar stöður

  // Element fyrir „parta“ leiks sem við viljum fela og sýna
  const start = document.querySelector('.start');
  const rounds = document.querySelector('.rounds');
  const play = document.querySelector('.play');
  const result = document.querySelector('.result');


  // Felum allt
  start.classList.add('hidden');
  rounds.classList.add('show');
  play.classList.add('hidden');
  result.classList.add('hidden');


  // og sýnum það sem beðið er um
  switch (part) {
    case 'start':
      start.classList.remove('hidden');
      break;
    case 'rounds':
      rounds.classList.remove('hidden');
      break;
    case 'play':
      play.classList.remove('hidden');
      break;
    case 'result':
      result.classList.remove('hidden');
      break;
    default:
      console.warn(`${part} óþekkt`);
  }

  // Halló debugger! Við getum sett þetta lykilorð til að láta debugger stoppa
  // þar sem við viljum í flæði forritanna okkar
  debugger;
}

/**
 * @typedef {Object} Results
 * @property {string} player Það sem spilari spilaði
 * @property {string} computer Það sem tölva spilaði
 * @property {number} result Útkoma úr leik, `-1`, `0`, eða `1`
 * @property {number} currentRound Núverandi umferð
 * @property {number} totalRounds Heildarfjöldi umferð
 * @property {number} playerWins Sigrar spilara í umferð
 * @property {number} computerWins Sigrar tölvu í umferð
 */

/**
 * Uppfærir öll gildi stöðu skjás innan `.result` áður en sýndur.
 * @param {Results} r Gildi fyrir skjá
 */
export function updateResultScreen({ player, computer, result, currentRound, totalRounds, playerWins, computerWins }) {
  // TODO útfæra

  const resultPlayer = document.querySelector('.result__player');

  resultPlayer.textContent = playAsText(player);

  const resultComputer = document.querySelector('.result__computer');

  resultComputer.textContent = playAsText(computer);

  const utkoma = document.querySelector('.result__result');
  if(result == '+1'){
    utkoma.textContent = "Þú sigrar";
  }else if (result == '0'){
    utkoma.textContent = "Jafntefli";
  }else if (result == '-1'){
    utkoma.textContent = "Þú tapar";
  }
  const current = document.querySelector('.result__currentRound');

  current.textContent = currentRound;

  const total = document.querySelector('.result__totalRounds');

  total.textContent = totalRounds;
  

}
