https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
https://codeforgeek.com/2014/09/manage-session-using-node-js-express-4/


   - download MongoDB: 
        - https://www.mongodb.com/download-center?jmp=docs&_ga=1.168780129.1720011928.1485511740#community
        - https://docs.mongodb.com/manual/mongo/
        - sudo mkdir -p /data/db
        - do: cd {mongoFolder}/ 
        - Firstly run: ./bin/mongod  with admin privilege
        - Secondly run: ./bin/mongo with admin privilege. In this instance you can run MONGO INSTRCTIONSUS 
        - Connect to db test by shell: mongo ds131729.mlab.com:31729/node-db-test -u node -p node
        - Tips: if you have problem of connection try to update [mongoose] with latest version
   - download PostMan
        - Tip: to send POST message use the option BODY x-www-form-urlencoded"
        - Tip: http://stackoverflow.com/questions/24543847/req-body-empty-on-posts
   
   - app/
    ----- models/
    ---------- task.js  // our task model
    - node_modules/     // created by npm. holds our dependencies/packages
    - package.json      // define all our node app and dependencies
    - server.js         // configure our application and create routes

    What do these packages do? express is the Node framework. 
    mongoose is the ORM we will use to communicate with our MongoDB database. 
    body-parser will let us pull POST content from our HTTP request 
    so that we can do things like create a task.


    Route	HTTP Verb	Description
    /api/tasks	GET	Get all the tasks.
    /api/tasks	POST	Create a task.
    /api/tasks/:task_id	GET	Get a single task.
    /api/tasks/:task_id	PUT	Update a task with new info.
    /api/tasks/:task_id	DELETE	Delete a task.




    #Model Entities
    - Task
        - id
        - title
        - description
        - startDate
        - endDate
        - assigneId
    - User
        - id
        - name
        - email
        - passoword