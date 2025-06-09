import * as fs from 'fs';
import * as child_process from 'child_process';

const execSync = child_process.execSync;

const commitDate = execSync('git log -1 --format=%cd').toString().trim();
const content = `export const LAST_UPDATE = "${commitDate}";\n`;

fs.writeFileSync('./generated/lastUpdate.js', content);
