export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is exclusive and the minimum is inclusive
  const rnd = Math.floor(Math.random() * (max - min)) + min;
  return rnd;
}
