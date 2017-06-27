var typeDefs = [`

type Person {
  id: ID
  givenName: String
  lastName: String
  name: String
  birthYear: Int,
  birthPlace: String,
  deathYear: Int,
  deathPlace: String,
  spouse: [Person]
  parents: [Person]
  children: [Person]
}

input PersonInput {
  givenName: String
  lastName: String
  birthYear: Int,
  birthPlace: String,
  deathYear: Int,
  deathPlace: String,
  spouse: [ID]
  parents: [ID]
  children: [ID]
}

type Animal {
  id: ID
  name: String,
  emoji: String,
  friend: Animal,
  enemy: Animal,
  prey: [Animal],
  owner: Person
}

type Query {
  person(name: String): [Person]
  animal(name: String): [Animal]
  rollDice(numDice: Int!, numSides: Int): [Int]
}

type Mutation {
  ping(message: String): String
  error: String
  addPerson(person: PersonInput): Person
}

type Subscription {
  pong: String
}

schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}`];

module.exports = typeDefs;