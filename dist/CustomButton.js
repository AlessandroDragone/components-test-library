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
    disabled: props.disable,
    style: [mobile.button, props.disable && mobile.disable],
    onPress: handleClick
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.isDesktop ? [mobile.text, desktopStyle.text] : mobile.text
  }, props.label)));
}
CustomButton.defaultProps = {
  label: "Click",
  disable: false
};
var mobile = _reactNative.StyleSheet.create({
  button: {
    backgroundColor: "#2F4858",
    border: "none",
    borderRadius: 30,
    paddingHorizontal: 35,
    paddingVertical: 15
  },
  disable: {
    opacity: 0.5
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "white",
    textAlign: 'center'
  }
});
var desktopStyle = _reactNative.StyleSheet.create({
  text: {
    fontSize: 20
  }
});
var _default = CustomButton;
exports.default = _default;