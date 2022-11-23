"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeMediaQuery = _interopRequireDefault(require("react-native-media-query"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function CustomButton(props) {
  var handleClick = function handleClick() {
    if (!!props.callbackLog) {
      props.callbackLog(_reactNative.Platform.OS);
    }
    if (!!props.callback) {
      props.callback();
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: styles.button,
    dataSet: {
      media: ids.button
    },
    onPress: handleClick
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: styles.text,
    dataSet: {
      media: ids.text
    }
  }, props.label));
}
CustomButton.defaultProps = {
  label: "Click"
};
var _StyleSheet$create = _reactNativeMediaQuery.default.create({
    button: {
      backgroundColor: "#2F4858",
      border: "none",
      borderRadius: "30px",
      paddingHorizontal: "35px",
      paddingVertical: "15px",
      '@media (min-width: 1000px)': {
        paddingHorizontal: "40px",
        paddingVertical: "20px"
      }
    },
    text: {
      fontWeight: "bold",
      fontFamily: "combo",
      fontSize: "20px",
      color: "white",
      '@media (min-width: 1000px)': {
        fontSize: '20px'
      }
    }
  }),
  ids = _StyleSheet$create.ids,
  styles = _StyleSheet$create.styles;
var _default = CustomButton;
exports.default = _default;