var name = 'Human'

function helloWorld() {
  return 'hello ' + (name || 'world !');
}

helloWorld();
console.log(helloWorld());
