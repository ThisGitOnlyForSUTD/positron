exports.ids = [4,9];
exports.modules = {

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("77503502", content, true, context)
};

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("339aa8ef", content, true, context)
};

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/AppButton.vue?vue&type=template&id=3de2dd0b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('button', {
    class: _vm.primary ? 'primary' : 'button',
    on: {
      "click": function ($event) {
        return _vm.sendDataToServer();
      }
    }
  }, [_vm._ssrNode(_vm._ssrEscape("\n  " + _vm._s(_vm.text) + "\n"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/AppButton.vue?vue&type=template&id=3de2dd0b&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/AppButton.vue?vue&type=script&lang=js&

/* harmony default export */ var AppButtonvue_type_script_lang_js_ = ({
  name: 'AppButton',
  props: {
    text: {
      type: String,
      default: null
    },
    primary: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...Object(external_vuex_["mapActions"])(['sendDataToServer'])
  }
});
// CONCATENATED MODULE: ./components/ui/AppButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var ui_AppButtonvue_type_script_lang_js_ = (AppButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/AppButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(45)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  ui_AppButtonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3de2dd0b",
  "91616a7c"
  
)

/* harmony default export */ var AppButton = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_style_index_0_id_3de2dd0b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_style_index_0_id_3de2dd0b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_style_index_0_id_3de2dd0b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_style_index_0_id_3de2dd0b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppButton_vue_vue_type_style_index_0_id_3de2dd0b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".button[data-v-3de2dd0b]{background-color:#fff;color:#2c3242}.button[data-v-3de2dd0b],.primary[data-v-3de2dd0b]{border:1px solid #0069b4;border-radius:4px;font-size:18px;font-weight:600;height:54px;line-height:26px;padding:0;width:365px}.primary[data-v-3de2dd0b]{background-color:#0069b4;color:#fff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_8310fe8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_8310fe8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_8310fe8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_8310fe8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sidebar_vue_vue_type_style_index_0_id_8310fe8a_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sidebar[data-v-8310fe8a]{background-color:#f6f8fa;border-radius:5px;display:flex;flex-direction:column;padding:35px 30px}.sidebar__main-wrapper[data-v-8310fe8a]{border-bottom:1px solid #aeb0b6;padding-bottom:28px}.sidebar__title[data-v-8310fe8a]{font-size:24px;font-weight:600;line-height:29px;margin-bottom:31px}.sidebar__wrapper[data-v-8310fe8a]{display:flex;justify-content:space-between}.sidebar__wrapper[data-v-8310fe8a]:not(:last-child){margin-bottom:17px}.sidebar__text[data-v-8310fe8a]{font-size:16px;font-weight:500;line-height:23px}.sidebar__text_value[data-v-8310fe8a]{color:#1f2432;font-family:\"Roboto\";font-size:16px;font-style:normal;font-weight:400;line-height:145%}.sidebar__total-wrapper[data-v-8310fe8a]{display:flex;justify-content:space-between;margin-bottom:30px;padding-top:10px}.sidebar__text_total[data-v-8310fe8a]{align-self:center;font-size:18px;font-weight:700;line-height:26px}.sidebar__text_price[data-v-8310fe8a]{font-family:\"Roboto\";font-size:26px;font-weight:500;letter-spacing:.005em;line-height:34px}.sidebar__btns[data-v-8310fe8a]{display:flex;flex-direction:column;gap:12px 0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cartPage/sidebar.vue?vue&type=template&id=8310fe8a&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "sidebar"
  }, [_vm._ssrNode("<div class=\"sidebar__main-wrapper\" data-v-8310fe8a><h2 class=\"sidebar__title\" data-v-8310fe8a>Итого</h2> <div class=\"sidebar__wrapper\" data-v-8310fe8a><p class=\"sidebar__text\" data-v-8310fe8a>Сумма заказа</p> <p class=\"sidebar__text sidebar__text_value\" data-v-8310fe8a>" + _vm._ssrEscape(_vm._s(_vm.cartTotalPrice) + " " + _vm._s(_vm.cartData.currency)) + "</p></div> <div class=\"sidebar__wrapper\" data-v-8310fe8a><p class=\"sidebar__text\" data-v-8310fe8a>Количество</p> <p class=\"sidebar__text sidebar__text_value\" data-v-8310fe8a>" + _vm._ssrEscape(_vm._s(_vm.cartItemTotalCount) + " шт") + "</p></div> <div class=\"sidebar__wrapper\" data-v-8310fe8a><p class=\"sidebar__text\" data-v-8310fe8a>Установка</p> <p class=\"sidebar__text sidebar__text_value\" data-v-8310fe8a>" + _vm._ssrEscape(_vm._s(_vm.cartData.isInstallRequired ? 'Да' : 'Нет')) + "</p></div></div> <div class=\"sidebar__total-wrapper\" data-v-8310fe8a><p class=\"sidebar__text sidebar__text_total\" data-v-8310fe8a>Стоимость товаров</p> <p class=\"sidebar__text sidebar__text_price\" data-v-8310fe8a>" + _vm._ssrEscape(_vm._s(_vm.cartTotalPrice) + " " + _vm._s(_vm.cartData.currency)) + "</p></div> "), _vm._ssrNode("<div class=\"sidebar__btns\" data-v-8310fe8a>", "</div>", [_c('app-button', {
    attrs: {
      "primary": true,
      "text": 'Оформить заказ'
    }
  }), _vm._ssrNode(" "), _c('app-button', {
    attrs: {
      "text": 'Купить в 1 клик'
    }
  })], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/cartPage/sidebar.vue?vue&type=template&id=8310fe8a&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/ui/AppButton.vue + 4 modules
var AppButton = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cartPage/sidebar.vue?vue&type=script&lang=js&


/* harmony default export */ var sidebarvue_type_script_lang_js_ = ({
  computed: {
    ...Object(external_vuex_["mapState"])({
      cartData: state => state.cartData
    }),
    ...Object(external_vuex_["mapGetters"])(['cartItemTotalCount', 'cartTotalPrice'])
  },
  components: {
    AppButton: AppButton["default"]
  }
});
// CONCATENATED MODULE: ./components/cartPage/sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var cartPage_sidebarvue_type_script_lang_js_ = (sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/cartPage/sidebar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(63)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cartPage_sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8310fe8a",
  "e9743ff4"
  
)

/* harmony default export */ var sidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cart-page-sidebar.js.map