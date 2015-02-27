System.register(["d3"], function (_export) {
  "use strict";

  var d3, _prototypeProperties, Chart;
  return {
    setters: [function (_d3) {
      d3 = _d3["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Chart = (function () {
        function Chart(element) {
          this.element = element;

          this.matrix = [[11975, 5871, 8916, 2868]];
        }

        _prototypeProperties(Chart, {
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          attached: {
            value: function attached(element) {
              var self = this;
              console.log("Setting value");
              this.matrix = [[11975, 5871, 8916, 2868], [1951, 10048, 2060, 6171], [8010, 16145, 8090, 8045], [1013, 990, 940, 6907]];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Chart;
      })();
      _export("Chart", Chart);
    }
  };
});