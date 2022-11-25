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
function Ranking(props) {
  var isDesktop = (0, _reactResponsive.useMediaQuery)({
    minWidth: 650
  });
  var goToHome = function goToHome() {
    if (!!props.callbackHome) {
      props.callbackHome();
    }
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: isDesktop ? [mobile.rankingContainer, desktop.rankingContainer] : mobile.rankingContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: isDesktop ? [mobile.gameTitle, desktop.gameTitle] : mobile.gameTitle
  }, "Sasso Carta Forbice"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: mobile.title
  }, "Classifica"), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.scrollViewContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.row
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.viewRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: isDesktop ? [mobile.textColumn, desktop.textColumn] : mobile.textColumn
  }, "Rank")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.viewRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: isDesktop ? [mobile.textColumn, desktop.textColumn] : mobile.textColumn
  }, "Nome")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.viewRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: isDesktop ? [mobile.textColumn, desktop.textColumn] : mobile.textColumn
  }, "Vittorie")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.viewRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: isDesktop ? [mobile.textColumn, desktop.textColumn] : mobile.textColumn
  }, "Sconfitte")), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: mobile.viewRow
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: isDesktop ? [mobile.textColumn, desktop.textColumn] : mobile.textColumn
  }, "Match"))), /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
    style: mobile.table
  }, !!props.data && props.data.map(function (d, key) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: key
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: mobile.line
    }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: mobile.row
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: mobile.viewRow
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: isDesktop ? [mobile.textRow, desktop.textRow] : mobile.textRow
    }, "#", key + 1)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: mobile.viewRow
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: isDesktop ? [mobile.textRow, desktop.textRow] : mobile.textRow
    }, d.nickname)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: mobile.viewRow
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: isDesktop ? [mobile.textRow, desktop.textRow] : mobile.textRow
    }, d.vittorie)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: mobile.viewRow
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: isDesktop ? [mobile.textRow, desktop.textRow] : mobile.textRow
    }, d.sconfitte)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: mobile.viewRow
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: isDesktop ? [mobile.textRow, desktop.textRow] : mobile.textRow
    }, d.match))));
  }))), /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: 'Home',
    callback: goToHome,
    isDesktop: isDesktop
  }));
}
var mobile = _reactNative.StyleSheet.create({
  rankingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#c85260"
  },
  scrollViewContainer: {
    maxHeight: 350,
    overflow: 'hidden',
    backgroundColor: '#f0f8ff',
    border: 'none',
    shadowOffset: {
      height: 10,
      width: 15
    },
    shadowRadius: 6,
    shadowColor: 'rgba(0, 0, 0, 0.349)',
    borderRadius: 25,
    marginBottom: 25,
    width: '95%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 25
  },
  textColumn: {
    paddingHorizontal: 7,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center'
  },
  textRow: {
    fontSize: 12,
    textAlign: 'center'
  },
  viewRow: {
    width: '20%'
  },
  table: {
    marginVertical: 15,
    marginHorizontal: 'auto',
    flexDirection: 'column',
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  line: {
    marginVertical: 0,
    marginHorizontal: 'auto',
    width: '95%',
    height: 2,
    backgroundColor: 'lightgray'
  },
  gameTitle: {
    marginTop: 30,
    marginBottom: 30,
    paddingTop: 20,
    color: '#3c5070',
    fontSize: 35,
    fontWeight: 'bold',
    textShadowOffset: {
      width: 3,
      height: 1
    },
    textShadowColor: '#ffe4e5',
    textShadowRadius: 1,
    textAlign: 'center'
  }
});
var desktop = _reactNative.StyleSheet.create({
  textColumn: {
    fontSize: 'medium'
  },
  textRow: {
    fontSize: 'medium'
  },
  rankingContainer: {
    width: 650,
    marginVertical: 0,
    marginHorizontal: 'auto'
  },
  gameTitle: {
    fontSize: 45
  }
});
var _default = Ranking;
exports.default = _default;