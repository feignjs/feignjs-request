
var Args = require('args-js');
var request = require('request');
function createRequestJsOptions(baseUrl, requestOptions, parameters){
	var options  = Args([
			{ method: Args.STRING | Args.Optional, _default: 'GET' },
			{ uri: Args.STRING | Args.Required}
		], [requestOptions]);
	options.qs = parameters;
	options.baseUrl = baseUrl;
	return options;
}


function FeignRequestClient(){
	var args  = Args([
			{ request: Args.FUNCTION | Args.Optional }
		], arguments);
	
	this.requestFn = args.request;
	if (this.requestFn == null){
		this.requestFn = request;
	};
}

FeignRequestClient.prototype.request =  function(request){
	var options = createRequestJsOptions(request.baseUrl, request.options, request.parameters);
	var _this = this;
	var promise = new Promise(function(resolve, reject){
		_this.requestFn(options, function(error, response, body){
			if (error) 
				return reject(error);
			return resolve(body);
		});
	});
	return promise;
};



module.exports = FeignRequestClient;