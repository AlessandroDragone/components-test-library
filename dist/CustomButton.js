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
    style: style.button,
    onPress: handleClick
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: style.text
  }, props.label));
}
CustomButton.defaultProps = {
  label: "Click"
};
var style = _reactNative.StyleSheet.create({
  button: {
    backgroundColor: "#2F4858",
    border: "none",
    borderRadius: "30px",
    paddingHorizontal: "35px",
    paddingVertical: "15px"
  },
  text: {
    fontWeight: "bold",
    fontFamily: "combo",
    fontSize: "20px",
    color: "white"
  }
});
var _default = CustomButton;
exports.default = _default;