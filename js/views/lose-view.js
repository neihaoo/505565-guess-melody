import {calculateUserScore} from '../game/calculate-user-score';
import {showGameResult} from '../game/show-game-result';
import AbstractView from './abstract-view';

export default class LoseView extends AbstractView {
  constructor(gameState) {
    super();

    const {userScore} = calculateUserScore(gameState.userScores);

    this.templateTitle = gameState.notes > 0 ? `Какая жалость!` : `Увы и ах!`;
    this.userResult = {
      score: userScore,
      time: gameState.time,
      notes: gameState.notes
    };
  }

  get template() {
    return `
      <section class="main main--result">
        <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

        <h2 class="title">${this.templateTitle}</h2>
        <div class="main-stat">${showGameResult([], this.userResult)}</div>
        <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
      </section>
    `;
  }

  bind() {
    this.element.querySelector(`.main-replay`).addEventListener(`click`, () => {
      this.onReplayClick();
    });
  }

  onReplayClick() {}
}
