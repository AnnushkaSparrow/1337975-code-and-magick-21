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


const renderRect = (ctx, x, y, width, height, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

const getMaxElement = (arr) =>{
  let maxElement = arr[0];
  arr.forEach((e) => {
    if (e > maxElement) {
      maxElement = e;
    }
  });
  return maxElement;
};

const renderRandomColor = () =>
  `hsl(230, 100%, ${100 * Math.random()}%)`;

const setTextStyle = (ctx, fontSizeAndFamily, color, text1, textX1, textY1, text2, textX2, textY2) => {
  ctx.font = fontSizeAndFamily;
  ctx.fillStyle = color;
  ctx.fillText(text1, textX1, textY1);
  ctx.fillText(text2, textX2, textY2);
};


window.renderStatistics = (ctx, names, times) => {
  renderRect(ctx, CLOUD_X + GAP_CLOUD, CLOUD_Y + GAP_CLOUD, CLOUD_WIDTH, CLOUD_HEIGHT, `rgba(0, 0, 0, 0.7)`);
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, `#fff`);
  setTextStyle(ctx, `16px PT Mono`, `#000`, `Ура вы победили!`, TEXT_X, TEXT_Y, `Список результатов:`, TEXT_X, TEXT_Y + TEXT_GAP);

  let maxTime = getMaxElement(times);

  names.forEach(function (name, index) {
    if (name === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = renderRandomColor();
    }

    renderRect(ctx, BAR_X + (BAR_WIDTH + GAP) * index, BAR_Y, BAR_WIDTH, -BAR_HEIGHT * times[index] / maxTime);
    setTextStyle(ctx, `16px PT Mono`, `#000`,
        Math.floor(times[index]), BAR_X + (BAR_WIDTH + GAP) * index, BAR_Y - (BAR_HEIGHT * times[index] / maxTime) - 5,
        name, BAR_X + (BAR_WIDTH + GAP) * index, BAR_Y + 20);
  }
  );
};
