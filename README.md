# Redux Feedback Loop

This app collects student feedback and saves it into a database for later review by an administrator.
<!--
Link to the live version of the app if it's hosted on Heroku.
-->
## Built With
​
The client is built in React and Redux, and uses Axios to communicate with the server. The server is built in Node and Express, and communicates with a Postgres database using pg.
​
## Getting Started
​
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
​
### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
​
### Installing
​
1. Download this project.
2. Bring in the dependencies with `npm install`.
3. Create a Postgres database (and make it available on localhost:5432) named `prime_feedback`.
4. Run the queries in `data.sql` to create and populate the `feedback` table.
5. Start the server with `npm run server`.
6. Start the client with `npm run client`.
<!-- 
## Screen Shot
​
Include one or two screen shots of your project here (optional). Remove if unused. 
-->​

## Documentation
- [Project scope](INSTRUCTIONS.md)
​
### Completed Features
- [X] A multi-part form allows users to leave feedback for today.
- **There are 4 views for the form parts:**
- [X] How are you feeling today?
- [X] How well are you understanding the content?
- [X] How well are you being supported?
- [X] Any comments you want to leave?

- [X] Redux stores feedback data across views.
- [X] Each part of the form is in its own route.
- [X] Clicking next moves the user to the appropriate step​.
- [X] Each step only allows the user to advance to the next step if a score was provided.
- [X] The final step of the process allows the user to review their feedback before submitting.
- [X] A submit button sends the completed feedback to the database and redirects to a success page.
- [X] The user can take a new survey from the success page.

- [X] The user can go back to an earlier step and change their score.
- [X] Displays all of the existing feedback at the route `/admin`. The most recently added feedback appears at the top of the list.
- [X] Update this README.md to describe the project.

### Next Steps
- [ ] Allow the admin to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.
- [ ] Improve the styling of the app using Material-UI.
- [ ] Add the ability to flag an existing feedback entry for further review on the `/admin` view.
- [ ] Deploy the project to Heroku. 
<!--
## Deployment
​
Add additional notes about how to deploy this on a live system
-->
​## Authors
- Lilith Štefánia Bentley
- Prime Academy Instructors
​
<!-- ## Acknowledgments​
- Hat tip to anyone who's code was used -->
