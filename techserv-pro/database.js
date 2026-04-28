const fs   = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'techserv.json');

function load() {
  if (!fs.existsSync(DB_FILE)) {
    const initial = { contacts: [], appointments: [] };
    fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2));
    return initial;
  }
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
}

function save(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

function insert(table, record) {
  const data = load();
  const id   = data[table].length
    ? data[table][data[table].length - 1].id + 1
    : 1;
  const row  = { id, ...record, created_at: new Date().toISOString() };
  data[table].push(row);
  save(data);
  return row;
}

function all(table) {
  return load()[table];
}

function close() {}

module.exports = { insert, all, close };
