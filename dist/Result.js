"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _CustomButton = _interopRequireDefault(require("./CustomButton"));
var _reactResponsive = require("react-responsive");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Result(props) {
  var isDesktop = (0, _reactResponsive.useMediaQuery)({
    minWidth: 992
  });
  var goToRank = function goToRank() {
    if (!!props.callbackRank) {
      props.callbackRank();
    }
  };
  var goToPlay = function goToPlay() {
    if (!!props.callbackPlay) {
      props.callbackPlay();
    }
  };
  var goToHome = function goToHome() {
    if (!!props.callbackHome) {
      props.callbackHome();
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.header
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: 'Classifica',
    callback: goToRank,
    isDesktop: isDesktop
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, props.win ? /*#__PURE__*/_react.default.createElement(_reactNative.Image, null) : /*#__PURE__*/_react.default.createElement(_reactNative.Image, null), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, props.win ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Hai vinto!") : /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Hai perso penitenza"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Risultati"))), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: 'Gioca ancora',
    callback: goToPlay
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: 'Torna alla home',
    callback: goToHome
  })));
}
var mobile = _reactNative.StyleSheet.create({
  header: {
    position: 'absolute',
    top: 20,
    right: 25,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});
var desktop = _reactNative.StyleSheet.create({});
var _default = Result;
exports.default = _default;