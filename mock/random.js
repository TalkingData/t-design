const Mock = require('mockjs');

module.exports = Mock.mock({
  'list|1': [{
    'id|+1': 1,
    'number': Mock.Random.integer(10, 10000),
    'region': Mock.Random.region(),
    'city': Mock.Random.city(),
    'zipcode': Mock.Random.zip(),
    'ip': Mock.Random.ip(),
    'host': Mock.Random.url('http'),
    'time': Mock.Random.time('HH:mm:ss'),
    'date': Mock.Random.date('yy-MM-dd'),
  }],
});