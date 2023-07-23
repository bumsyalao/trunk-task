# Trunk-Task

This project is a task management application that allows users to create job cards and manage workstations. The application is built using NestJS framework with a PostgreSQL database. The state of each task can be changed by updating its corresponding record in the database with one of four possible states. I used Event-Driven Microservice approach, events are persisted within the database and they are used to loosely couple system components.

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
  
    `yarn start:dev`

The application should now be running on the specified port, and you can access it at http://localhost:3000.

## Development
  This Application is built with [NestJs](https://nestjs.com/)

## Application Features
  🚀 Create, Read, Update, and Delete (CRUD) operations for job cards.

  🚀 Create, Read, Update, and Delete (CRUD) operations for   workstations.

  ✨ Transition job card states between "Pending," "In Progress," "Paused," and "Complete."

### API Endpoints
  The following API endpoints are available:

  `/workstations`
  - `GET /workstations` - Get a list of all workstations.
  - `GET /workstations/:id` - Get a single workstation by ID.
  - `POST /workstations` - Create a new workstation.
  - `PUT /workstations/:id` - Update an existing workstation.
  - `DELETE /workstations/:id` - Delete a workstation.

  `/job-cards`
  - `GET /job-cards` - Get a list of all job-cards.
  - `GET /job-cards/:id` - Get a single job-card by ID.
  - `POST /job-cards` - Create a new job-card.
  - `PUT /job-cards/:id` - Update an existing job-card.
  - `DELETE /job-cards/:id` - Delete a job-card.
  - `PUT /job-cards/:id/transitions/:state` - Update an existing job-card state.

  Request body of workstations:
  ```
      {
        "name": "Workstation 1",
        "location": "Location A"
      }
  ```

  Request body of job-cards:
  ```
      {
        "name": "Job Card 1",
        "description": "This is the description of Job Card 1",
        "workstationId": 7
      }
  ```

> Time spent developing: 4hours.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.
## License
This project is licensed under the [MIT License](LICENSE).