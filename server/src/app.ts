// require('dotenv').config();

import express from "express";
import compression from "compression";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import { createStore } from "./utils";

import { LaunchAPI } from "./datasources/launch";
import { UserAPI } from "./datasources/user";

import internalEngineDemo from "./engine-demo";
import { PullRequestService } from "./services/PullRequestService";
import { PullRequestController } from "./controllers/PullRequestController";

// creates a sequelize connection once. NOT for every request
const store = createStore();

// set up any dataSources our resolvers need
const dataSources = () => ({
  launchAPI: new LaunchAPI(),
  userAPI: new UserAPI({ store }),
});

// the function that sets up the global context for each resolver, using the req
const context = async () => {
  return {};
};

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context,
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
    ...internalEngineDemo,
  },
});

export const app = express();

app.set("port", process.env.PORT || 4000);

app.use("*", cors());
app.use(compression());
app.use(bodyParser.json());

server.applyMiddleware({ app, path: "/graphql" });

const pullRequestService = new PullRequestService({ createPullRequest: console.log, initialize: () => {}}, { createReview: console.log, initialize: () => {}});
const pullRequestController = new PullRequestController(pullRequestService);

app.post("/pull-request/created", pullRequestController.postCreated.bind(pullRequestController));
app.post("/pull-request/status", pullRequestController.postStatusChanged.bind(pullRequestController));
app.post("/pull-request/reviewer", pullRequestController.postReviewerChanged.bind(pullRequestController));
app.post("/pull-request/vote", pullRequestController.postVoteChanged.bind(pullRequestController));
//app.post("/pull-request/code", pullRequestController.postCodeChanged.bind(pullRequestController));
app.get("/pull-request", pullRequestController.getDetail.bind(pullRequestController));

export default app;