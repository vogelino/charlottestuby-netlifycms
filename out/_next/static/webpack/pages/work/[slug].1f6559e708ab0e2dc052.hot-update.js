webpackHotUpdate_N_E("pages/work/[slug]",{

/***/ "./components/pages/Work/index.js":
/*!****************************************!*\
  !*** ./components/pages/Work/index.js ***!
  \****************************************/
/*! exports provided: workPropTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"workPropTypes\", function() { return workPropTypes; });\n/* harmony import */ var _Users_lucasvogel_Sites_charlottestuby_netlifycms_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Link */ \"./components/Link.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../List */ \"./components/List.js\");\n/* harmony import */ var _ListElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ListElement */ \"./components/ListElement.js\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Icon */ \"./components/Icon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _WorkLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../WorkLink */ \"./components/WorkLink.js\");\n\n\n\nvar _jsxFileName = \"/Users/lucasvogel/Sites/charlottestuby-netlifycms/components/pages/Work/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_lucasvogel_Sites_charlottestuby_netlifycms_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar LAST_SRCOLL_POS = 0;\nvar MIN_SCROLL_DIS = 80;\n\nvar formatDescription = function formatDescription(description) {\n  return description.split(',').map(function (part, index) {\n    return index === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"em\", {\n      children: [part, \",\"]\n    }, index, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 4\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n      children: [index === 1 ? '' : ',', part]\n    }, index, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }, _this);\n  });\n};\n\nvar Work = function Work(_ref) {\n  _s();\n\n  var previousWork = _ref.previousWork,\n      nextWork = _ref.nextWork,\n      _ref$work = _ref.work,\n      title = _ref$work.title,\n      id = _ref$work.id,\n      subtitle = _ref$work.subtitle,\n      description = _ref$work.description,\n      slug = _ref$work.slug,\n      images = _ref$work.images;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isScrollingUp = _useState[0],\n      setIsScrollingUp = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var handler = function handler() {\n      var currentScroll = window.pageYOffset;\n      var isBelowMinDist = currentScroll <= MIN_SCROLL_DIS;\n      var isGoingDown = currentScroll > LAST_SRCOLL_POS;\n      var isGoingUp = currentScroll < LAST_SRCOLL_POS;\n      if (isGoingDown) setIsScrollingUp(false);\n      if (isGoingUp) setIsScrollingUp(isBelowMinDist ? false : true);\n      LAST_SRCOLL_POS = currentScroll;\n    };\n\n    window.addEventListener('scroll', handler);\n    return function () {\n      window.removeEventListener('scroll', handler);\n    };\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"work-container \".concat(slug),\n    id: id,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"work-header \".concat(isScrollingUp && 'scroll-up'),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"work-header-container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n          className: \"work-title\",\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            href: \"/\",\n            className: \"work-close-button\",\n            title: \"Back to the homepage\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n              iconId: \"cross\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 8\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 4\n    }, _this), description ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"work-head\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n        className: \"work-title\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 6\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h3\", {\n        className: \"work-subtitle\",\n        children: subtitle\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 6\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"work-description\",\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 6\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        href: \"/\",\n        className: \"work-close-button\",\n        title: \"Back to the homepage\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Icon__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          iconId: \"cross\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 6\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 5\n    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_List__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      className: \"work-images\",\n      children: images.map(function (_ref2) {\n        var image = _ref2.image,\n            caption = _ref2.caption;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_ListElement__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          className: \"work-image\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"figure\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"work-image-loading-container\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {\n                src: image,\n                layout: \"fill\",\n                objectFit: \"contain\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 9\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 8\n            }, _this), caption ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"figcaption\", {\n              children: formatDescription(caption)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 78,\n              columnNumber: 19\n            }, _this) : null]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 7\n          }, _this)\n        }, image, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 6\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_List__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      className: \"work-links\",\n      children: [previousWork && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_ListElement__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_WorkLink__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _objectSpread({}, previousWork), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 6\n      }, _this), nextWork && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_ListElement__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_WorkLink__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _objectSpread({}, nextWork), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 6\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Work, \"KjzTUX61PAoN7lfXsHq91IfGzZs=\");\n\n_c = Work;\nvar workPropTypes = {\n  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n  slug: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,\n  images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({\n    image: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,\n    caption: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string\n  })).isRequired,\n  thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({\n    fixed: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object\n  }), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]).isRequired\n};\nWork.propTypes = {\n  work: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape(workPropTypes).isRequired,\n  previousWork: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape(workPropTypes),\n  nextWork: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape(workPropTypes),\n  startLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,\n  loading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\n\nvar _c;\n\n$RefreshReg$(_c, \"Work\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYWdlcy9Xb3JrL2luZGV4LmpzPzQ4NTIiXSwibmFtZXMiOlsiTEFTVF9TUkNPTExfUE9TIiwiTUlOX1NDUk9MTF9ESVMiLCJmb3JtYXREZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uIiwic3BsaXQiLCJtYXAiLCJwYXJ0IiwiaW5kZXgiLCJXb3JrIiwicHJldmlvdXNXb3JrIiwibmV4dFdvcmsiLCJ3b3JrIiwidGl0bGUiLCJpZCIsInN1YnRpdGxlIiwic2x1ZyIsImltYWdlcyIsInVzZVN0YXRlIiwiaXNTY3JvbGxpbmdVcCIsInNldElzU2Nyb2xsaW5nVXAiLCJ1c2VFZmZlY3QiLCJoYW5kbGVyIiwiY3VycmVudFNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiaXNCZWxvd01pbkRpc3QiLCJpc0dvaW5nRG93biIsImlzR29pbmdVcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaW1hZ2UiLCJjYXB0aW9uIiwid29ya1Byb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwic2hhcGUiLCJ0aHVtYm5haWwiLCJvbmVPZlR5cGUiLCJmaXhlZCIsIm9iamVjdCIsInByb3BUeXBlcyIsInN0YXJ0TG9hZGluZyIsImZ1bmMiLCJsb2FkaW5nIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGVBQWUsR0FBRyxDQUF0QjtBQUNBLElBQUlDLGNBQWMsR0FBRyxFQUFyQjs7QUFFQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLFdBQUQ7QUFBQSxTQUN6QkEsV0FBVyxDQUFDQyxLQUFaLENBQWtCLEdBQWxCLEVBQXVCQyxHQUF2QixDQUEyQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7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QUNrQyxTQUFMLEdBQWlCO0FBQ2hCL0IsTUFBSSxFQUFFc0IsaURBQVMsQ0FBQ0ksS0FBVixDQUFnQkwsYUFBaEIsRUFBK0JHLFVBRHJCO0FBRWhCMUIsY0FBWSxFQUFFd0IsaURBQVMsQ0FBQ0ksS0FBVixDQUFnQkwsYUFBaEIsQ0FGRTtBQUdoQnRCLFVBQVEsRUFBRXVCLGlEQUFTLENBQUNJLEtBQVYsQ0FBZ0JMLGFBQWhCLENBSE07QUFJaEJXLGNBQVksRUFBRVYsaURBQVMsQ0FBQ1csSUFBVixDQUFlVCxVQUpiO0FBS2hCVSxTQUFPLEVBQUVaLGlEQUFTLENBQUNhLElBQVYsQ0FBZVg7QUFMUixDQUFqQjtBQVFlM0IsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhZ2VzL1dvcmsvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vLi4vTGluaydcbmltcG9ydCBMaXN0IGZyb20gJy4uLy4uL0xpc3QnXG5pbXBvcnQgTGlzdEVsZW1lbnQgZnJvbSAnLi4vLi4vTGlzdEVsZW1lbnQnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9JY29uJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgV29ya0xpbmsgZnJvbSAnLi4vLi4vV29ya0xpbmsnXG5cbmxldCBMQVNUX1NSQ09MTF9QT1MgPSAwXG5sZXQgTUlOX1NDUk9MTF9ESVMgPSA4MFxuXG5jb25zdCBmb3JtYXREZXNjcmlwdGlvbiA9IChkZXNjcmlwdGlvbikgPT5cblx0ZGVzY3JpcHRpb24uc3BsaXQoJywnKS5tYXAoKHBhcnQsIGluZGV4KSA9PlxuXHRcdGluZGV4ID09PSAwID8gKFxuXHRcdFx0PGVtIGtleT17aW5kZXh9PntwYXJ0fSw8L2VtPlxuXHRcdCkgOiAoXG5cdFx0XHQ8c3BhbiBrZXk9e2luZGV4fT5cblx0XHRcdFx0e2luZGV4ID09PSAxID8gJycgOiAnLCd9XG5cdFx0XHRcdHtwYXJ0fVxuXHRcdFx0PC9zcGFuPlxuXHRcdClcblx0KVxuXG5jb25zdCBXb3JrID0gKHtcblx0cHJldmlvdXNXb3JrLFxuXHRuZXh0V29yayxcblx0d29yazogeyB0aXRsZSwgaWQsIHN1YnRpdGxlLCBkZXNjcmlwdGlvbiwgc2x1ZywgaW1hZ2VzIH0sXG59KSA9PiB7XG5cdGNvbnN0IFtpc1Njcm9sbGluZ1VwLCBzZXRJc1Njcm9sbGluZ1VwXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XG5cdFx0XHRjb25zdCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0XG5cdFx0XHRjb25zdCBpc0JlbG93TWluRGlzdCA9IGN1cnJlbnRTY3JvbGwgPD0gTUlOX1NDUk9MTF9ESVNcblx0XHRcdGNvbnN0IGlzR29pbmdEb3duID0gY3VycmVudFNjcm9sbCA+IExBU1RfU1JDT0xMX1BPU1xuXHRcdFx0Y29uc3QgaXNHb2luZ1VwID0gY3VycmVudFNjcm9sbCA8IExBU1RfU1JDT0xMX1BPU1xuXG5cdFx0XHRpZiAoaXNHb2luZ0Rvd24pIHNldElzU2Nyb2xsaW5nVXAoZmFsc2UpXG5cdFx0XHRpZiAoaXNHb2luZ1VwKSBzZXRJc1Njcm9sbGluZ1VwKGlzQmVsb3dNaW5EaXN0ID8gZmFsc2UgOiB0cnVlKVxuXG5cdFx0XHRMQVNUX1NSQ09MTF9QT1MgPSBjdXJyZW50U2Nyb2xsXG5cdFx0fVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyKVxuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlcilcblx0XHR9XG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2B3b3JrLWNvbnRhaW5lciAke3NsdWd9YH0gaWQ9e2lkfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgd29yay1oZWFkZXIgJHtpc1Njcm9sbGluZ1VwICYmICdzY3JvbGwtdXAnfWB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndvcmstaGVhZGVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJ3b3JrLXRpdGxlXCI+e3RpdGxlfTwvaDI+XG5cdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIndvcmstY2xvc2UtYnV0dG9uXCIgdGl0bGU9XCJCYWNrIHRvIHRoZSBob21lcGFnZVwiPlxuXHRcdFx0XHRcdFx0XHQ8SWNvbiBpY29uSWQ9XCJjcm9zc1wiIC8+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0e2Rlc2NyaXB0aW9uID8gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndvcmstaGVhZFwiPlxuXHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJ3b3JrLXRpdGxlXCI+e3RpdGxlfTwvaDI+XG5cdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cIndvcmstc3VidGl0bGVcIj57c3VidGl0bGV9PC9oMz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndvcmstZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9kaXY+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ3b3JrLWNsb3NlLWJ1dHRvblwiIHRpdGxlPVwiQmFjayB0byB0aGUgaG9tZXBhZ2VcIj5cblx0XHRcdFx0XHRcdDxJY29uIGljb25JZD1cImNyb3NzXCIgLz5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSA6IG51bGx9XG5cdFx0XHQ8TGlzdCBjbGFzc05hbWU9XCJ3b3JrLWltYWdlc1wiPlxuXHRcdFx0XHR7aW1hZ2VzLm1hcCgoeyBpbWFnZSwgY2FwdGlvbiB9KSA9PiAoXG5cdFx0XHRcdFx0PExpc3RFbGVtZW50IGNsYXNzTmFtZT1cIndvcmstaW1hZ2VcIiBrZXk9e2ltYWdlfT5cblx0XHRcdFx0XHRcdDxmaWd1cmU+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid29yay1pbWFnZS1sb2FkaW5nLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxJbWFnZSBzcmM9e2ltYWdlfSBsYXlvdXQ9XCJmaWxsXCIgb2JqZWN0Rml0PVwiY29udGFpblwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7Y2FwdGlvbiA/IDxmaWdjYXB0aW9uPntmb3JtYXREZXNjcmlwdGlvbihjYXB0aW9uKX08L2ZpZ2NhcHRpb24+IDogbnVsbH1cblx0XHRcdFx0XHRcdDwvZmlndXJlPlxuXHRcdFx0XHRcdDwvTGlzdEVsZW1lbnQ+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9MaXN0PlxuXHRcdFx0PExpc3QgY2xhc3NOYW1lPVwid29yay1saW5rc1wiPlxuXHRcdFx0XHR7cHJldmlvdXNXb3JrICYmIChcblx0XHRcdFx0XHQ8TGlzdEVsZW1lbnQ+XG5cdFx0XHRcdFx0XHQ8V29ya0xpbmsgey4uLnByZXZpb3VzV29ya30gLz5cblx0XHRcdFx0XHQ8L0xpc3RFbGVtZW50PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7bmV4dFdvcmsgJiYgKFxuXHRcdFx0XHRcdDxMaXN0RWxlbWVudD5cblx0XHRcdFx0XHRcdDxXb3JrTGluayB7Li4ubmV4dFdvcmt9IC8+XG5cdFx0XHRcdFx0PC9MaXN0RWxlbWVudD5cblx0XHRcdFx0KX1cblx0XHRcdDwvTGlzdD5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgY29uc3Qgd29ya1Byb3BUeXBlcyA9IHtcblx0aWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0dGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0c3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0ZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cdHNsdWc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0aW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihcblx0XHRQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0aW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cdFx0XHRjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdH0pXG5cdCkuaXNSZXF1aXJlZCxcblx0dGh1bWJuYWlsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcblx0XHRQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0Zml4ZWQ6IFByb3BUeXBlcy5vYmplY3QsXG5cdFx0fSksXG5cdFx0UHJvcFR5cGVzLnN0cmluZyxcblx0XSkuaXNSZXF1aXJlZCxcbn1cblxuV29yay5wcm9wVHlwZXMgPSB7XG5cdHdvcms6IFByb3BUeXBlcy5zaGFwZSh3b3JrUHJvcFR5cGVzKS5pc1JlcXVpcmVkLFxuXHRwcmV2aW91c1dvcms6IFByb3BUeXBlcy5zaGFwZSh3b3JrUHJvcFR5cGVzKSxcblx0bmV4dFdvcms6IFByb3BUeXBlcy5zaGFwZSh3b3JrUHJvcFR5cGVzKSxcblx0c3RhcnRMb2FkaW5nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuXHRsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/pages/Work/index.js\n");

/***/ })

})