# Interview Scheduler

Interview Scheduler is a complex application that can create appointments in a selected time slot and store them in a database. It gives you a list of available interviewers to choose from, and calculates available timeslots based on a current count of booked appointments. It also gives you the option to edit your appointment details or delete it entirely.  

## Final Product

!["create"](https://github.com/nicholasrwx/scheduler/blob/master/docs/create.png?raw=true)

!["save"](https://github.com/nicholasrwx/scheduler/blob/master/docs/save.png?raw=true)

!["booked"](https://github.com/nicholasrwx/scheduler/blob/master/docs/booked.png?raw=true)

!["confirm"](https://github.com/nicholasrwx/scheduler/blob/master/docs/confirm.png?raw=true)

!["delete"](https://github.com/nicholasrwx/scheduler/blob/master/docs/delete.png?raw=true)

## Getting Started

1. Fork this repository, then clone your fork of this repository on your LOCALHOST machine.
2. Install dependencies using the `npm install` command.
3. Fork the scheduler-api repository, then clone this repository on your VM.
4. Follow the README.md instructions to create and seed the database on your VM.
5. Run scheduler with `npm start`, and scheduler-api with `npm start`  
6. The app will run on <http://localhost:8000/>.
7. The api will run on <http://localhost:8001/>.
4. Go to <http://localhost:8000/> in your browser, to view the app if it doens't open automatically.


## Dependencies

 axios 0.21.1
 classnames 2.2.6
 normalize.css 8.0.1
 react 16.9.0
 react-dom 16.9.0
 react-scripts 3.0.0
 babel-loader 8.0.5
 node-sass 4.14.0


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
