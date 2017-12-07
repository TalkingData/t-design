const Mock = require('mockjs');

module.exports = Mock.mock({
  'list|1-10': [{
    'id|+1': 1,
    'team|1-3': [{
      first: '@FIRST',
      last: '@LAST',
      full: '@FIRST @LAST'
    }]
  }],
});