## Time service with JS for Unity

Api to get the current time in HH:mm:ss for Unity Proyects

### Installation

Use [node js](https://nodejs.org/en/) to install.

```bash
npm install
```

### Usage

Manually start with the comand:

```bash
node src/version1.js
```

If everything it's okey, you'll see this log in the terminal:

Service running at http://localhost:/8080

Then, you can test the service opening the unity sample scene which is located in Assets/Scenes/sample.unity.

If something go wrong testing the scene, follow this steps:

1. Before test the unity scene, you have to asociate HourController.cs in the UI element that you want to trigger the hour service.

2. In this example, associate with HourController on the OnClick function of the button and select the method SetHour() of HourController.

3. Also, the HourManager object (or any object you use) need the Text object to know which element will display the hour.

You can test version 2 by runing: 

```bash
node src/version2.js
```

Also, change url variable of HourController.cs to localhost:8081.

Then, you can test the service with the unity sample scene!

### Configuration for ARM64

This proyect is configured for ARM64 but if something go wrong, follow this steps:

1. In the unity project go File -> Build Settings... Select Platform Android -> Player Settings... -> Player

2. Then, change in Configuration Scripting Backend to IL2CPP. Now you can check ARM64 in target architectures!

### License
[MIT](https://choosealicense.com/licenses/mit/)
