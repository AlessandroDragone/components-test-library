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
    minWidth: 650
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
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.header
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: 'Classifica',
    callback: goToRank,
    isDesktop: isDesktop
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.result
  }, props.win ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.imgContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: isDesktop ? [mobile.img, desktop.img] : mobile.img,
    source: props.imgWin,
    resizeMode: 'contain'
  })) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.imgContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: isDesktop ? [mobile.img, desktop.img] : mobile.img,
    source: props.imgLose,
    resizeMode: 'contain'
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.winLoseContainer
  }, props.win ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: isDesktop ? [mobile.text, desktop.text] : mobile.text
  }, "Hai vinto!") : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: isDesktop ? [mobile.text, desktop.text] : mobile.text
  }, "Hai perso!"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: isDesktop ? [mobile.text, desktop.text] : mobile.text
  }, props.penitence)), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: isDesktop ? [mobile.text, desktop.text] : mobile.text
  }, props.username, " - CPU: ", props.userScore, " - ", props.cpuScore))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: isDesktop ? [mobile.buttons, desktop.buttons] : mobile.buttons
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: 'Gioca ancora',
    callback: goToPlay
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: 'Torna alla home',
    callback: goToHome
  })));
}
var mobile = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: "#c85260"
  },
  header: {
    position: 'absolute',
    top: 20,
    right: 20,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  result: {
    width: '50%',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 0,
    marginHorizontal: 'auto',
    marginTop: 120,
    textAlign: 'center'
  },
  imgContainer: {
    width: '100%',
    marginTop: 75
  },
  img: {
    height: 200,
    width: '100%'
  },
  winLoseContainer: {
    textAlign: 'center'
  },
  text: {
    color: '#3c5070',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowOffset: {
      width: 1,
      height: 3
    },
    textShadowColor: '#ffe4e588',
    margin: 0,
    marginTop: 10
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50
  }
});
var desktop = _reactNative.StyleSheet.create({
  img: {
    height: 300
  },
  text: {
    fontSize: 45,
    marginTop: 30
  },
  buttons: {
    marginTop: 120,
    justifyContent: 'center',
    gap: 50
  }
});
var _default = Result;
exports.default = _default;