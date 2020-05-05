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
  let result = '';
  let countG = 0;
  let countB = 0;
  if (battlefield === '') result = 'Tie';
  const wariors = buildSoldierObject(battlefield);
  Object.keys(wariors).forEach((soldier) => {
    const asa = isGood(soldier);
    if (asa) {
      countG += parseInt(wariors[soldier], 10);
    } else {
      countB += parseInt(wariors[soldier], 10);
    }
    if (countG > countB) {
      result = 'Good';
    } else if (countG < countB) {
      result = 'Evil';
    } else {
      result = 'Tie';
    }
  });
  return result;
};

module.exports = { whoWinsTheWar, buildSoldierObject, isGood }; // Do not remove this line
// console.log(whoWinsTheWar('Hobbits:1,Elves:2,Dwarves:3,Eagles:4,Orcs:5,Wargs:6,Goblins:7'));

// Hobbits, Elves, Dwarves and Eagles
// against the evil Orcs, Wargs, Goblins, Uruk Hai and Trolls
// 'Hobbits:1,Elves:2,Dwarves:3,Eagles:4,Orcs:5,Wargs:6,Goblins:7'
// console.log(buildSoldierObject("Elves:3,Orcs:2"));

// - `Tie` if the battlefield is empty or if Good and Evil have the same number of soldiers
// - `Good` if Good soldiers outnumber Evil soldiers
// - `Evil` if Evil soldiers outnumber Good soldiers
// 'Hobbits:1,Elves:2,Dwarves:3,Eagles:4,Orcs:5,Wargs:6,Goblins:7'
