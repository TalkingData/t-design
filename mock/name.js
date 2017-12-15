const Mock = require('mockjs');

module.exports = Mock.mock({
  'list|1-10': [{
    'id|+1': 1,
    'name': {
      first: '@FIRST',
      last: '@LAST',
      full: '@FIRST @LAST'
    }
  }],
});