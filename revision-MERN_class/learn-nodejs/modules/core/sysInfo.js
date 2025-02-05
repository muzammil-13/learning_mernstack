const os=require('os')

const uptime=(os.uptime()/60).toFixed(2)

console.log(`Os platform: ${os.platform()}`)
console.log(`CPU architecture: ${os.arch()}`)
console.log(`System uptime: ${uptime}`)