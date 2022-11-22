"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _buttonStyle = _interopRequireDefault(require("../styles/buttonStyle"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CustomButton(props) {
  var handleClick = function handleClick() {
    if (!!props.callback) {
      props.callback();
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: _buttonStyle.default.button,
    onPress: handleClick
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _buttonStyle.default.text
  }, props.label));
}
CustomButton.defaultProps = {
  label: "Click"
};
var _default = CustomButton;
exports.default = _default;