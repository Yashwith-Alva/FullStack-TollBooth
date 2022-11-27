# FullStack-TollBooth
Toll Booth Management

Init Setup:
1. Make a Master folder.
2. Create 2 sub folders: client and server.
3. Follow the below steps

Setup Client:
1. Go to client directory and run the following commands as such:
   - npx create-react-app .
   - npm install react-bootstrap bootstrap.
   - Now download the above code and replace the src folder with this one.
   - Install axios as global
   - Install react-router-dom

Setup Server:
1. Go to server directory and install the following:
   - npm init : It will ask a bunch of question just press enter. Dont change anything.
   - npm install express nodemon mysql2 sequelize sequelize-cli cors
   - Go to server/package.json and check if all these are dependencies are present.
   - Next go to package.json/ "scripts" and an extra line under the "tests": 
        - "start" : "nodemon start"
   - Run this cmd:   sequelize init
   - delete folders seeders and migration
   - Replace the models folder with the above.
   - add an extra folder called route from above
   - go to config folder and config.json
        - in development: Update ur sql workbench password and Database in which u want to store.



React 
React-Bootstrap
Express
Sequelize
Yup
Formik
Fastag
