"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CustomButton(props) {
  var handleClick = function handleClick() {
    if (!!props.callback) {
      props.callback();
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: handleClick
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, props.label)));
}
CustomButton.defaultProps = {
  label: "Click"
};
var _default = CustomButton;
exports.default = _default;