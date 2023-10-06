

                               EMS-Frontend

1.create project -npx create-react-app ems-frontend
2.open in vs code 
3.remove unnecessary files and run the project -> npm start
6.install 3rd party libraries
    fontawesome - paste cdn link in index.js
    google fonts - @import into index.css
    mdbootstrap ->    npm i mdb-react-ui-kit        
                - index.js -> import 'mdb-react-ui-kit/dist/css/mdb.min.css';  

7.Create components
  -Admin.js
  -Add.js
  -View.js
  -Edit.js
  -PagenotFound.js

8.path setup
  - install react-router-dom
       ->npm i react-router-dom

    In index.js
           <BrowserRouter>
           <App/>  
           <BrowserRouter/>
    In app.js
          import {Routes,Router}
          
        