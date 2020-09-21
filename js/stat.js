'use strict';
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP_CLOUD = 10;
const TEXT_X = CLOUD_X + 20;
const TEXT_Y = CLOUD_Y + 30;
const TEXT_GAP = 20;
const BAR_Y = CLOUD_Y + 230;
const BAR_X = CLOUD_X + 40;
const BAR_WIDTH = 40;
const BAR_HEIGHT = 150;
const GAP = 50;


let renderCloud = (ctx, x, y, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


let getMaxElement = (arr) =>{
  let maxElement = arr[0];
  arr.forEach(function (e) {
    if (e > maxElement) {
      maxElement = e;
    }
  });
  return maxElement;
};


window.renderStatistics = (ctx, names, times) => {
  renderCloud(ctx, CLOUD_X + GAP_CLOUD, CLOUD_Y + GAP_CLOUD, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.font = `16px PT Mono`;
  ctx.fillStyle = `#000`;
  ctx.fillText(`Ура вы победили!`, TEXT_X, TEXT_Y);
  ctx.fillText(`Список результатов:`, TEXT_X, TEXT_Y + TEXT_GAP);


  let maxTime = getMaxElement(times);

  let randomColor = () => {
    return `hsl(` + 230 + `,` + 100 + `%,` + (100 * Math.random()) + `%)`;
  };


  names.forEach(function (name, index) {
    if (name === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = randomColor();
    }

    ctx.fillRect(BAR_X + (BAR_WIDTH + GAP) * index, BAR_Y, BAR_WIDTH, -BAR_HEIGHT * times[index] / maxTime);

    ctx.font = `16px PT Mono`;
    ctx.fillStyle = `#000`;
    ctx.fillText(Math.floor(times[index]), BAR_X + (BAR_WIDTH + GAP) * index, BAR_Y - (BAR_HEIGHT * times[index] / maxTime) - 5);
    ctx.fillText(name, BAR_X + (BAR_WIDTH + GAP) * index, BAR_Y + 20);
  }
  );
};
