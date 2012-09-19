// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['framework/View'], function(View) {
    var ElementView;
    return ElementView = (function(_super) {

      __extends(ElementView, _super);

      function ElementView() {
        return ElementView.__super__.constructor.apply(this, arguments);
      }

      ElementView.prototype.initialize = function(opts) {
        View.prototype.initialize.call(this, opts);
        this.model.on('change:_selected', this.render, this);
        return this.model.on('remove', this.remove, this);
      };

      ElementView.prototype.render = function() {
        var _this = this;
        require(['app/element/templates/' + this.model.get('_elementType') + this.model.get('_displayType') + 'ElementTemplate'], function(ElementTemplate) {
          var template;
          template = new ElementTemplate;
          _this.$el.html(template.getHtml(_this.model.toJSON()));
          return _this.viewDidRender();
        });
        return this;
      };

      ElementView.prototype.viewDidRender = function() {
        return this.updatePosition();
      };

      ElementView.prototype.updatePosition = function() {
        this.$('.element').css({
          left: this.parseForNumber(this.model.get('left')),
          top: this.parseForNumber(this.model.get('top')),
          width: this.parseForNumber(this.model.get('width')),
          height: this.parseForNumber(this.model.get('height')),
          'z-index': this.model.get('z-index')
        });
        if (this.model.get('_selected')) {
          $('.element').removeClass('selected');
          return this.$('.element').addClass('selected');
        }
      };

      ElementView.prototype.parseForNumber = function(value) {
        if (parseInt(value) !== NaN) {
          return parseInt(value);
        } else {
          return value;
        }
      };

      ElementView.prototype.events = {
        'click': 'onClick',
        'mousedown .element': 'onMouseDownElement'
      };

      ElementView.prototype.onClick = function(e) {
        if (this.model.get('_displayType') === 'Preview') {
          return this.trigger('addElement', this.model);
        }
      };

      ElementView.prototype.onMouseDownElement = function() {
        if (this.model.get('_displayType') === 'Canvas') {
          this.$('.element').addClass('dragging');
          return this.trigger('dragging', this.model);
        }
      };

      return ElementView;

    })(View);
  });

}).call(this);
