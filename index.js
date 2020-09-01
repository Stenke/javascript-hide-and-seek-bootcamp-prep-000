function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document
  .getElementById('nested')
  .querySelector('div.target');
}

function increaseRankBy(n) {
  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list');
  for (let i = 0; i < lis.length; i++) {
    parseInt(lis[i]).innerHTML = (i + n).toString();
  }
}