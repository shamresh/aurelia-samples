System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, _prototypeProperties, App;
  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      App = (function () {
        function App(router) {
          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia";
            config.map([{ route: ["", "layout"], moduleId: "layout", nav: true, title: "Compose", someProperty: "rocks" }, { route: ["markdown", "markdown.editor"], moduleId: "markdown.editor", nav: true, title: "Markdown" }, { route: ["html", "html.render"], moduleId: "html.render", nav: true, title: "HTML Render" }, { route: ["knockout"], moduleId: "knockout", nav: true, title: "Knockout" }, { route: ["d3chart"], moduleId: "chart", nav: true, title: "d3 sample" }]);
          });
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [Router];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return App;
      })();
      _export("App", App);
    }
  };
});