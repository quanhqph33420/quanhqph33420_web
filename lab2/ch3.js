const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1
const gameSet = new Set();
for (const [key, value] of gameEvents) {
  gameSet.add(value);
}
console.log(gameSet);
//2
gameEvents.delete(64);
console.log(gameEvents);
//3
const total = 90;
console.log(`1 sự kiện xảy ra, trung bình mỗi ${total / gameEvents.size} phút`);
//4
for (const [key, value] of gameEvents) {
  key < 45 ? console.log(`${value} hiệp 1`) : console.log(`${value} hiệp 2`);
}
