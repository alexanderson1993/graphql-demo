var people = [
{
  id: 1,
  givenName: "Alex",
  lastName: "Anderson",
  spouse: [2],
  parents: [3,4],
  children: [5]
},
{
  id: 2,
  givenName: "Crystal",
  lastName: "Anderson",
  spouse: [1],
  parents: [6,7],
  children: [5]
},
{
  id: 3,
  givenName: "Brian",
  lastName: "Anderson",
  spouse: [4],
  parents: [],
  children: [1, 8]
},
{
  id: 4,
  givenName: "Kathy",
  lastName: "Anderson",
  spouse: [3],
  parents: [],
  children: [1, 8]
},
{
  id: 5,
  givenName: "Chip 'Danger'",
  lastName: "Anderson",
  spouse: [],
  parents: [1,2],
  children: []
},
{
  id: 6,
  givenName: "Bill",
  lastName: "Tolley",
  spouse: [7],
  parents: [],
  children: [2]
},
{
  id: 7,
  givenName: "Janet",
  lastName: "Tolley",
  spouse: [6],
  parents: [],
  children: [2]
},
{
  id: 8,
  givenName: "Natalie",
  lastName: "Anderson",
  spouse: [],
  parents: [3, 4],
  children: []
}
];

var animals = [
{
 id: 1,
 name: "fox",
 emoji: "🦊",
 friend: 3,
 enemy: 2,
 owner: 8
},
{
  id: 2,
  name: "dragon",
  emoji: "🐲",
  friend: 4,
  enemy: null,
  owner: null
},
{
  id: 3,
  name: "bear",
  emoji: "🐻",
  friend: 3,
  enemy: 2,
  owner: null
},
{
  id: 4,
  name: "panda",
  emoji: "🐼",
  friend: 4,
  enemy: null,
  owner: null
},
{
  id: 5,
  name: "turtle",
  emoji: "🐢",
  friend: 5,
  enemy: 1,
  owner: 2
},
]

module.exports = {people, animals};