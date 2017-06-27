var {people, animals} = require('./data');
var pubsub = require('./subscriptions');

var resolvers = {
  Query: {
    person(root, params) {
      if (params.name) {
        return people.filter(p => p.givenName === params.name);
      }
      return people;
    },
    animal(root, params) {
      if (params.name) {
        return animals.filter(a => a.name === params.name);
      }
      return animals;
    },
    rollDice: function (root, {numDice, numSides}) {
      var output = [];
      for (var i = 0; i < numDice; i++) {
        output.push(1 + Math.floor(Math.random() * (numSides || 6)));
      }
      return output;
    }
  },
  Mutation: {
    ping(root, params) {
      pubsub.publish('pong', params.message);
      return 'Sent message:' + params.message;
    },
    error() {
      throw new Error('You should handle this error!');
    },
    addPerson(root, params) {
      const person = params.person;
      person.id = people.length + 1;
      people.push(person);
      return person;
    }
  },
  Subscription: {
    pong: {
      subscribe: () => pubsub.asyncIterator('pong'),
      resolve: (payload) => {
        return 'Message subscription:' + payload;
      },
    }
  },
  Person: {
    name(root, params) {
      return root.givenName + ' ' + root.lastName;
    },
    spouse(root, params) {
      return root.spouse.map(s => people.find(p => p.id === s));
    },
    parents(root, params) {
      return root.parents.map(s => people.find(p => p.id === s));
    },
    children(root, params) {
      return root.children.map(s => people.find(p => p.id === s));
    },
  },
  Animal: {
    friend(root, params) {
      return animals.find(a => a.id === root.friend);
    },
    enemy(root, params) {
      return animals.find(a => a.id === root.enemy);
    },
    owner(root, params) {
      return people.find(a => a.id === root.owner);
    },
    prey(root) {
      return animals.filter(a => a.enemy === root.id);
    }
  }
};

module.exports = resolvers;