# Redux Feedback Loop

One Paragraph of project description goes here. Link to the live version of the app if it's hosted on Heroku.
​
## Built With
​
List technologies and frameworks here
​
## Getting Started
​
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
​
### Prerequisites
​
Link to software that is required before you attempt to start the app (e.g. node, mongo).
​
- [Node.js](https://nodejs.org/en/)
- List other prerequisites here
​
### Installing
​
Steps to get the development environment running.
​
1. Download this project.
2. `npm install`
3. `npm start`
​
And so on...
​
## Screen Shot
​
Include one or two screen shots of your project here (optional). Remove if unused.
​
## Documentation
​
Link to a read-only version of your scope document or other relevant documentation here (optional). Remove if unused.
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

### Next Steps
- [ ] Allow the user to go back to an earlier step and change their score.
- [ ] Display all of the existing feedback at the route `/admin`. The most recently added feedback should appear at the top of the list. Allow the user to delete existing feedback. Prompt the user to confirm prior to deleting the feedback from the database.
- [ ] Update this README.md to describe the project.
- [ ] Improve the styling of the app using Material-UI.
- [ ] Add the ability to flag an existing feedback entry for further review on the `/admin` view.
- [ ] Deploy the project to Heroku. 
​
## Deployment
​
Add additional notes about how to deploy this on a live system
​
## Authors
- Lilith Štefánia Bentley
- Prime Academy Instructors
​
## Acknowledgments​
- Hat tip to anyone who's code was used
