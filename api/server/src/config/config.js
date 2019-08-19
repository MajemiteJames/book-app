require('dotenv').config();


module.exports = {

  // If using onine database
   'development': {
     use_env_variable: 'DATABASE_URL'
   },

  // development: {
  //   database: 'books',
  //   username: 'steven',
  //   password: null,
  //   host: '127.0.0.1',
  //   dialect: 'postgres'
  // },
  'test': {
    use_env_variable: 'DATABASE_TEST_URL'
  },

  // test: {
  //   database: "zpeyuvcd",
  //   username: "zpeyuvcd",
  //   password: "8uE2XdVhhwW1oWMxY8zbtNTJpk1PdEZC",
  //   host: "raja.db.elephantsql.com",
  //   dialect: "postgres"
  // },

  'production': {
    use_env_variable: 'DATABASE_URL'
  }
};