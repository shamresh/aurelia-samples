System.register(["./models", "sortable"], function (_export) {
  "use strict";

  var Models, sortable, _prototypeProperties, Column;
  return {
    setters: [function (_models) {
      Models = _models.Models;
    }, function (_sortable) {
      sortable = _sortable["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      Column = (function () {
        function Column() {
          this.column = new Models.Column();
        }

        _prototypeProperties(Column, null, {
          activate: {
            value: function activate(col) {
              this.column.id = col.id;
              this.column.name = col.name;
              this.column.widgets = col.widgets;
              this.column.width = col.width;
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          addWidget: {
            value: function addWidget() {
              this.column.widgets.push(new Models.Widget());
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          attached: {
            value: function attached() {
              var list = document.querySelectorAll(".column")[0];
              console.log(list);
              sortable.create(list, {
                animation: 150,
                draggable: ".widget-row"
              });
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return Column;
      })();
      _export("Column", Column);
    }
  };
});