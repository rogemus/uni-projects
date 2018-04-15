## Prerequisites
 - `Node.js` (>=`9.10`), 
 - `npm` version >=`5.5`

## Installation
```
sudo npm install
```

## Configuration 
Open `app.js` and update config variable: 
```
const config = {
	connectionOptions: {
		host: 'ftp host', 
		//ftp host e.g 'students.wmi.amu.edu.pl'
		port: 'ftp port', 
		//ftp port e.g '22'
		user: 'ftp user', 
		//ftp user e.g 's12345'
		password: 'ftp user pass' 
		// ftp user password e.g 'password'
	},
	inputFolder: '/local folder with files to backup', 
	// Path to folder which should be watched. Files from this folder will be copied to ftp server.
	outputFolder: '/remote folder on ftp' 
	// Destination of copied files. In this folder files will be saved on ftp.
};
```

## Creating service 
In terminal run: 
```
forever-service install bskBackup
```

## Run at startup 
To run the service at the startup, open the file `/etc/rc.local` :
```
sudo nano /etc/rc.local
```

And add to the end the following line:
```
sudo service bskBackup start
```