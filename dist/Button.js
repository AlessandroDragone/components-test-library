"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeWeb = require("react-native-web");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Button(props) {
  var handleClick = function handleClick() {
    if (!!props.callback) {
      props.callback();
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNativeWeb.TouchableOpacity, {
    onPress: handleClick
  }, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.View, null, /*#__PURE__*/_react.default.createElement(_reactNativeWeb.Text, null, props.label)));
}
Button.defaultProps = {
  label: "Click"
};
var _default = Button;
exports.default = _default;