/**
 * COMMANDS
 * node index.js
 * node index.js help
 * node index.js show
 * node index.js add <task>
 * node index.js delete <id>
 * node index.js edit <id> <task>
 * node index.js changeStatus
 *
 */

const command = process.argv[2];
const params = process.argv.slice(3);

console.log(command, params);
