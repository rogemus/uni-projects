const fs = require('fs');
const glob = require('glob');
const watch = require('node-watch');
const Client = require('ssh2-sftp-client');
const sftp = new Client();

const config = {
	connectionOptions: {
		host: 'ftp host',
		port: 'ftp port',
		user: 'ftp user',
		password: 'ftp user pass'
	},
	inputFolder: './local folder with files to backup',
	outputFolder: '/remote folder on ftp'
};

function sendAll() {
	glob(`${config.inputFolder}/**/*.*`, function(er, files) {
		files.forEach((file) => {
			saveFiles(file);
		});
	});
}

function watchDir(path) {
	watch(path, {recursive: true},
		(evt, name) => {
			if (evt === 'update' && !name.endsWith('___')) {
				saveFiles(name);
			}
		});
}

function saveFiles(file) {
	const readStream = fs.createReadStream(`./${file}`);
	const paths = file.split('/');
	const filename = paths.pop();

	console.log('file saved', filename);
	sftp.put(readStream, `${config.outputFolder}${filename}`);
}

function connect() {
	sftp.connect(config.connectionOptions)
		.then(() => {
			console.log('connection ready');
			sendAll();
			watchDir(config.inputFolder);
		})
		.catch((err) => {
			console.log(err, 'catch error');
		});
}

function main() {
	connect();
}

main();