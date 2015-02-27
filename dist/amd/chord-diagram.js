define(["exports", "aurelia-templating"], function (exports, _aureliaTemplating) {
  "use strict";

  var _prototypeProperties = function (child, staticProps, instanceProps) {
    if (staticProps) Object.defineProperties(child, staticProps);
    if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
  };

  var Behavior = _aureliaTemplating.Behavior;
  var ChordDiagramAttachedBehavior = (function () {
    function ChordDiagramAttachedBehavior(element) {
      this.element = element;
      this.initialized = false;
    }

    _prototypeProperties(ChordDiagramAttachedBehavior, {
      metadata: {
        value: function metadata() {
          return Behavior.attachedBehavior("chord-diagram").withProperty("value", "valueChanged", "chord-diagram");
        },
        writable: true,
        enumerable: true,
        configurable: true
      },
      inject: {
        value: function inject() {
          return [Element];
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    }, {
      valueChanged: {
        value: function valueChanged(newValue) {
          console.log("Value changed - ", newValue);
          if (!this.initialized) {
            var groupTicks = function (d) {
              var k = (d.endAngle - d.startAngle) / d.value;
              return d3.range(0, d.value, 1000).map(function (v, i) {
                return {
                  angle: v * k + d.startAngle,
                  label: i % 5 ? null : v / 1000 + "k"
                };
              });
            };

            var fade = function (opacity) {
              return function (g, i) {
                self.svg.selectAll(".chord path").filter(function (d) {
                  return d.source.index != i && d.target.index != i;
                }).transition().style("opacity", opacity);
              };
            };

            var chord = d3.layout.chord().padding(0.05).sortSubgroups(d3.descending).matrix(newValue);

            var width = 960,
                height = 500,
                innerRadius = Math.min(width, height) * 0.41,
                outerRadius = innerRadius * 1.1;

            var fill = d3.scale.ordinal().domain(d3.range(4)).range(["#000000", "#FFDD89", "#957244", "#F26223"]);

            self.svg = d3.select(this.element).append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

            self.svg.append("g").selectAll("path").data(chord.groups).enter().append("path").style("fill", function (d) {
              return fill(d.index);
            }).style("stroke", function (d) {
              return fill(d.index);
            }).attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius)).on("mouseover", fade(0.1)).on("mouseout", fade(1));

            var ticks = self.svg.append("g").selectAll("g").data(chord.groups).enter().append("g").selectAll("g").data(groupTicks).enter().append("g").attr("transform", function (d) {
              return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")" + "translate(" + outerRadius + ",0)";
            });

            ticks.append("line").attr("x1", 1).attr("y1", 0).attr("x2", 5).attr("y2", 0).style("stroke", "#000");

            ticks.append("text").attr("x", 8).attr("dy", ".35em").attr("transform", function (d) {
              return d.angle > Math.PI ? "rotate(180)translate(-16)" : null;
            }).style("text-anchor", function (d) {
              return d.angle > Math.PI ? "end" : null;
            }).text(function (d) {
              return d.label;
            });

            self.svg.append("g").attr("class", "chord").selectAll("path").data(chord.chords).enter().append("path").attr("d", d3.svg.chord().radius(innerRadius)).style("fill", function (d) {
              return fill(d.target.index);
            }).style("opacity", 1);

            this.initialized = true;
          } else {
            self.svg.selectAll("path").data([newValue]);
          }
        },
        writable: true,
        enumerable: true,
        configurable: true
      }
    });

    return ChordDiagramAttachedBehavior;
  })();

  exports.ChordDiagramAttachedBehavior = ChordDiagramAttachedBehavior;
});