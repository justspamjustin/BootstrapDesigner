// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['framework/View', 'app/mainwindow/templates/MainWindowTemplate', 'app/toolbar/views/ToolbarView', 'app/element/views/ElementView'], function(View, MainWindowTemplate, ToolbarView, ElementView) {
    var MainWindowView;
    return MainWindowView = (function(_super) {

      __extends(MainWindowView, _super);

      function MainWindowView() {
        return MainWindowView.__super__.constructor.apply(this, arguments);
      }

      MainWindowView.prototype.render = function() {
        var template;
        template = new MainWindowTemplate;
        this.$el.html(template.getHtml());
        this.viewDidRender();
      };

      MainWindowView.prototype.viewDidRender = function() {
        this.renderToolbar();
        return this.resizeCanvas();
      };

      MainWindowView.prototype.renderToolbar = function() {
        this.toolbarView = new ToolbarView({
          el: this.$('#toolbar')
        });
        this.toolbarView.render();
        return this.toolbarView.on('addElement', this.addElementToCanvas, this);
      };

      MainWindowView.prototype.resizeCanvas = function() {
        this.$('#canvas').css('height', $(window).height());
        return this.$('#canvas').css('width', $(window).width() - this.$('#toolbar').outerWidth());
      };

      MainWindowView.prototype.addElementToCanvas = function(model) {
        var elementView,
          _this = this;
        model.set('_displayType', 'Canvas', {
          trigger: false
        });
        elementView = new ElementView({
          model: model
        });
        elementView.on('selected', function(model) {
          return _this.toolbarView.setCurrentSelectedElement(model);
        });
        elementView.on('dragging', function(model) {
          return _this.draggingModel = model;
        });
        $(elementView.render().el).appendTo(this.$('#canvas'));
        return model.on('change', function() {
          return elementView.render();
        });
      };

      MainWindowView.prototype.events = {
        'click': 'onClick',
        'mouseup': 'onMouseUp',
        'mousemove': 'onMouseMove'
      };

      MainWindowView.prototype.onClick = function() {
        return this.$('.selected').removeClass('selected');
      };

      MainWindowView.prototype.onMouseUp = function(e) {
        var left, top;
        if (this.$('.dragging').length > 0) {
          top = e.clientY - this.$('#canvas').position().top;
          left = e.clientX - this.$('#canvas').position().left;
          this.draggingModel.set('top', top);
          this.draggingModel.set('left', left);
          this.$('.dragging').removeClass('dragging');
          this.draggingModel.setAsSelected();
          return this.toolbarView.setCurrentSelectedElement(this.draggingModel);
        }
      };

      MainWindowView.prototype.onMouseMove = function(e) {
        var left, top;
        e.preventDefault();
        if (this.$('.dragging').length > 0) {
          top = e.clientY - this.$('#canvas').position().top;
          left = e.clientX - this.$('#canvas').position().left;
          return this.$('.dragging').css({
            top: top,
            left: left
          });
        }
      };

      return MainWindowView;

    })(View);
  });

}).call(this);
