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
  .querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = ((parseInt(lis[i].innerHTML)) + n)
  }
}

function deepestChild() {
  let lis = document.querySelector('#grand-node')
  let nextLis = lis.children[0];
  while (nextLis) {
    lis = nextLis;
    nextLis = lis.children[0];
  }
}