Boilerplate Meteor/React/SCSS

1: meteor create <app name>
2: cd <app name>
3: meteor npm install
4: meteor npm install --save react react-dom
5: mv client/main.js client/main.jsx
6: mkdir -p imports/{api,ui/{Header,Nav/{NavLogo,NavBtn},Footer},startup}
7: meteor add fourseven:scss kadira:flow-router
