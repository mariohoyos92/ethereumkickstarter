"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

typeof window !== "undefined" && (0, _typeof3.default)(window.web3) !== undefined ? web3 = new _web2.default(window.web3.currentProvider) : web3 = new _web2.default(new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/ZT6L5w5ms63zxXeeoMBu"));

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJ1bmRlZmluZWQiLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQUksWUFBSjs7QUFFQSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsc0JBQU8sT0FBTyxBQUFkLFVBQXVCLEFBQXhELFlBQ0ssT0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFEWixtQkFFSyxPQUFPLEFBQUksQUFBSixrQkFDTixJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ0UsQUFERixBQURNLEFBRlosQUFRQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXJpb2Fub3JnYW5pc20vRG9jdW1lbnRzL0hhY2tpbmcvdWRlbXlFdGhlcmV1bS9raWNrc3RhcnQifQ==