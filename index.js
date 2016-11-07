var Built = require('built-extension-sdk')

// Initiate application
var app = Built.App('blt1273bdbe69c0d332')
.setHost('localhost')
.setProtocol('http')
.setPort(8000)
.setMasterKey('blta59b96c704a15b55')

var extensionSDK = app.Extension({
	extension_key	 : 'blt_ext_default',
	static         : __dirname + '/client',
	routes         : require('./server/routes')
})

return extensionSDK.start()
.then(function (){
	console.log("Server deployed")
})


