'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Effect = undefined;

var _Modal = require('./Modal');

var _loop = function _loop(_key2) {
  if (_key2 === "default") return 'continue';
  Object.defineProperty(exports, _key2, {
    enumerable: true,
    get: function get() {
      return _Modal[_key2];
    }
  });
};

for (var _key2 in _Modal) {
  var _ret = _loop(_key2);

  if (_ret === 'continue') continue;
}

var _Effect2 = require('./Effect');

var _Effect = _interopRequireWildcard(_Effect2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Effect = exports.Effect = _Effect;