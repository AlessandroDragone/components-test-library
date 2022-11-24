"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _IconButton = _interopRequireDefault(require("./IconButton"));
var _reactResponsive = require("react-responsive");
var _CustomButton = _interopRequireDefault(require("./CustomButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var lastIAPlays = [];
var res = [["p", "w", "l"], ["l", "p", "w"], ["w", "l", "p"]];
function Play(props) {
  var IAinput = (0, _react.useRef)(null);
  var stack = [props.paper, props.scissor, props.rock];
  var _useState = (0, _react.useState)({
      cpuPoint: 0,
      playerPoint: 0,
      playerChoice: null,
      resultMessage: "",
      cpuIconChoice: null,
      playerIconChoice: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var isDesktop = (0, _reactResponsive.useMediaQuery)({
    minWidth: 650
  });
  function handleChoice(e) {
    console.log(e);
    setState(_objectSpread(_objectSpread({}, state), {}, {
      playerChoice: e
    }));
  }
  function handleIAPlay() {
    var local_play = Math.floor(Math.random() * 3);
    if (lastIAPlays.length < 2) {
      lastIAPlays.push(local_play);
      IAinput.value = local_play;
      return local_play;
    } else {
      if (local_play === lastIAPlays[0] && lastIAPlays[0] === lastIAPlays[1]) {
        return handleIAPlay(local_play);
      } else {
        lastIAPlays.shift();
        lastIAPlays.push(local_play);
        IAinput.value = local_play;
        return local_play;
      }
    }
  }
  function confirmChoice() {
    var IAchoice = handleIAPlay();
    var result = res[IAchoice][state.playerChoice];
    var playerPoint = state.playerPoint;
    var cpuPoint = state.cpuPoint;
    var message = "";
    switch (result) {
      case "w":
        playerPoint++;
        message = "Hai vinto!";
        break;
      case "l":
        cpuPoint++;
        message = "Hai perso!";
        break;
      default:
        message = "Pareggio!";
        break;
    }
    console.log(state.playerChoice, IAchoice, result);
    setState(_objectSpread(_objectSpread({}, state), {}, {
      cpuIconChoice: stack[IAchoice],
      playerIconChoice: stack[state.playerChoice],
      resultMessage: message,
      playerPoint: playerPoint,
      cpuPoint: cpuPoint,
      playerChoice: null
    }));
  }
  (0, _react.useEffect)(function () {
    var result = {
      cpu: state.cpuPoint,
      playerPoint: state.playerPoint
    };
    if (state.cpuPoint === 3 || state.playerPoint === 3) {
      console.log(result);
      props.callbackResult(result);
    }
  }, [state.playerPoint, state.cpuPoint]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: style.title
  }, "Sasso Carta Forbice"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [style.text, style.score]
  }, "Punteggio: ", props.username, " ", state.playerPoint, " - ", state.cpuPoint, " CPU"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: style.text
  }, "Scegli la tua giocata:"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style.iconContainer
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    isDesktop: isDesktop,
    value: 0,
    callback: handleChoice
  }, props.paper), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    isDesktop: isDesktop,
    value: 1,
    callback: handleChoice
  }, props.scissor), /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    isDesktop: isDesktop,
    value: 2,
    callback: handleChoice
  }, props.rock)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style.button
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "Conferma",
    callback: confirmChoice,
    disable: state.playerChoice !== null ? false : true
  })), !!state.playerIconChoice && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style.resultContainer
  }, state.playerIconChoice, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style.iconRotated
  }, state.cpuIconChoice)), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [style.text, style.score]
  }, state.resultMessage)));
}
var style = _reactNative.StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#c85260"
  },
  iconContainer: {
    alignItems: "center",
    flexDirection: "row"
  },
  title: {
    marginTop: 50,
    color: "#3c5070",
    fontSize: 35,
    textShadowOffset: {
      width: 3,
      height: 1
    },
    textShadowColor: "#ffe4e5",
    fontWeight: "bold"
  },
  text: {
    marginVertical: 20,
    color: "white",
    fontSize: 25
  },
  score: {
    fontWeight: "bold"
  },
  button: {
    marginVertical: 40
  },
  iconRotated: {
    transform: [{
      rotateY: "180deg"
    }]
  },
  resultContainer: {
    flexDirection: "row"
  }
});
var _default = Play;
exports.default = _default;