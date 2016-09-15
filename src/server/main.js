import path from 'path';  
import express from 'express';  
import webpack from 'webpack';  
import webpackMiddleware from 'webpack-dev-middleware';  
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './../../webpack.config.js';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;

const app = express();  
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
	contentBase: 'src',
	stats: {
		colors: true,
		hash: false,
		timings: true,
		chunks: false,
		chunkModules: false,
		modules: false
	}
});

app.use(middleware);  
app.use(webpackHotMiddleware(compiler)); 
app.use(express.static(__dirname + '/static'));
app.get('*', function response(req, res) {  
	res.sendFile('/index.html');
});

app.listen(port, function onStart(err) {
	if (err) {
		console.log(err);
	}
	console.log('Listening on port %s. Open up localhost:3000 in your browser.');
});