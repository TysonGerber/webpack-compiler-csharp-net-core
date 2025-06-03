const os = require('os');
const interfaces = os.networkInterfaces();
console.log('\n🔍 Available Network Interfaces:');
for (const name in interfaces) {
    for (const iface of interfaces[name]) {
        if (iface.family === 'IPv4' && !iface.internal) {
            console.log(` - ${name}: ${iface.address}`);
        }
    }
}
console.log('🌐 Expected BrowserSync URL: https://webpackcompiler.local:3000\n');