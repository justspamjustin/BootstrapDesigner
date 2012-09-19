// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['framework/Template'], function(Template) {
    return (function(_super) {

      __extends(_Class, _super);

      function _Class() {
        return _Class.__super__.constructor.apply(this, arguments);
      }

      _Class.prototype.template = "<div class=\"modal element\" style=\"position: relative; top: {{top}}; left: {{left}}; margin: 0 auto 20px; z-index: {{z-index}}; max-width: 100%;width:{{width}};height:{{height}}\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n    <h3>{{header}}</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{body}}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"#\" class=\"btn\">{{cancelText}}</a>\n    <a href=\"#\" class=\"btn btn-primary\">{{primaryButtonText}}</a>\n  </div>\n</div>";

      return _Class;

    })(Template);
  });

}).call(this);
