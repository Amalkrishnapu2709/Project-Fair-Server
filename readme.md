

NODEJS  SIDE TECHNOLOGY

1.Open source server enviornment-resolving client request
2.Run js outside browser also uses js in server
3.node.js asynchronous programming
4.modules in js:js libraries
    -built in modules: Predefined library
     -http,https,os,url,fs etc
     -require() : to import modules in js file use require('library') method
    -user defined modules :
        -module.exports / exports. : used to export data from a js file 
5.Global Objects/variable node JS
    -without importing we can use a data throughout our code
    -ex: process variable:
        -process.env : enviornment variable - used to share runtime data throughout process
6.Frameworks of node JS
    -Express JS :used in client -server/ event driven application
7.CORS : Cross Origin Resource  Shairing - used to share resources between 2 application in internet.
8.Middleware : used to resolve a task before resolving the client request.


    EXPRESS JS - NODE JS FRAMEWORK

    -steps to build express server
    1.create a folder for server
    2.create package.json file : npm init -y
    3.update scripts in package.json file as "start": "node index.js" instead of "test"
    4.install external packages to build server
        -express,cors,dotenv
        -npm i express cors dotenv
    5.create .env file to add enviornmental variable.
    6.create .gitignore file  to add files tobe ignored.
        -node_modules .env
    7.create index.js file: define server
        -import dotenv cors express
        -create express server
        -use cors in express server 
        -use express.json() middleware in server to parse json data in request 
        -use router in server
        -set up port where we have to run server
        -run the server to listen client request
        -to resolve http request using express
         -express-server.httprequest(path,callback)
        -to setup independent routes for each request in express server
         -create routes folder
          -inside  routes folder create router.js file to define route
          -import express
          -create object for router class of
    8. To run server app:node index.js / nodemon index.js


    MONGODB- DATABASE


    -database are used to store and manipulate data permanently
    -NOSQL Database: structureless DB
    -Data stored as document-Document Oriented DB
        -document is similar as JSON
    -Collection : collection of documents
    -Multiple collections be hold in single db.
    -common commands in mongo db
        -show database -
        -use db-name-shift control to specific db.
        -show collections-display all collections in a db.
        -collection-name.find() - to display all documents in collection
        -collection-name.findOne({key:value}) - to display single document which is in the collection
        -collection-name.insertOne({key:value}) - to insert a single data in collection
        -collection-name.insertMany([{key: value}]) - to insert multiple data in collection
        -collection-name.updateMany([{source},{$set:{target}}]) - to update multiple data in collection
        -collecton-name.updateOne([{source},{$set:{target}}]) - to update single data in collection
        -count() - to display count in collection
        -Querying statements
            -$exists
            -$nin
            -$gt/$lt/gte/lte
            -$eq
            -$and
            -$or
            -$expr
            -$push
            -$pull
            -$lookup(aggregation): perform a left outer join in collection in the same database to filter in documents from the "joined" collection for processing 
            db.collection-name.aggregate([{
                $lookup:{
                            from:<collection to join >
                            localField:<field from the input documents>
                            foreignField:<field from the documents of the "from" collection>
                            as:<output array field>
                        }
            }])



            MONGOOSE-(ODM-object data model for mongodb to nodejs)

            ---------------------------------------------------------

            1. install mongoose: npm install mongoose --save
            2. connect db with nodejs
                -create a DB folder for defining db connection and create connection js file
                -import mongoose
                -connect db via mongoose
                -schema- structure of data  to be stored in db
                    -create object for mongoose.Schema class
                    -Schema types
                -Model : collection of documents
                    -mongoose.model(model-name,schema)
                    -Node app will communicate with model instead of mongodb directly


                ----------------------------------------
                  JWT - json web token (Authorization)
                ----------------------------------------

                1. install jwt :  npm install jsonwebtoken
                2. import library where you want to use
                3.to generate token
                    -jwt.sign(payload, secretOrPrivateKey, [options,callback])
                    payload - data to be stored in token
                    secretOrPrivateKey - similar to password/ secret data
                    