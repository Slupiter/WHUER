(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/template/list-with-badges/list-with-badges"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\pages\\template\\list-with-badges\\list-with-badges.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/26231/Documents/HBuilderProjects/Hello uni-app/pages/template/list-with-badges/list-with-badges.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





















































var _uniBadge = _interopRequireDefault(__webpack_require__(/*! ../../../components/uni-badge.vue */ "C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\components\\uni-badge.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  data: function data() {
    return {
      title: 'list-with-badges' };

  },
  components: {
    uniBadge: _uniBadge.default } };exports.default = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\pages\\template\\list-with-badges\\list-with-badges.vue?vue&type=template&id=22f0f4d5&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/26231/Documents/HBuilderProjects/Hello uni-app/pages/template/list-with-badges/list-with-badges.vue?vue&type=template&id=22f0f4d5& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: "page" },
    [
      _c("page-head", { attrs: { title: _vm.title, mpcomid: "415cd001-0" } }),
      _c("view", { staticClass: "uni-card" }, [
        _c("view", { staticClass: "uni-list" }, [
          _c("view", { staticClass: "uni-list-cell-divider" }, [
            _vm._v("右侧带箭头")
          ]),
          _vm._m(0),
          _vm._m(1),
          _c("view", { staticClass: "uni-list-cell-divider" }, [
            _vm._v("右侧带数字角标")
          ]),
          _c(
            "view",
            {
              staticClass: "uni-list-cell",
              attrs: { "hover-class": "uni-list-cell-hover" }
            },
            [
              _c(
                "view",
                { staticClass: "uni-list-cell-navigate" },
                [
                  _vm._v("Item2"),
                  _c("uni-badge", {
                    attrs: { text: "1", type: "danger", mpcomid: "415cd001-1" }
                  })
                ],
                1
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: "uni-list-cell uni-list-cell-last",
              attrs: { "hover-class": "uni-list-cell-hover" }
            },
            [
              _c(
                "view",
                { staticClass: "uni-list-cell-navigate" },
                [
                  _vm._v("Item1"),
                  _c("uni-badge", {
                    attrs: {
                      text: "123",
                      type: "success",
                      mpcomid: "415cd001-2"
                    }
                  })
                ],
                1
              )
            ]
          ),
          _c("view", { staticClass: "uni-list-cell-divider" }, [
            _vm._v("右侧带数字角标+箭头")
          ]),
          _c(
            "view",
            {
              staticClass: "uni-list-cell",
              attrs: { "hover-class": "uni-list-cell-hover" }
            },
            [
              _c(
                "view",
                {
                  staticClass:
                    "uni-list-cell-navigate uni-navigate-right uni-navigate-badge"
                },
                [
                  _vm._v("Item1"),
                  _c("uni-badge", {
                    attrs: {
                      text: "123",
                      type: "success",
                      mpcomid: "415cd001-3"
                    }
                  })
                ],
                1
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: "uni-list-cell uni-list-cell-last",
              attrs: { "hover-class": "uni-list-cell-hover" }
            },
            [
              _c(
                "view",
                {
                  staticClass:
                    "uni-list-cell-navigate uni-navigate-right uni-navigate-badge"
                },
                [
                  _vm._v("Item2"),
                  _c("uni-badge", {
                    attrs: {
                      text: "12",
                      type: "primary",
                      mpcomid: "415cd001-4"
                    }
                  })
                ],
                1
              )
            ]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      {
        staticClass: "uni-list-cell",
        attrs: { "hover-class": "uni-list-cell-hover" }
      },
      [
        _c(
          "view",
          { staticClass: "uni-list-cell-navigate uni-navigate-right" },
          [_vm._v("Item1")]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "view",
      {
        staticClass: "uni-list-cell uni-list-cell-last",
        attrs: { "hover-class": "uni-list-cell-hover" }
      },
      [
        _c(
          "view",
          { staticClass: "uni-list-cell-navigate uni-navigate-right" },
          [_vm._v("Item2")]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\main.js?{\"page\":\"pages%2Ftemplate%2Flist-with-badges%2Flist-with-badges\"}":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/26231/Documents/HBuilderProjects/Hello uni-app/main.js?{"page":"pages%2Ftemplate%2Flist-with-badges%2Flist-with-badges"} ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _listWithBadges = _interopRequireDefault(__webpack_require__(/*! ./pages/template/list-with-badges/list-with-badges.vue */ "C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\pages\\template\\list-with-badges\\list-with-badges.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_listWithBadges.default));

/***/ }),

/***/ "C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\pages\\template\\list-with-badges\\list-with-badges.vue":
/*!********************************************************************************************************************!*\
  !*** C:/Users/26231/Documents/HBuilderProjects/Hello uni-app/pages/template/list-with-badges/list-with-badges.vue ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_with_badges_vue_vue_type_template_id_22f0f4d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-with-badges.vue?vue&type=template&id=22f0f4d5& */ "C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\pages\\template\\list-with-badges\\list-with-badges.vue?vue&type=template&id=22f0f4d5&");
/* harmony import */ var _list_with_badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-with-badges.vue?vue&type=script&lang=js& */ "C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\pages\\template\\list-with-badges\\list-with-badges.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_with_badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_with_badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _list_with_badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_with_badges_vue_vue_type_template_id_22f0f4d5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_with_badges_vue_vue_type_template_id_22f0f4d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/26231/Documents/HBuilderProjects/Hello uni-app/pages/template/list-with-badges/list-with-badges.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\pages\\template\\list-with-badges\\list-with-badges.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************!*\
  !*** C:/Users/26231/Documents/HBuilderProjects/Hello uni-app/pages/template/list-with-badges/list-with-badges.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_with_badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./list-with-badges.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\pages\\template\\list-with-badges\\list-with-badges.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_with_badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_with_badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_with_badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_with_badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_with_badges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\pages\\template\\list-with-badges\\list-with-badges.vue?vue&type=template&id=22f0f4d5&":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/26231/Documents/HBuilderProjects/Hello uni-app/pages/template/list-with-badges/list-with-badges.vue?vue&type=template&id=22f0f4d5& ***!
  \***************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_with_badges_vue_vue_type_template_id_22f0f4d5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./list-with-badges.vue?vue&type=template&id=22f0f4d5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\pages\\template\\list-with-badges\\list-with-badges.vue?vue&type=template&id=22f0f4d5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_with_badges_vue_vue_type_template_id_22f0f4d5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_1_5_2_20190121_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_list_with_badges_vue_vue_type_template_id_22f0f4d5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\26231\\Documents\\HBuilderProjects\\Hello uni-app\\main.js?{\"page\":\"pages%2Ftemplate%2Flist-with-badges%2Flist-with-badges\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/template/list-with-badges/list-with-badges.js.map