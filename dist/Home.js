"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _CustomButton = _interopRequireDefault(require("./CustomButton"));
var _CustomInputBox = _interopRequireDefault(require("./CustomInputBox"));
var _reactResponsive = require("react-responsive");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var arrayPen = ["Offri da bere a tutti", "Bevi 2 shot di fila", "Fai 10 piegamenti", "Mangia un peperoncino intero", "Dire uno scioglilingua", "Contare a ritroso da 980 a 100", "Salta la corda per 2 minuti", "Mimare un proverbio", "Imita il verso di 3 animali"];
function Home(props) {
  var isDesktop = (0, _reactResponsive.useMediaQuery)({
    minWidth: 992
  });
  var _useState = (0, _react.useState)({
      penitence: arrayPen[0]
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var username = '';
  var setUsername = function setUsername(e) {
    username = e;
  };
  var setPenitence = function setPenitence() {
    var rand = Math.floor(Math.random() * arrayPen.length);
    if (state.penitence !== arrayPen[rand]) {
      setState({
        penitence: arrayPen[rand]
      });
    } else {
      setPenitence();
    }
  };
  var goToRanking = function goToRanking() {
    if (!!props.callbackRank) {
      props.callbackRank();
    }
  };
  var goToPlay = function goToPlay() {
    if (!!props.callbackPlay) {
      props.callbackPlay();
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style.header
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: 'Classifica',
    callback: goToRanking,
    isDesktop: isDesktop
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: style.title
  }, "Sasso Carta Forbice"), /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: props.image,
    style: style.image
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: isDesktop ? [style.inputContainer, desktopStyle.inputContainer] : style.inputContainer
  }, /*#__PURE__*/_react.default.createElement(_CustomInputBox.default, {
    placeholder: 'Inserisci',
    callbackChange: setUsername,
    isDesktop: isDesktop
  }), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Gioca",
    callback: goToPlay,
    isDesktop: isDesktop
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: style.penitence
  }, state.penitence), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Genera penitenza casuale",
    callback: setPenitence,
    isDesktop: isDesktop
  })));
}
var style = _reactNative.StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 1,
    top: 20,
    right: 25,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  container: {
    width: '90%',
    marginVertical: 0,
    marginHorizontal: 'auto',
    gap: 30
  },
  title: {
    marginTop: 50,
    paddingTop: 40,
    color: '#3c5070',
    fontSize: 40
  },
  inputContainer: {
    width: '100%',
    marginVertical: 0,
    marginHorizontal: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    overflow: 'hidden'
  },
  penitence: {
    color: 'white',
    fontSize: 25
  },
  image: {
    width: 400,
    height: 400
  }
});
var desktopStyle = _reactNative.StyleSheet.create({
  inputContainer: {
    flexDirection: 'row'
  }
});
var _default = Home;
exports.default = _default;