import { readdirSync } from 'fs';
import { basename } from 'path';

let commons = {};

readdirSync('./lib').forEach((filename) =>{
  let name = basename(filename, '.js');
  commons[name] = require(`./lib/${filename}`);
});

export default commons;