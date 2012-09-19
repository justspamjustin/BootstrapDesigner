// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['framework/View', 'app/toolbar/templates/ToolbarTemplate', 'app/element/collections/ElementCollection', 'app/element/views/ElementView', 'app/element/models/ElementModel'], function(View, ToolbarTemplate, ElementCollection, ElementView, ElementModel) {
    var ToolBarView;
    return ToolBarView = (function(_super) {

      __extends(ToolBarView, _super);

      function ToolBarView() {
        return ToolBarView.__super__.constructor.apply(this, arguments);
      }

      ToolBarView.prototype.elementViews = [];

      ToolBarView.prototype.initialize = function(opts) {
        View.prototype.initialize.call(this, opts);
        return this.selectedElementModel = new ElementModel();
      };

      ToolBarView.prototype.render = function() {
        var template;
        template = new ToolbarTemplate;
        this.$el.html(template.getHtml(this.selectedElementModel.toJSON()));
        this.viewDidRender();
      };

      ToolBarView.prototype.viewDidRender = function() {
        return this.renderElementViews();
      };

      ToolBarView.prototype.renderElementViews = function() {
        var elementCollection,
          _this = this;
        elementCollection = new ElementCollection([
          {
            _elementType: 'PrimaryButton',
            _displayType: 'Preview',
            text: 'Hello World'
          }, {
            _elementType: 'DefaultButton',
            _displayType: 'Preview',
            text: 'Hello World'
          }, {
            _elementType: 'DefaultInput',
            _displayType: 'Preview',
            placeholderText: 'Hello World'
          }, {
            _elementType: 'Modal',
            _displayType: 'Preview',
            header: 'Hello World',
            body: 'One fine body...',
            cancelText: 'close',
            primaryButtonText: 'Save Changes'
          }
        ]);
        return elementCollection.each(function(model) {
          return _this.renderElementView(model);
        });
      };

      ToolBarView.prototype.renderElementView = function(model) {
        var elementView;
        elementView = new ElementView({
          el: $('<li></li>').appendTo(this.$('.element-list')),
          model: model
        });
        this.elementViews[model.get('id')] = elementView;
        elementView.render();
        return elementView.on('addElement', this.addElementToCanvas, this);
      };

      ToolBarView.prototype.addElementToCanvas = function(model) {
        this.setCurrentSelectedElement(model);
        return this.trigger('addElement', model);
      };

      ToolBarView.prototype.setCurrentSelectedElement = function(model) {
        this.selectedElementModel = model;
        return this.render();
      };

      ToolBarView.prototype.events = {
        'keyup input': 'onKeyupInput'
      };

      ToolBarView.prototype.onKeyupInput = function(e) {
        var $el, name, value;
        $el = $(e.currentTarget);
        name = $el.attr('data-input-name');
        value = $el.val();
        return this.selectedElementModel.set(name, value);
      };

      return ToolBarView;

    })(View);
  });

}).call(this);
