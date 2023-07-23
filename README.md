# Trunk-Task

This project is a task management application that allows users to create job cards and manage workstations. The application is built using NestJS framework with a PostgreSQL database. The state of each task can be changed by updating its corresponding record in the database with one of four possible states. It uses Event-Driven Microservice approach, events are persisted within the database and they are used to loosely couple system components.

## Deployment
- This Application is deployed on Heroku:
 https://trunk-task-2395a5a0413f.herokuapp.com/ 
 
- Postman API collection:
 https://interstellar-robot-153334.postman.co/workspace/My-workspace~14df5f91-46b9-457a-bbf1-a9e841540590/collection/5050161-0a2b558d-bf86-4527-85fa-ee0d700137d0?action=share&creator=5050161

## Installation
1. Clone the repository from GitHub: 
  `git clone git@github.com:bumsyalao/trunk-task.git`

2. Install dependencies using yarn:
  `yarn install`
3. Create `.env` file in root directory with following contents:
    ```
    DB_URL=<your database url>
    PORT=<port number to run server on>
    ```

4. Run the application:

`yarn start`

The application should now be running on the specified port, and you can access it at http://localhost:3000.

## Development
  This Application is built with [NestJs](https://nestjs.com/)

## Application Features
  🚀 Create, Read, Update, and Delete (CRUD) operations for job cards.

  🚀 Create, Read, Update, and Delete (CRUD) operations for   workstations.

  ✨ Transition job card states between "Pending," "In Progress," "Paused," and "Complete."

> Time spent developing: 4hours.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.
## License
This project is licensed under the [MIT License](LICENSE).