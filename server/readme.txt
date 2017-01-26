https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

   - app/
    ----- models/
    ---------- bear.js  // our bear model
    - node_modules/     // created by npm. holds our dependencies/packages
    - package.json      // define all our node app and dependencies
    - server.js         // configure our application and create routes

    What do these packages do? express is the Node framework. 
    mongoose is the ORM we will use to communicate with our MongoDB database. 
    body-parser will let us pull POST content from our HTTP request 
    so that we can do things like create a bear.


    Route	HTTP Verb	Description
    /api/bears	GET	Get all the bears.
    /api/bears	POST	Create a bear.
    /api/bears/:bear_id	GET	Get a single bear.
    /api/bears/:bear_id	PUT	Update a bear with new info.
    /api/bears/:bear_id	DELETE	Delete a bear.