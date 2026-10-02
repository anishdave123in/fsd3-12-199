# NPM Projects

1. go to project folder (by cd)
2. type `npm init -y`
3. open package.json
4. update `type:module`
5. install nodemon `npm i nodemon -D`
6. update script in package.json

```
script{
    "start":"node app.js",
    "dev": "nodemon prg7.js"
}
```

7. add node_modules to .gitignore
8. to run use `npm run dev`
9. module mai function ke through run hoga aur commonjs mai oops ke through

## REST API(Representational State Transfer Application Programming Interface)
- majority backend server return only data not html file
- REST API uses (get,post,put,patch,delete) method to communicate with client
- any browser can check only get method
- for other method type we use third party API Tester like postman, thunder client, echo api etc

//done
### GET

### run "npm i" to include all required contents
- then use npm run dev

###### Request Type
1. Get - Get all,get by id   
 Get: /api/products (it shows all product at once)
 Get: /api/products/101(It shows only one product whose id is 101)
2. Post- /api/products and data will be shared by eco apibody selection
3. Put



* Get request - get all or get by id
* Post request - to add product (enter in body)
* 
*
*