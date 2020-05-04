const isGood = (soldierType) => {
  // TODO: return `true` if the soldierType is Good.
  // Hint: Hobbits, Elves, Dwarves and Eagles are Good
  // const good = 'Hobbits' || 'Elves' || "Dwarves" || "Eagles";
  if (soldierType === 'Hobbits' || soldierType === 'Elves' || soldierType === 'Dwarves' || soldierType === 'Eagles') {
    return (true);
  }
  return (false);
};

const buildSoldierObject = (battlefield) => {
  // TODO: Given a battlefield (String), return an object of forces.
  // const battlefield = "Elves:3,Orcs:2"
  // buildSoldierObject(battlefield)  //=> { "Elves" => 3, "Orcs" => 2 }
  const obj = {};
  const array = battlefield.split(',');
  array.forEach((element) => {
    const k = element.split(':');
    obj[k[0]] = parseInt(k[1], 10);
  });
  return obj;
};

const whoWinsTheWar = (battlefield) => {
  // TODO: Based on the battlefield's description (it's a String), return "Good", "Evil" or "Tie".
};

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line


// Hobbits, Elves, Dwarves and Eagles
// against the evil Orcs, Wargs, Goblins, Uruk Hai and Trolls
// 'Hobbits:1,Elves:2,Dwarves:3,Eagles:4,Orcs:5,Wargs:6,Goblins:7'

console.log(buildSoldierObject("Elves:3,Orcs:2"));
