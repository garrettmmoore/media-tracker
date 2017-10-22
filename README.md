# MediaTrak
### By Garrett Moore

## Deployed Here: https://mediatrak.herokuapp.com

# Application
Hello! Welcome to MediaTrak! This full-stack site allows you to keep a running to-do list of shows and movies you've been meaning to check out.

MediaTrak follows the MVC design pattern. The application is built using MySQL, Node, and Express to query and route data, and Handlebars to generate your HTML. It also uses a homemade ORM. The application is currently deployed to Heroku and uses a remote MySQL database.

Node Packages Used: express, handlebars, mysql, body-parser and method-override

# Using MediaTrak

## Step 1 - Complete Form
1. User inputs the media name and their personal rating.
2. The user also decides where to send their form by choosing "Add to WatchList" or "Already Viewed".
3. Submit form by clicking the "Add Media" button.

## Step 2 - My WatchList
1. If the user checked "Add to WatchList", the page refreshes and the "My WatchList" section will be updated with the new media that was added.
    1. Note - This also updates the database.
2. For each media listing that appears in the "My WatchList" section, the user can click:
    1. Already Viewed: Clicking this button will update and move the media listing to the "Already Viewed Media" section.
    2. Delete Listing: Clicking this button will update and remove the media listing from the database entirely.

## Step 3 - Already Viewed Media
1. If the user checked "Already Viewed", the page refreshes and the "Already Viewed Media" section will be updated with the new media that was added.
    1. Note - This also updates the database.
2. For each media listing that appears in the "Already Viewed Media" section, the user can click:
    1. Haven't Viewed Yet: Clicking this button will update and move the media listing to the "My WatchList" section.
    2. Delete Listing: Clicking this button will update and remove the media listing from the database entirely.

# Application Setup

## DataBase Setup
1. In the db folder, there is a file named schema.sql. This file contains SQL queries that do the following:
    1. id: an auto incrementing int that serves as the primary key.
    2. media_name: a string
    3. viewed: a boolean
    4. personal_rating: DECIMAL
2. Also in the db folder, there is a file named seeds.sql. This file contains sample SQL queries used to populate the media-db table.

## Local DataBase
1. If you are running the application locally, you can create a local database using MySQL Workbench.
2. First make sure to enter your own password and database in the connection.js file.
3. Run the SQL queries provided in the schema.sql file in MySQL Workbench to create the media_db database and the media table.

![schema-example](/images/schema-example.png)

3. Run the SQL queries provided in the seeds.sql file in MySQL Workbench to insert data into the media table that was created.

![seeds-example](/images/seeds-example.png)

4. Refresh your schemas in MySQL Workbench to verify that your queries worked properly.

![db-structure](/images/db-structure.png)

5. Your media table should look something like this:

![media-table-example](/images/media-table-example.png)

## Config Setup
1. Inside the config folder, the connection.js file is used to setup the code to connect Node to MySQL.
2. The connection is then exported.
3. Then, Import (require) connection.js into orm.js
4. The orm.js file creates the methods that will execute the necessary MySQL commands in the controllers.
5. These methods will be used in order to retrieve and store data in the database. These methods follow the basic persistent storage functions for CRUD and consist of:
    1. create
    2. all (read)
    3. update
    4. delete
6. The ORM object is then exported.

## Model Setup
1. Inside the models folder, the media.js file imports orm.js.
2. The ORM is imported to create functions that will interact with the database.
3. The ORM object is then exported.
4. The media object is then exported so the controller can use the database functions.

## Controller Setup
1. Inside the controllers folder, the media_controller.js file imports media and express.
2. Here, all the routes are created with the appropriate logic where required.
3. The router for the app is created and exported.

## View Handlebars Setup
1. Inside the views folder, index.handlebars is the template that Handlebars can render onto.
2. Inside the layouts folder, main.handlebars is setup so that it's able to be used by Handlebars. 

## Step 5 - MVC File Structure
1. After all the correct folders and files are created, the file structure will look something like this:

![mediatrak-file-structure](/images/mediatrak-file-structure.png)

## End
Thank you for using MediaTrak! Please contact me directly if you have any questions or suggestions.

https://github.com/garrettmmoore