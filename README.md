# pr-watchdog
Pullrequest Watchdog is a web app for watching pullrequests in Azure DevOps repository. 

Pullrequest lifecycle is observer through time and statistics (as a review length, speed of completion and others) are recorded per developer.

Watchdog can warn about idle pullrequests or long waiting times.

## Architecture
### Backend
Backend is a web service written in TypeScript using Apollo server. 
Azure DevOps sends pullrequest updates through its Web Hooks to Apollo endpoint. 
Changes of the pullrequest are processed a written to the NOSQL MongoDB.
Service also exposes a GraphQL API for access to the recorded data.

### Frontend
Frontend is a React SPA communicating with backend through ApolloClient and displaying recorded data.
