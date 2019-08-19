# Timesheet rewritten in Angular8 and Bootstrap 4

Simple Dashboard Admin App built using Angular 8 and Bootstrap 4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.0.

### Introduction

Provides fast, reliable and extensible starter for the development of Angular projects.

`timesheet` provides the following features:

*   Developed using boostrap-v4.0.0
*   angular-v8.0.0
*   angular/cli-v8.0.0
*   [ng-bootstrap-v4.0.0](https://github.com/ng-bootstrap/)
*   [ngx-translate-v11.0.0](https://github.com/ngx-translate)
*   Following the best practices.
*   Ahead-of-Time compilation support.
*   Official Angular i18n support.
*   Production and development builds.
*   Tree-Shaking production builds.

### How to start

**Note** that this seed project requires **node >=v8.9.0 and npm >=4**.

In order to start the project use:

```bash
$ git clone https://github.com/rathinavel56/timesheet.git
$ cd timesheet
# install the project's dependencies
$ npm install
# watches your files and uses livereload by default run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ npm start
# prod build, will output the production application in `dist`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build
```

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Useful Commands
docker run -it -d --name mongodb -p 127.0.0.1:27017:27017 mvertes/alpine-mongo
sudo kill `sudo lsof -t -i:3001`
sudo kill `sudo lsof -t -i:27017`
docker-compose build --no-cache
docker-compose up
docker stop 74d35f6b5e72
docker rmi $(docker images -a -q)
docker ps -a

docker rm $(docker ps -a -f status=exited -q)

sudo service mongod start
sudo service mongod stop

docker rmi $(docker volume -a -q)
docker run -it -d --name mongodb --network docker_demo -p 27117:27117 -v mongodata:/data/db mvertes/alpine-mongo --port 27117

npm install -g -f angular-cli
netstat -a -n | find "27017"

mongod --journal --storageEngine=mmapv1 --dbpath D:/rathinavel_workspace/db