'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _install = require('./install');

var _install2 = _interopRequireDefault(_install);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// es6 的模块化方案


_commander2.default.command('install').description('install template').alias('i').action(function () {
  (0, _install2.default)();
});
console.log('program');

_commander2.default.parse(process.argv);