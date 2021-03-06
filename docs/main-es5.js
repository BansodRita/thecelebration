function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/contact-us/contact-us.component */
    "./src/app/components/contact-us/contact-us.component.ts");
    /* harmony import */


    var _components_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/gallery-page/gallery-page.component */
    "./src/app/components/gallery-page/gallery-page.component.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_product_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/product/product.component */
    "./src/app/components/product/product.component.ts");
    /* harmony import */


    var _components_sigle_product_sigle_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/sigle-product/sigle-product.component */
    "./src/app/components/sigle-product/sigle-product.component.ts");

    var routes = [// path: '', component: LayoutPageComponent,
    {
      path: '',
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
    }, {
      path: 'main',
      component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
    }, {
      path: 'gallery',
      component: _components_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__["GalleryPageComponent"]
    }, {
      path: 'contact',
      component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__["ContactUsComponent"]
    }, {
      path: 'single',
      component: _components_sigle_product_sigle_product_component__WEBPACK_IMPORTED_MODULE_6__["SigleProductComponent"]
    }, {
      path: 'galleryimg',
      component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_5__["ProductComponent"]
    }];

    var AppRoutingModule =
    /*#__PURE__*/
    _createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var AppComponent =
    /*#__PURE__*/
    _createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'UI';
    });

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-footer");
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/gallery-page/gallery-page.component */
    "./src/app/components/gallery-page/gallery-page.component.ts");
    /* harmony import */


    var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/contact-us/contact-us.component */
    "./src/app/components/contact-us/contact-us.component.ts");
    /* harmony import */


    var _components_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/layout-page/layout-page.component */
    "./src/app/components/layout-page/layout-page.component.ts");
    /* harmony import */


    var _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/main/main.component */
    "./src/app/components/main/main.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_product_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/product/product.component */
    "./src/app/components/product/product.component.ts");
    /* harmony import */


    var _components_sigle_product_sigle_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/sigle-product/sigle-product.component */
    "./src/app/components/sigle-product/sigle-product.component.ts");
    /* harmony import */


    var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/gallery/gallery.component */
    "./src/app/components/gallery/gallery.component.ts");

    var AppModule =
    /*#__PURE__*/
    _createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_4__["GalleryPageComponent"], _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"], _components_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_6__["LayoutPageComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"], _components_sigle_product_sigle_product_component__WEBPACK_IMPORTED_MODULE_11__["SigleProductComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_4__["GalleryPageComponent"], _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"], _components_layout_page_layout_page_component__WEBPACK_IMPORTED_MODULE_6__["LayoutPageComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_10__["ProductComponent"], _components_sigle_product_sigle_product_component__WEBPACK_IMPORTED_MODULE_11__["SigleProductComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/contact-us/contact-us.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/contact-us/contact-us.component.ts ***!
    \***************************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcAppComponentsContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactUsComponent =
    /*#__PURE__*/
    function () {
      function ContactUsComponent() {
        _classCallCheck(this, ContactUsComponent);
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent.??fac = function ContactUsComponent_Factory(t) {
      return new (t || ContactUsComponent)();
    };

    ContactUsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ContactUsComponent,
      selectors: [["app-contact-us"]],
      decls: 49,
      vars: 0,
      consts: [[1, "address", "py-5"], [1, "container", "py-xl-5", "py-lg-3"], [1, "title", "text-center", "mb-5"], [1, "text-dark", "mb-2"], [1, "row", "address-row"], [1, "col-lg-6", "address-right"], ["data-wow-delay", ".5s", 1, "address-info", "wow", "fadeInRight", "animated"], [1, "font-weight-bold", "mb-3"], ["data-wow-delay", ".7s", 1, "address-info", "address-mdl", "wow", "fadeInRight", "animated"], ["data-wow-delay", ".6s", 1, "address-info", "agileits-info", "wow", "fadeInRight", "animated"], ["href", "mailto:example@mail.com"], [1, "col-lg-6", "address-left", "mt-lg-0", "mt-5"], [1, "address-grid"], ["action", "#", "method", "post"], [1, "form-group"], ["type", "text", "placeholder", "Name", "name", "name", "required", "", 1, "form-control"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control"], ["type", "text", "placeholder", "Subject", "name", "subject", "required", "", 1, "form-control"], ["placeholder", "Message", "required", "", 1, "form-control"], ["type", "submit", "value", "SEND"], [1, "map"], [2, "width", "100%"], ["width", "100%", "height", "600", "frameborder", "0", "scrolling", "no", "marginheight", "0", "marginwidth", "0", "src", "https://maps.google.com/maps?width=100%25&height=600&hl=en&q=the%20celebration%20cake%20shop%20hinjawadi%20pune+(the%20celebration%20cake%20shop)&t=&z=10&ie=UTF8&iwloc=B&output=embed"], ["href", "https://www.gps.ie/truck-gps/"]],
      template: function ContactUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Ut enim ad minim veniam, quis nostrud ullam.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Shop no.4, Hinjawadi Chowk, Matoba Mandir Road, Hinjawae, pune 411057");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Phone ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "+91 7030094767");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "+91 7264802680");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " Mail1@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " Mail2@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Get In Touch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "form", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "textarea", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "iframe", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "transport gps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-us',
          templateUrl: './contact-us.component.html',
          styleUrls: ['./contact-us.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.??fac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 19,
      vars: 0,
      consts: [[1, "text-center", "py-sm-4", "py-3", 2, "background-color", "#212529"], [1, "container", "py-xl-5", "py-3"], [1, "w3l-footer", "footer-social-agile", "mb-4"], [1, "list-unstyled"], ["href", "#"], [1, "fab", "fa-facebook-f"], [1, "mx-1"], [1, "fab", "fa-twitter"], [1, "fab", "fa-dribbble"], [1, "ml-1"], [1, "fab", "fa-vk"], [1, "copy-right-grids", "text-light", "my-lg-5", "my-4", "pb-4"], ["src", "assets/images/chef.png", "alt", "", 1, "img-fluid", "chef-style"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\xA9 2018 The Celebration Cake Shop. All Rights Reserved. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/gallery-page/gallery-page.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/gallery-page/gallery-page.component.ts ***!
    \*******************************************************************/

  /*! exports provided: GalleryPageComponent */

  /***/
  function srcAppComponentsGalleryPageGalleryPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function () {
      return GalleryPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../product/product.component */
    "./src/app/components/product/product.component.ts");

    var GalleryPageComponent =
    /*#__PURE__*/
    function () {
      function GalleryPageComponent() {
        _classCallCheck(this, GalleryPageComponent);
      }

      _createClass(GalleryPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryPageComponent;
    }();

    GalleryPageComponent.??fac = function GalleryPageComponent_Factory(t) {
      return new (t || GalleryPageComponent)();
    };

    GalleryPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: GalleryPageComponent,
      selectors: [["app-gallery-page"]],
      decls: 1,
      vars: 0,
      template: function GalleryPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-product");
        }
      },
      directives: [_product_product_component__WEBPACK_IMPORTED_MODULE_1__["ProductComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS1wYWdlL2dhbGxlcnktcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GalleryPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallery-page',
          templateUrl: './gallery-page.component.html',
          styleUrls: ['./gallery-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/gallery/gallery.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/gallery/gallery.component.ts ***!
    \*********************************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppComponentsGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GalleryComponent =
    /*#__PURE__*/
    function () {
      function GalleryComponent() {
        _classCallCheck(this, GalleryComponent);
      }

      _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryComponent;
    }();

    GalleryComponent.??fac = function GalleryComponent_Factory(t) {
      return new (t || GalleryComponent)();
    };

    GalleryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: GalleryComponent,
      selectors: [["app-gallery"]],
      decls: 135,
      vars: 0,
      consts: [[1, "container-fluid", "order-form-w3ls", "pl-lg-0", 2, "margin", "20px auto"], [1, "agile_its_registration", "bg-white"], [1, "title-2", "mb-3", "text-center"], [1, "mb-4", "text-center"], [1, "row"], [1, "col-12", "col-sm-8", "col-md-3", "col-lg-3", 2, "margin-bottom", "15px"], [1, "card"], ["src", "assets/images/g1.jpg", "alt", "Vans", 1, "card-img"], [1, "card-img-overlay", "d-flex", "justify-content-end"], ["href", "#", 1, "card-link", "text-danger", "like"], [1, "fas", "fa-heart"], [1, "card-body"], [1, "card-title"], [1, "buy", "d-flex", "justify-content-between", "align-items-center"], [1, "price", "text-success"], [1, "mt-4"], ["href", "#", 1, "btn", "btn-danger", "btn-sm", "mt-3"], [1, "fas", "fa-shopping-cart"], ["src", "assets/images/g2.jpg", "alt", "Vans", 1, "card-img"], ["src", "assets/images/g3.jpg", "alt", "Vans", 1, "card-img"], ["src", "assets/images/g4.jpg", "alt", "Vans", 1, "card-img"], ["href", "#", 1, "btn", "btn-sm", "btn-danger", "mt-3"], ["src", "assets/images/g5.jpg", "alt", "Vans", 1, "card-img"], ["src", "assets/images/g7.jpg", "alt", "Vans", 1, "card-img"], [1, "col-12", "col-sm-8", "btn-sm", "col-md-3", "col-lg-3", 2, "margin-bottom", "15px"], ["src", "assets/images/g9.jpg", "alt", "Vans", 1, "card-img"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Order a Cake");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Black Forest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "$125");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Fruit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "$125");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, "Chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "$125");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](60, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, "Fruit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "$125");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Pineapple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "$125");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, " Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "Red Velvet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](99, "$125");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](105, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](108, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "Vanilla");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115, "$125");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](117, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, " Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Strawberry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](131, "$125");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, " Add to Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["body[_ngcontent-%COMP%] {\r\n    padding: 2rem 0rem;\r\n  }\r\n  \r\n  .like[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIHBhZGRpbmc6IDJyZW0gMHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmxpa2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallery',
          templateUrl: './gallery.component.html',
          styleUrls: ['./gallery.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.??fac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 51,
      vars: 0,
      consts: [[1, "mian-content"], [1, "sticky"], [1, "navbar", "navbar-expand-lg", "navbar-light"], [1, "logo", "text-left"], ["href", "index.html", 1, "navbar-brand"], ["src", "assets/images/logo.png", "alt", "", 1, "img-fluid"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-lg-auto", "text-lg-right", "text-center"], [1, "nav-item", "active"], ["routerLink", "/main", 1, "nav-link"], [1, "nav-item"], ["routerLink", "/galleryimg", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"], ["routerLink", "/productg", 1, "nav-link"], ["id", "slider-main"], [1, "banner-text-agile", "text-center"], [1, "container"], [1, "text-white", "font-weight-bold", "mb-3"], [1, "text-light"], ["type", "button", "data-toggle", "modal", "data-target", ".bd-example-modal-lg", 1, "btn", "btn-primary", "button", "mt-md-5", "mt-4"], ["id", "prev"], [1, "fas", "fa-chevron-left"], ["id", "slider"], ["id", "next"], [1, "fas", "fa-chevron-right"], ["id", "circles"], ["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade", "bd-example-modal-lg"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalCenterTitle", 1, "modal-title", "text-center"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "p-0"], ["src", "https://player.vimeo.com/video/58582025", 2, "border", "none"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "The Celebration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "ProductGallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h3", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "The Celebration - Cake Shop In Pune");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Open today until 8:00 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Shop Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Cake Bakery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "iframe", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/layout-page/layout-page.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/layout-page/layout-page.component.ts ***!
    \*****************************************************************/

  /*! exports provided: LayoutPageComponent */

  /***/
  function srcAppComponentsLayoutPageLayoutPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutPageComponent", function () {
      return LayoutPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var LayoutPageComponent =
    /*#__PURE__*/
    function () {
      function LayoutPageComponent() {
        _classCallCheck(this, LayoutPageComponent);
      }

      _createClass(LayoutPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutPageComponent;
    }();

    LayoutPageComponent.??fac = function LayoutPageComponent_Factory(t) {
      return new (t || LayoutPageComponent)();
    };

    LayoutPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LayoutPageComponent,
      selectors: [["app-layout-page"]],
      decls: 3,
      vars: 0,
      template: function LayoutPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0LXBhZ2UvbGF5b3V0LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LayoutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout-page',
          templateUrl: './layout-page.component.html',
          styleUrls: ['./layout-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main/main.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/main/main.component.ts ***!
    \***************************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppComponentsMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../gallery/gallery.component */
    "./src/app/components/gallery/gallery.component.ts");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent() {
        _classCallCheck(this, MainComponent);
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainComponent;
    }();

    MainComponent.??fac = function MainComponent_Factory(t) {
      return new (t || MainComponent)();
    };

    MainComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: MainComponent,
      selectors: [["app-main"]],
      decls: 164,
      vars: 0,
      consts: [["id", "products", 1, "featured-section", "py-5"], [1, "container", "py-xl-5", "py-lg-3"], [1, "title", "text-center", "mb-5"], [1, "text-dark", "mb-2"], [1, "content-bottom-in"], ["id", "flexiselDemo1"], [1, "w3l-specilamk"], [1, "row"], [1, "col-lg-6", "product-name-w3l"], [1, "font-weight-bold"], [1, "dont-inti-w3ls", "mt-4", "mb-2"], ["href", "#order", 1, "button-3", "active", "mt-5", "py-4", "scroll"], [1, "col-lg-6", "speioffer-agile"], ["src", "assets/images/product1.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/product2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/product3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/product4.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/product5.jpg", "alt", "", 1, "img-fluid"], ["id", "news", 1, "news-agile", "bg-cream", "py-5"], ["id", "order", 1, "col-lg-4", "order-form-w3ls", "pl-lg-0"], [1, "agile_its_registration", "bg-white"], [1, "title-2", "mb-3"], [1, "mb-4"], ["action", "#", "method", "post"], [1, "agileits-location", "form-group"], ["required", ""], ["value", ""], ["value", "1"], ["value", "2"], [1, "clear"], [1, "agileits-location", "w3ls-1", "form-group"], ["type", "submit", "value", "Order", 1, "agileinfo-order", "btn"], [1, "col-lg-8", "news-blog", "mt-lg-0", "mt-5"], [1, "title-2", "mb-md-5", "mb-4"], [1, "col-sm-6", "news-grids-agile"], [1, "news-top"], ["href", "single.html"], ["src", "assets/images/news1.jpg", "alt", "", 1, "img-fluid"], [1, "price-bottom", "bg-white", "p-4"], ["href", "single.html", 1, "text-dark"], [1, "mt-3"], [1, "col-sm-6", "news-grids-agile", "mt-sm-0", "mt-5"], ["src", "assets/images/news2.jpg", "alt", "", 1, "img-fluid"]],
      template: function MainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "New Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Create Tasty & Delicious Cakes To Make Your Day More Special!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Strawberry Cakes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuslaudantium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Eaque ipsa quae ab illo inventore veritatis et quasi architecto vitae dicta sunt explicabo, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuslaudantium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Order Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Dessert Cakes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuslaudantium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Eaque ipsa quae ab illo inventore veritatis et quasi architecto vitae dicta sunt explicabo, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuslaudantium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Order Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Vanilla Cakes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuslaudantium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, "Eaque ipsa quae ab illo inventore veritatis et quasi architecto vitae dicta sunt explicabo, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuslaudantium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Order Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuslaudantium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Eaque ipsa quae ab illo inventore veritatis et quasi architecto vitae dicta sunt explicabo, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuslaudantium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Order Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, "Chocolate Cakes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuslaudantium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Eaque ipsa quae ab illo inventore veritatis et quasi architecto vitae dicta sunt explicabo, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuslaudantium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "Order Now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "app-gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "h3", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](85, "Order a Cake");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](87, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "form", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "Shape");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, "Round");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "rectangle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, "square");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "custom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, "Levels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](107, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "Size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "4 inch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "6 inch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, "8 inch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "10 inch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](127, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, "Flavor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](133, "Chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](134, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](135, "Butterscotch ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, "Strawberry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, "Vanilla");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](140, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](141, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "h3", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](144, "Company News");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](145, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](152, "Sep 21st, 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "h5", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Sit voluptatem accusantium doloremque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](158, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](160, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](161, "Sep 21st, 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](162, "h5", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](163, "Sit voluptatem accusantium doloremque");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main',
          templateUrl: './main.component.html',
          styleUrls: ['./main.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/product/product.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/product/product.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppComponentsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent() {
        _classCallCheck(this, ProductComponent);
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductComponent;
    }();

    ProductComponent.??fac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)();
    };

    ProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      decls: 74,
      vars: 0,
      consts: [[1, "gallery", "py-5"], [1, "container", "py-xl-5", "py-lg-3"], [1, "title", "text-center", "mb-5"], [1, "text-dark", "mb-2"], [1, "row", "w3ls_portfolio_grids"], [1, "col-sm-4", "agileinfo_portfolio_grid"], [1, "w3_agile_portfolio_grid1"], ["href", "assets/images/g1.jpg", "title", "Cakes Bakery"], [1, "agileits_portfolio_sub_grid", "agileits_w3layouts_team_grid"], [1, "w3layouts_port_head"], ["src", "assets/images/g1.jpg", "alt", " ", 1, "img-fluid"], ["href", "assets/images/g2.jpg", "title", "Cakes Bakery"], ["src", "assets/images/g2.jpg", "alt", " ", 1, "img-fluid"], ["href", "assets/images/g3.jpg", "title", "Cakes Bakery"], ["src", "assets/images/g3.jpg", "alt", " ", 1, "img-fluid"], ["href", "assets/images/g4.jpg", "title", "Cakes Bakery"], ["src", "assets/images/g4.jpg", "alt", " ", 1, "img-fluid"], ["href", "assets/images/g5.jpg", "title", "Cakes Bakery"], ["src", "assets/images/g5.jpg", "alt", " ", 1, "img-fluid"], ["href", "assets/images/g6.jpg", "title", "Cakes Bakery"], ["src", "assets/images/g6.jpg", "alt", " ", 1, "img-fluid"], ["href", "assets/images/g7.jpg", "title", "Cakes Bakery"], ["src", "assets/images/g7.jpg", "alt", " ", 1, "img-fluid"], ["href", "assets/images/g8.jpg", "title", "Cakes Bakery"], ["src", "assets/images/g8.jpg", "alt", " ", 1, "img-fluid"], ["href", "assets/images/g9.jpg", "title", "Cakes Bakery"], ["src", "assets/images/g9.jpg", "alt", " ", 1, "img-fluid"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Browse Cakes By Flavour");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Black Forest");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Butterscotch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Chocolate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "fruit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Pineapple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Red Velvet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Kit Kat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, "Vanilla");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Strawberry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/sigle-product/sigle-product.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/sigle-product/sigle-product.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SigleProductComponent */

  /***/
  function srcAppComponentsSigleProductSigleProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigleProductComponent", function () {
      return SigleProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SigleProductComponent =
    /*#__PURE__*/
    function () {
      function SigleProductComponent() {
        _classCallCheck(this, SigleProductComponent);
      }

      _createClass(SigleProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SigleProductComponent;
    }();

    SigleProductComponent.??fac = function SigleProductComponent_Factory(t) {
      return new (t || SigleProductComponent)();
    };

    SigleProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SigleProductComponent,
      selectors: [["app-sigle-product"]],
      decls: 26,
      vars: 0,
      consts: [[1, "wrapper"], [1, "product-img"], ["src", "assets/images/g4.jpg", "height", "420", "width", "327"], [1, "product-info"], [1, "product-text"], [1, "product-price-btn"], ["type", "button"]],
      template: function SigleProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Harvest Vase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "by studio and friends");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Harvest Vases are a reinterpretation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " of peeled fruits and vegetables as");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " functional objects. The surfaces");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " appear to be sliced and pulled aside,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " allowing room for growth. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "78");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "$");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "buy now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: #fdf1ec;\r\n  }\r\n  \r\n  .wrapper[_ngcontent-%COMP%] {\r\n    height: 420px;\r\n    width: 654px;\r\n    margin: 50px auto;\r\n    border-radius: 7px 7px 7px 7px;\r\n    \r\n    box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);\r\n  }\r\n  \r\n  .product-img[_ngcontent-%COMP%] {\r\n    float: left;\r\n    height: 420px;\r\n    width: 327px;\r\n  }\r\n  \r\n  .product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    border-radius: 7px 0 0 7px;\r\n  }\r\n  \r\n  .product-info[_ngcontent-%COMP%] {\r\n    float: left;\r\n    height: 420px;\r\n    width: 327px;\r\n    border-radius: 0 7px 10px 7px;\r\n    background-color: #ffffff;\r\n  }\r\n  \r\n  .product-text[_ngcontent-%COMP%] {\r\n    height: 300px;\r\n    width: 327px;\r\n  }\r\n  \r\n  .product-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin: 0 0 0 38px;\r\n    padding-top: 52px;\r\n    font-size: 34px;\r\n    color: #474747;\r\n  }\r\n  \r\n  .product-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .product-price-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-family: 'Bentham', serif;\r\n  }\r\n  \r\n  .product-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin: 0 0 47px 38px;\r\n    font-size: 13px;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    color: #d2d2d2;\r\n    letter-spacing: 0.2em;\r\n  }\r\n  \r\n  .product-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    height: 125px;\r\n    margin: 0 0 0 38px;\r\n    font-family: 'Playfair Display', serif;\r\n    color: #8d8d8d;\r\n    line-height: 1.7em;\r\n    font-size: 15px;\r\n    font-weight: lighter;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .product-price-btn[_ngcontent-%COMP%] {\r\n    height: 103px;\r\n    width: 327px;\r\n    margin-top: 17px;\r\n    position: relative;\r\n  }\r\n  \r\n  .product-price-btn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: -13px;\r\n    height: 50px;\r\n    font-family: 'Trocchi', serif;\r\n    margin: 0 0 0 38px;\r\n    font-size: 28px;\r\n    font-weight: lighter;\r\n    color: #474747;\r\n  }\r\n  \r\n  span[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    height: 50px;\r\n    font-family: 'Suranna', serif;\r\n    font-size: 34px;\r\n  }\r\n  \r\n  .product-price-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    float: right;\r\n    display: inline-block;\r\n    height: 50px;\r\n    width: 176px;\r\n    margin: 0 40px 0 16px;\r\n    box-sizing: border-box;\r\n    border: transparent;\r\n    border-radius: 60px;\r\n    font-family: 'Raleway', sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.2em;\r\n    color: #ffffff;\r\n    background-color: #9cebd5;\r\n    cursor: pointer;\r\n    outline: none;\r\n  }\r\n  \r\n  .product-price-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: #79b0a1;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdsZS1wcm9kdWN0L3NpZ2xlLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFHdkMsaURBQWlEO0VBQ25EOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsYUFBYTtFQUNmOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWdsZS1wcm9kdWN0L3NpZ2xlLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjFlYztcclxuICB9XHJcbiAgXHJcbiAgLndyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIHdpZHRoOiA2NTRweDtcclxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4IDdweCA3cHggN3B4O1xyXG4gICAgLyogVklBIENTUyBNQVRJQyBodHRwczovL2dvby5nbC9jSWJuUyAqL1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTRweCAzMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMTRweCAzMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE0cHggMzJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtaW1nIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiA0MjBweDtcclxuICAgIHdpZHRoOiAzMjdweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtaW1nIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHggMCAwIDdweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtaW5mbyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICB3aWR0aDogMzI3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDdweCAxMHB4IDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXRleHQge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHdpZHRoOiAzMjdweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtdGV4dCBoMSB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDM4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTJweDtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIGNvbG9yOiAjNDc0NzQ3O1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC10ZXh0IGgxLFxyXG4gIC5wcm9kdWN0LXByaWNlLWJ0biBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmVudGhhbScsIHNlcmlmO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC10ZXh0IGgyIHtcclxuICAgIG1hcmdpbjogMCAwIDQ3cHggMzhweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjZDJkMmQyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMmVtO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC10ZXh0IHAge1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIG1hcmdpbjogMCAwIDAgMzhweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xyXG4gICAgY29sb3I6ICM4ZDhkOGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS43ZW07XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LXByaWNlLWJ0biB7XHJcbiAgICBoZWlnaHQ6IDEwM3B4O1xyXG4gICAgd2lkdGg6IDMyN3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMTdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtcHJpY2UtYnRuIHAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMTNweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVHJvY2NoaScsIHNlcmlmO1xyXG4gICAgbWFyZ2luOiAwIDAgMCAzOHB4O1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBjb2xvcjogIzQ3NDc0NztcclxuICB9XHJcbiAgXHJcbiAgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1N1cmFubmEnLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtcHJpY2UtYnRuIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTc2cHg7XHJcbiAgICBtYXJnaW46IDAgNDBweCAwIDE2cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5Y2ViZDU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1wcmljZS1idG4gYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OWIwYTE7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SigleProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sigle-product',
          templateUrl: './sigle-product.component.html',
          styleUrls: ['./sigle-product.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Rita\Desktop\cakesshop\UI\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map