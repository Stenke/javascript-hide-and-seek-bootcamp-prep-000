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
  .querySelectorAll('.ranked-list')
}