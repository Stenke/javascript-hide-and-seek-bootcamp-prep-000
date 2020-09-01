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
  let gNode = document.querySelector('#grand-node')
  let nextNode = gNode.children[0];
  
  while (nextNode) {
    gNode = nextNode;
    nextNode = gNode.children[0];
  }
  return (gNode);
}