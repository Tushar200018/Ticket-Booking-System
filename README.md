# Ticket-Booking-System
This a MERN stack app which allows a user to select his/her desirable seats for any movie show listed and buy the same without paying any actual money.

Steps to Run the App

1. First open the project in vs-code and open the terminal with "assessment" as the root folder.
2. Now go into the backend folder by typing "cd backend/" in the terminal.
3. Now, install the dependencies first by typing, "npm i" in the terminal.
4. Create a ".env" in the backend folder, and include your MongoDB Altlas connection url in the file by typing, "MONGODB_ATLAS_URL = [Your URL goes here]" and also add the Database name like this, "DB_NAME=[Database name goes here]".
5. Now run "nodemon index.js" in the terminal, this will start the backend server.
6. You will have to add some documents in the DB created from MongoDB Atlas itself, in the format {name: "[MovieName goes here]", occupiedIndices: {}}.
7. Now open another terminal and cd into the frontend folder and again do perform "npm i".
8. Now, run npm start, and the app has started on port 3000, you can access from this url "http://localhost:3000/"
