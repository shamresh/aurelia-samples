define(["exports", "./models", "sortable"], function (exports, _models, _sortable) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var _interopRequire = function (obj) {
    return obj && (obj["default"] || obj);
  };

  var Models = _models.Models;
  var sortable = _interopRequire(_sortable);

  var Column = (function () {
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

  exports.Column = Column;


  Array.prototype.move = function (old_index, new_index) {
    var element = this[old_index];
    this.splice(old_index, 1);
    this.splice(new_index, 0, element);
  };
});