var express = require('express');
var bodyParser = require('body-parser');
var { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
var { makeExecutableSchema } = require('graphql-tools');
var resolvers = require('./resolvers');
var typeDefs = require('./schema');

var schema = makeExecutableSchema({typeDefs, resolvers});
var app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:5000/`
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphiql'));


// Set up the scubscriptions
var {createServer} = require('http');
var { execute, subscribe } = require('graphql');
var { SubscriptionServer } = require('subscriptions-transport-ws');
var WS_PORT = 5000;
// Create WebSocket listener server
var websocketServer = createServer((request, response) => {
  response.writeHead(404);
  response.end();
});
// Bind it to port and start listening
websocketServer.listen(WS_PORT, () => console.log(
  `Websocket Server is now running on http://localhost:${WS_PORT}`
));

var subscriptionsServer = new SubscriptionServer(
  {
    execute,
    subscribe,
    schema,
  },
  {
    server: websocketServer
  }
);