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
              console.log(this.column.widgets);
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          attached: {
            value: function attached() {
              var _this = this;
              sortable.create(this.el, {
                animation: 150,
                draggable: ".widget-row",
                onEnd: function (evt) {
                  _this.column.widgets.move(evt.oldIndex, evt.newIndex);
                  console.log(_this.column.widgets);
                }
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

      Array.prototype.move = function (old_index, new_index) {
        var element = this[old_index];
        this.splice(old_index, 1);
        this.splice(new_index, 0, element);
      };
    }
  };
});