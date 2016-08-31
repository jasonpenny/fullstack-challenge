
# Full Stack Code Challenge


## The Challenge
The challenge is to create a dashboard (web or otherwise) to view readings (temperature, air quality, humidity) for all devices in the system.

#### Details
We're going to create an administration interface where we can browse all the data in the system (Devices and Readings), as well as create new Devices. In the Canary system, all devices receive a name; either via a list of pre generated names, or via the user creating a unique name.

The application should start at a list of Devices. You can structure the rest of the application in whatever way makes most sense to you to be able to manage the data.

Some things it should be able to to:
- Show the current devices in the system.
- Show average temperature, air quality, and humidity from all devices in the system.
- Show the min/max average temperature, air quality, and humidity in the system.
- Show graphs for temperature, air quality, and humidity readings for a specific device.
- Allow someone to create a new Device.
- Allow someone to delete a Device.
- Allow someone to create new readings data for a Device. (how this works is up to you. maybe its a single reading? maybe its bulk creation?)

Notes
* Authenication is not strictly required.
* None of the data in this system is real customer data.

Hint: we love testing


## The API
The API root is https://fullstack-challenge-api.herokuapp.com

### Devices
**Example call**:
```
curl -H "Content-Type: application/json" --data '{"name": "Todd's Garage"}' https://fullstack-challenge-api.herokuapp.com/devices
{
  name: "Todd's Garage",
  createdAt: "2016-08-29T05:59:47.758Z",
  updatedAt: "2016-08-29T05:59:47.759Z",
  id: "rJh8k8Zs"
}
```
**Full API:**

GET /devices
- get all devices

GET /devices/count
- get a count of all devices

GET /devices/:id
- get a specific device

GET /devices/:id/readings
- get all readings for a device

POST /devices
- create new device
- required fields:
	- name (string)

DELETE /devices/:id
- delete a device

----------

### Readings

**Full API**:

GET /readings
- gets all readings in the system

GET /readings/:id
- gets a specific reading

POST /readings
- creates new readings
- required fields:
	- type (string), one of ['temperature', 'humidity', 'airquality']
	- value (number)
	- deviceId (string)
- optional fields:
	- createdAt (date)


##Misc

### Bonus Points
- use of Angular (or backbone, react, ember, etc.)


### Questions
Feel free to make any assumptions you want along the way, just document those in the README. If there is something you'd like an answer to, send an email to `todd@canary.is`.

### When You're Done
Share your GitHub repo with `madtimber` and `grelas`, and send an email to `todd@canary.is`. Make sure any setup instructions to run your solution (and tests) locally are included in the README.
