# ProyectoNode
_Node workshop final proyect_

## Author
Eduardo Sebastián Acosta Serret Carrillo [@SebAcosta29](https://www.linkedin.com/in/sebacosta29/)

## Description
System that allows employees administration to users registered in the DB. When a user logs in, it will be authenticated by JWT. All pages check for a valid JWT token before displaying information. Authenticated users can:
* Register employees to DB
* Modify employee data
* Delete employees from DB
* Search for employees by name and last name

## Dependencies
* Express 
* JWT
* Morgan
* Mysql
* Nodemon

## Installation
First you'll need to install dependencies, open the directory on your console and run
  ```sh
  npm i
  ```
  
To start the server and begin making petitions, run
  ```sh
  npm start
  ```

Once the server is running, open the index.html file on your browser to start using the program

## Preview
### Login
Only users created directly in the DB can access

![Login](https://user-images.githubusercontent.com/82831189/207216400-a00bdc95-6537-4259-92f0-0052493c1def.png)

### Homepage
Welcome text changes depending on the time of the day. If the text doesn't fit, a scrollbar appears. If there are more employees, a vertical scrollbar appears

![Home](https://user-images.githubusercontent.com/82831189/207216450-4731e235-b65f-47fe-bc1a-d8e7de4427d8.png)

### Search
You can search for employees by their name or last name

![Search](https://user-images.githubusercontent.com/82831189/207216500-d0f329e1-480e-4ce6-9a3d-ebf97e3d0d68.png)

### Adding employees

![Put](https://user-images.githubusercontent.com/82831189/207216535-178cc7e7-6a4d-4efe-83ac-bde34bc13aee.png)

### Editing employees
Text inputs are already filled with employee's information

![Edit](https://user-images.githubusercontent.com/82831189/207216569-8dc0da10-f22a-4591-882c-38c4ac438d87.png)

### Deleting employees
Text inputs are disabled

![Delete](https://user-images.githubusercontent.com/82831189/207217331-8b5c26cc-d7bc-408b-8910-cad4c0abc43f.png)

