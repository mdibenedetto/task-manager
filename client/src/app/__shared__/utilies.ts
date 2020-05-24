export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  //The maximum is exclusive and the minimum is inclusive
  let rnd = Math.floor(Math.random() * (max - min)) + min;
  return rnd;
}
