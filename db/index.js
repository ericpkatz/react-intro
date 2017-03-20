const conn = require('./conn');

const sync = ()=> conn.sync({ force: true});

const User = require('./User');

const seed = ()=> {
  const names = ['moe', 'larry', 'curly'];
  return sync()
    .then(()=> Promise.all(names.map( name => User.create({ name })))) 
}

module.exports = {
  sync,
  seed,
  models: {
    User
  }
};

