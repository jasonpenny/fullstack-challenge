# Full Stack Code Challenge

This is a webapp that displays a dashboard to view and modify devices and readings using an external API. It is written in AngularJS 1.5 and requires node/npm.

## Setup
npm is used to download libraries that this code depends on, so the first step is to install the dependencies with npm:

```
npm install
```

The external API at https://fullstack-challenge-api.herokuapp.com does not allow CORS, so angular cannot use the API directly. Node is used to serve the static html files and to proxy API calls, so first run node:

```
node index.js
```

Then visit  and visit http://localhost:3000/ in a browser

### Assumptions
The code assumes that the API is running and available. This does not have a lot of error handling.

The challenge description says that the user should create a unique name for new devices, but the API does not return an error when creating a new device that matches an existing one, so any validation for that is not implemented.

## TODO
* After submitting a new reading, the code currently just calls `console.log()`, it should redirect the page or clear the form to enter another reading.
* Add min/max/avg across all readings on the home page
* Add min/max/avg across all readings for a device on the device page
* Add tests
