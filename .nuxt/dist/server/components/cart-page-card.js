exports.ids = [2,1,3,4,9,10];
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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1de94def", content, true, context)
};

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("e3b27798", content, true, context)
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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppInstallation.vue?vue&type=template&id=8f26a778&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "install"
  }, [_vm._ssrNode("<input type=\"checkbox\" id=\"install\" name=\"install\" class=\"install__checkbox\" data-v-8f26a778> <label for=\"install\" class=\"install__label\" data-v-8f26a778></label> "), _c('install-ico', {
    staticClass: "install__img"
  }), _vm._ssrNode(" <div class=\"install__text-wrapper\" data-v-8f26a778><h2 class=\"install__title\" data-v-8f26a778>Установка</h2> <p class=\"install__text\" data-v-8f26a778>Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AppInstallation.vue?vue&type=template&id=8f26a778&scoped=true&

// EXTERNAL MODULE: ./components/ui/icons/install-ico.vue + 2 modules
var install_ico = __webpack_require__(49);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AppInstallation.vue?vue&type=script&lang=js&


/* harmony default export */ var AppInstallationvue_type_script_lang_js_ = ({
  methods: {
    ...Object(external_vuex_["mapMutations"])(['setInstall'])
  },
  components: {
    installIco: install_ico["default"]
  }
});
// CONCATENATED MODULE: ./components/AppInstallation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AppInstallationvue_type_script_lang_js_ = (AppInstallationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/AppInstallation.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AppInstallationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8f26a778",
  "31b2e561"
  
)

/* harmony default export */ var AppInstallation = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ui/icons/install-ico.vue?vue&type=template&id=40a4221f&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M23.6933 28.61C20.8529 28.61 18.5421 26.2992 18.5421 23.4589C18.5421 22.7656 18.6807 22.0892 18.9542 21.4484C19.4636 20.2325 20.4566 19.2345 21.6774 18.7139C21.6935 18.7071 21.7101 18.7009 21.7267 18.6956C22.3459 18.4381 23.0071 18.3077 23.6933 18.3077C26.5337 18.3077 28.8448 20.6185 28.8448 23.4589C28.8448 26.2992 26.5337 28.61 23.6933 28.61ZM22.091 19.7922C21.1619 20.2004 20.4075 20.9658 20.0171 21.8977C19.8036 22.3983 19.696 22.9222 19.696 23.4589C19.696 25.6629 21.4893 27.4562 23.6933 27.4562C25.8976 27.4562 27.6909 25.6629 27.6909 23.4589C27.6909 21.2548 25.8976 19.4615 23.6933 19.4615C23.1474 19.4615 22.6234 19.5672 22.1358 19.7753C22.1211 19.7815 22.1062 19.7872 22.091 19.7922Z\" fill=\"#0069B4\"></path> <path d=\"M6.54113 11.4564C6.25014 11.4564 5.95688 11.4325 5.66392 11.3843C3.4413 11.0176 1.69898 9.19186 1.42714 6.94473C1.34713 6.28527 1.39052 5.63031 1.55587 4.99846C1.60799 4.79845 1.76349 4.64154 1.96293 4.58746C2.16238 4.53309 2.37591 4.59028 2.52183 4.73648L4.67148 6.88585H6.49803L7.28623 6.09766V4.27111L5.23967 2.22427C5.08925 2.07384 5.03375 1.85271 5.09544 1.64904C5.15714 1.44565 5.32588 1.29241 5.53433 1.25071C5.85575 1.18649 6.1938 1.15381 6.53944 1.15381C9.37983 1.15381 11.6909 3.4646 11.6909 6.30499C11.6909 6.99177 11.5548 7.66673 11.2861 8.31098C10.7678 9.53384 9.7728 10.5311 8.55557 11.05C8.53895 11.057 8.52205 11.0632 8.50515 11.0688C7.88625 11.326 7.21975 11.4564 6.54113 11.4564ZM8.32937 10.5192H8.335H8.32937ZM2.54295 6.38922C2.54577 6.52753 2.55563 6.66669 2.57253 6.80613C2.78324 8.54761 4.13175 9.96203 5.85181 10.2457C6.6279 10.3736 7.4037 10.2851 8.09668 9.98879C8.1119 9.98231 8.12739 9.97639 8.14288 9.97132C9.06996 9.5637 9.82661 8.79776 10.2227 7.86364C10.4309 7.36418 10.5371 6.83853 10.5371 6.30499C10.5371 4.24914 8.977 2.55104 6.97861 2.3316L8.27106 3.62432C8.37923 3.7325 8.44008 3.87926 8.44008 4.03223V6.33654C8.44008 6.4895 8.37923 6.63627 8.27106 6.74444L7.14482 7.87068C7.03664 7.97885 6.88988 8.0397 6.73691 8.0397H4.4326C4.27964 8.0397 4.13287 7.97885 4.0247 7.87068L2.54295 6.38922Z\" fill=\"#0069B4\"></path> <path d=\"M21.902 19.8192C21.7541 19.8192 21.6065 19.7629 21.4938 19.6499L18.0844 16.2346C17.8593 16.009 17.8596 15.6439 18.085 15.4188C18.3106 15.194 18.6757 15.1934 18.9008 15.4194L22.3102 18.8347C22.5356 19.0603 22.535 19.4254 22.3096 19.6505C22.197 19.7629 22.0496 19.8192 21.902 19.8192Z\" fill=\"#0069B4\"></path> <path d=\"M14.1712 12.0887C14.0233 12.0887 13.8757 12.0323 13.763 11.9194L10.3477 8.49809C10.1223 8.27245 10.1229 7.90737 10.3483 7.68229C10.5739 7.45721 10.939 7.45721 11.1641 7.68285L14.5794 11.1041C14.8048 11.3298 14.8042 11.6948 14.5788 11.9199C14.4662 12.0323 14.3185 12.0887 14.1712 12.0887Z\" fill=\"#0069B4\"></path> <path d=\"M11.7485 14.5174C11.6009 14.5174 11.4533 14.4611 11.3406 14.3484L7.91939 10.9275C7.69403 10.7021 7.69403 10.337 7.91939 10.1116C8.14475 9.88629 8.50983 9.88629 8.73519 10.1116L12.1564 13.5326C12.3818 13.758 12.3818 14.1231 12.1564 14.3484C12.0438 14.4611 11.8962 14.5174 11.7485 14.5174Z\" fill=\"#0069B4\"></path> <path d=\"M19.4848 22.254C19.3372 22.254 19.1896 22.1977 19.0769 22.085L15.6559 18.6637C15.4305 18.4384 15.4305 18.0733 15.6559 17.8479C15.8813 17.6226 16.2463 17.6226 16.4717 17.8479L19.8927 21.2692C20.118 21.4945 20.118 21.8596 19.8927 22.085C19.78 22.1977 19.6324 22.254 19.4848 22.254Z\" fill=\"#0069B4\"></path> <path d=\"M24.8539 26.0454H22.5327C22.3265 26.0454 22.1361 25.9355 22.0329 25.7569L20.8723 23.7467C20.7695 23.5681 20.7695 23.3484 20.8723 23.1698L22.0329 21.1593C22.1361 20.9807 22.3265 20.8708 22.5327 20.8708H24.8539C25.0601 20.8708 25.2505 20.9807 25.3536 21.1593L26.5142 23.1698C26.6171 23.3484 26.6171 23.5681 26.5142 23.7467L25.3536 25.7569C25.2505 25.9355 25.0601 26.0454 24.8539 26.0454ZM22.8657 24.8916H24.5209L25.3483 23.4583L24.5206 22.0247H22.8659L22.0383 23.4583L22.8657 24.8916Z\" fill=\"#0069B4\"></path> <path d=\"M14.3616 20.2233C14.0216 20.2233 13.6819 20.094 13.423 19.8351L10.1654 16.5835C9.65411 16.0615 9.65411 15.2231 10.1595 14.7079L22.6307 2.23644C24.0234 0.850187 26.2835 0.85075 27.6694 2.23644L27.7554 2.317C29.1568 3.7179 29.1568 5.97855 27.7675 7.36762L15.3002 19.8351C15.0414 20.094 14.7016 20.2233 14.3616 20.2233ZM25.1479 2.35137C24.5307 2.35137 23.9152 2.58575 23.4456 3.05337L10.9784 15.5209C10.9147 15.5857 10.9147 15.6995 10.9835 15.7696L14.2388 19.0193C14.3075 19.0881 14.4157 19.0881 14.4844 19.0193L26.9517 6.55181C27.4063 6.09715 27.6568 5.49205 27.6568 4.84837C27.6568 4.2044 27.4063 3.59931 26.9517 3.14464L26.8657 3.06407C26.39 2.58828 25.7682 2.35137 25.1479 2.35137Z\" fill=\"#0069B4\"></path> <path d=\"M3.24498 28.8461C3.09568 28.8461 2.94806 28.7884 2.83679 28.6771L1.32462 27.1647C1.13588 26.9759 1.10123 26.6827 1.24068 26.4553L3.18554 23.2828C3.38583 22.9561 3.71711 22.729 4.09402 22.6597C4.46981 22.5893 4.86025 22.6848 5.16392 22.9192C5.24139 22.9792 5.28252 23.0152 5.32083 23.0538L6.77469 24.5077C6.80511 24.5381 6.83413 24.5702 6.86173 24.6037L7.03949 24.8218C7.28597 25.1237 7.38992 25.5178 7.32485 25.9021C7.2595 26.2869 7.0316 26.6244 6.69891 26.8283L3.54612 28.7611C3.45287 28.8183 3.34864 28.8461 3.24498 28.8461ZM2.46213 26.6706L3.3309 27.5396L6.09579 25.8449C6.16227 25.8041 6.18143 25.7424 6.18706 25.7091C6.19269 25.6762 6.19495 25.6117 6.14537 25.5508L5.95888 25.3235L4.50503 23.8696C4.50446 23.8693 4.45911 23.8327 4.45854 23.8324C4.39826 23.7857 4.33572 23.7899 4.3022 23.7947C4.2698 23.8006 4.20924 23.8203 4.16924 23.886L2.46213 26.6706Z\" fill=\"#0069B4\"></path> <path d=\"M4.64663 23.7724C4.49901 23.7724 4.3514 23.7161 4.23872 23.6034C4.01336 23.378 4.01336 23.0126 4.23872 22.7876L10.715 16.3124C10.9404 16.087 11.3055 16.087 11.5308 16.3124C11.7562 16.5378 11.7562 16.9031 11.5308 17.1282L5.05453 23.6034C4.94185 23.7161 4.79424 23.7724 4.64663 23.7724Z\" fill=\"#0069B4\"></path> <path d=\"M6.80513 25.9309C6.65752 25.9309 6.50991 25.8746 6.39723 25.7619C6.17187 25.5365 6.17187 25.1712 6.39723 24.9461L12.8735 18.4712C13.0989 18.2458 13.464 18.2458 13.6893 18.4712C13.9147 18.6966 13.9147 19.0619 13.6893 19.287L7.21304 25.7619C7.10036 25.8746 6.95274 25.9309 6.80513 25.9309Z\" fill=\"#0069B4\"></path> <path d=\"M14.3601 16.2177C14.2125 16.2177 14.0649 16.1614 13.9522 16.0487C13.7269 15.8233 13.7269 15.4582 13.9522 15.2329L24.745 4.44008C24.9704 4.21472 25.3355 4.21472 25.5608 4.44008C25.7862 4.66544 25.7862 5.03052 25.5608 5.25588L14.768 16.0487C14.6553 16.1614 14.5077 16.2177 14.3601 16.2177Z\" fill=\"#0069B4\"></path></svg>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ui/icons/install-ico.vue?vue&type=template&id=40a4221f&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ui/icons/install-ico.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6f8fdcc6"
  
)

/* harmony default export */ var install_ico = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.png": 55,
	"./2.png": 56,
	"./3.png": 57
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 54;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.8dacbdb.png";

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.5478a40.png";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/3.fe72e33.png";

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMUwxMyAxMyIgc3Ryb2tlPSIjMUYyNDMyIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8cGF0aCBkPSJNMSAxM0wxMyAxIiBzdHJva2U9IiMxRjI0MzIiIHN0cm9rZS13aWR0aD0iMS41Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listingCart_vue_vue_type_style_index_0_id_4a6c0415_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listingCart_vue_vue_type_style_index_0_id_4a6c0415_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listingCart_vue_vue_type_style_index_0_id_4a6c0415_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listingCart_vue_vue_type_style_index_0_id_4a6c0415_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_listingCart_vue_vue_type_style_index_0_id_4a6c0415_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".close-btn[data-v-4a6c0415]{background-color:transparent;border:none;padding:0;position:absolute;right:0;top:0}.listing[data-v-4a6c0415]{padding-top:15px;width:800px}.listing__list[data-v-4a6c0415]{margin-bottom:44px}.item[data-v-4a6c0415]{display:flex;justify-content:space-between;margin-bottom:25px;padding-bottom:21px;padding-left:15px;padding-right:53px;position:relative}.item__title[data-v-4a6c0415]{font-size:16px;font-weight:600;line-height:23px;margin-bottom:6px}.item__text[data-v-4a6c0415]{color:#2c3242;font-size:12px;line-height:18px;margin-bottom:7px;max-width:263px}.item__text_article-number[data-v-4a6c0415]{color:#797b86;font-size:14px;line-height:21px}.item__count-wrapper[data-v-4a6c0415]{align-self:center;display:flex;position:relative}.item__btn[data-v-4a6c0415],.item__text_count[data-v-4a6c0415]{background-color:#f6f8fa;border:none;border-radius:4px;font-size:14px;height:34px;line-height:21px;width:38px}.item__text_count[data-v-4a6c0415]{align-items:center;display:flex;justify-content:center;margin-left:2px;margin-right:2px}.item__text_sum-count[data-v-4a6c0415]{left:50%;margin-bottom:0;position:absolute;text-align:center;top:90%;transform:translate(-50%);width:100%}.item__text_price[data-v-4a6c0415]{align-self:center;font-size:18px;font-weight:500;line-height:26px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInstallation_vue_vue_type_style_index_0_id_8f26a778_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInstallation_vue_vue_type_style_index_0_id_8f26a778_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInstallation_vue_vue_type_style_index_0_id_8f26a778_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInstallation_vue_vue_type_style_index_0_id_8f26a778_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppInstallation_vue_vue_type_style_index_0_id_8f26a778_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".install[data-v-8f26a778]{align-items:center;background-color:#f6f8fa;border-radius:5px;display:flex;padding:26px 0 26px 25px}.install__label[data-v-8f26a778]{align-self:center;cursor:pointer;display:flex;margin-right:20px;position:relative}.install__label[data-v-8f26a778]:before{border:1px solid #797b86;border-radius:2px;box-shadow:inset 2px 2px 1px rgba(0,0,0,.08);content:\"\";display:inline-block;height:20px;width:20px}.install__checkbox[data-v-8f26a778]{border-radius:2px;opacity:0;position:absolute;z-index:-1}.install__checkbox:checked+.install__label[data-v-8f26a778]:before{background-color:#0069b4}.install__img[data-v-8f26a778]{background-color:#fff;border-radius:4px;box-sizing:content-box;margin-right:20px;padding:10px}.install__title[data-v-8f26a778]{font-size:16px;font-weight:600;line-height:23px;margin-bottom:2px}.install__text[data-v-8f26a778]{color:#797b86;font-size:14px;font-weight:400;line-height:21px}", ""]);
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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("14014f9b", content, true, context)
};

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cartPage/listingCart.vue?vue&type=template&id=4a6c0415&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "listing"
  }, [_vm._ssrNode("<ul class=\"listing__list\" data-v-4a6c0415>" + _vm._ssrList(_vm.cartData.items, function (item) {
    return "<li class=\"item\" data-v-4a6c0415><img" + _vm._ssrAttr("src", __webpack_require__(54)(`./${item.photoId}.png`)) + " alt=\"Вытяжное устройство G2H\" height=\"100\" width=\"100\" class=\"item__img\" data-v-4a6c0415> <div class=\"item__text-wrapper\" data-v-4a6c0415><h2 class=\"item__title\" data-v-4a6c0415>" + _vm._ssrEscape(_vm._s(item.title)) + "</h2> <p class=\"item__text item__text_description\" data-v-4a6c0415>" + _vm._ssrEscape(_vm._s(item.description)) + "</p> <p class=\"item__text item__text_article-number\" data-v-4a6c0415>" + _vm._ssrEscape("Артикул: " + _vm._s(item.article)) + "</p></div> <div class=\"item__count-wrapper\" data-v-4a6c0415><button class=\"item__btn\" data-v-4a6c0415>−</button> <span class=\"item__text item__text_count\" data-v-4a6c0415>" + _vm._ssrEscape(_vm._s(item.count)) + "</span> <button class=\"item__btn\" data-v-4a6c0415>+</button> " + (item.count > 1 ? "<span class=\"item__text item__text_sum-count\" data-v-4a6c0415>" + _vm._ssrEscape(_vm._s(item.price) + " " + _vm._s(_vm.cartData.currency) + "/шт") + "</span>" : "<!---->") + "</div> <p class=\"item__text item__text_price\" data-v-4a6c0415>" + _vm._ssrEscape(_vm._s(item.count * item.price) + " " + _vm._s(_vm.cartData.currency)) + "</p> <button class=\"item__close-btn close-btn\" data-v-4a6c0415><img" + _vm._ssrAttr("src", __webpack_require__(58)) + " alt=\"Иконка крестика\" height=\"12\" width=\"12\" class=\"close-btn__img\" data-v-4a6c0415></button></li>";
  }) + " " + (_vm.cartData.items.length == 0 ? "<li class=\"item\" data-v-4a6c0415>Ваша корзина пуста</li>" : "<!---->") + "</ul>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/cartPage/listingCart.vue?vue&type=template&id=4a6c0415&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cartPage/listingCart.vue?vue&type=script&lang=js&

/* harmony default export */ var listingCartvue_type_script_lang_js_ = ({
  computed: {
    ...Object(external_vuex_["mapState"])({
      cartData: state => state.cartData
    })
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(['increaseCartItemCount', 'decreaseCartItemCount', 'deleteItemCart'])
  }
});
// CONCATENATED MODULE: ./components/cartPage/listingCart.vue?vue&type=script&lang=js&
 /* harmony default export */ var cartPage_listingCartvue_type_script_lang_js_ = (listingCartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/cartPage/listingCart.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(59)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cartPage_listingCartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4a6c0415",
  "19a66124"
  
)

/* harmony default export */ var listingCart = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_67aafaf8_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_67aafaf8_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_67aafaf8_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_67aafaf8_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_card_vue_vue_type_style_index_0_id_67aafaf8_prod_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".cart__header-wrapper[data-v-67aafaf8]{align-items:flex-end;display:flex;justify-content:space-between;margin-bottom:95px;width:800px}.cart__header-title-wrapper[data-v-67aafaf8]{display:flex}.cart__title[data-v-67aafaf8]{color:#33374e;font-size:44px;font-weight:700;line-height:53px;margin-right:22px;text-transform:inherit}.cart__item-count[data-v-67aafaf8]{align-self:flex-end;color:#797b86;font-size:18px;line-height:26px;margin-bottom:3px}.cart__btn[data-v-67aafaf8]{background-color:transparent;border:none;color:#797b86;font-family:\"Lato\",sans-serif;font-size:14px;line-height:21px;padding:0;-webkit-text-decoration:underline;text-decoration:underline;text-underline-offset:4px}.cart__wrapper[data-v-67aafaf8]{-moz-column-gap:55px;column-gap:55px;display:flex;justify-content:space-between}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cartPage/card.vue?vue&type=template&id=67aafaf8&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "cart"
  }, [_vm._ssrNode("<div class=\"container\" data-v-67aafaf8>", "</div>", [_vm._ssrNode("<div class=\"cart__header-wrapper\" data-v-67aafaf8><div class=\"cart__header-title-wrapper\" data-v-67aafaf8><h1 class=\"cart__title\" data-v-67aafaf8>Ваша корзина</h1> " + (_vm.cartItemTotalCount > 0 ? "<span class=\"cart__item-count\" data-v-67aafaf8>" + _vm._ssrEscape(_vm._s(_vm.cartItemTotalCount) + " шт.") + "</span>" : "<!---->") + "</div> <button class=\"cart__btn\" data-v-67aafaf8>Очистить корзину</button></div> "), _vm._ssrNode("<div class=\"cart__wrapper\" data-v-67aafaf8>", "</div>", [_vm._ssrNode("<div data-v-67aafaf8>", "</div>", [_c('listing-cart'), _vm._ssrNode(" "), _c('app-installation')], 2), _vm._ssrNode(" "), _c('sidebar')], 2)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/cartPage/card.vue?vue&type=template&id=67aafaf8&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./components/ui/AppButton.vue + 4 modules
var AppButton = __webpack_require__(44);

// EXTERNAL MODULE: ./components/cartPage/listingCart.vue + 4 modules
var listingCart = __webpack_require__(67);

// EXTERNAL MODULE: ./components/AppInstallation.vue + 4 modules
var AppInstallation = __webpack_require__(48);

// EXTERNAL MODULE: ./components/cartPage/sidebar.vue + 4 modules
var sidebar = __webpack_require__(68);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/cartPage/card.vue?vue&type=script&lang=js&





/* harmony default export */ var cardvue_type_script_lang_js_ = ({
  name: 'Cart',
  computed: {
    ...Object(external_vuex_["mapGetters"])(['cartItemTotalCount'])
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(['increaseCartItemCount', 'decreaseCartItemCount', 'clearCart'])
  },
  components: {
    AppButton: AppButton["default"],
    listingCart: listingCart["default"],
    AppInstallation: AppInstallation["default"],
    sidebar: sidebar["default"]
  }
});
// CONCATENATED MODULE: ./components/cartPage/card.vue?vue&type=script&lang=js&
 /* harmony default export */ var cartPage_cardvue_type_script_lang_js_ = (cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/cartPage/card.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  cartPage_cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "67aafaf8",
  "43113ed6"
  
)

/* harmony default export */ var card = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {AppInstallation: __webpack_require__(48).default})


/***/ })

};;
//# sourceMappingURL=cart-page-card.js.map