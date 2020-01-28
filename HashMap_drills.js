const HashMap = require('./Hash');

function main() {
  const lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandalf');
  lotr.set('Human', 'Aragorn');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');

  console.log(lotr);
}

main();

function palindrome(string) {
  let pd = new HashMap(
    string.length * 2
  );
  pd.MAX_LOAD_RATIO = 0.5;
  pd.SIZE_RATIO = 3;
  let word = string.split('');

  for (let letter of word) {
    pd.set(letter, 0);
  }

  for (let letter of word) {
    pd.set(letter, pd.get(letter) + 1);
  }

  let odd = Boolean(word.length % 2);
}

function five() {}
