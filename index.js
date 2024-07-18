var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'cadviewer-conversion-server-service',
  description: 'cadviewer-conversion-server-service',
  script: 'D:\\cadviewer-conversion-server\\CV_service.js',
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
  //, workingDirectory: '...'
  //, allowServiceLogon: true
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
svc.install();

//for deinstallation
// svc.on('uninstall',function(){
//     console.log('Uninstall complete.');
//     console.log('The service exists: ',svc.exists);
//   });

// svc.uninstall();