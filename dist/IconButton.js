"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconButton;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _gi = require("react-icons/gi");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function IconButton(props) {
  var handleClick = function handleClick() {
    if (!!props.callback) {
      props.callback(props.value);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: handleClick,
    style: style.container
  }, props.children);
}
var style = _reactNative.StyleSheet.create({
  container: {
    marginHorizontal: 10
  }
});