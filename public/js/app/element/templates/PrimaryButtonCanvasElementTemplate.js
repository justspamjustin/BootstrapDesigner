// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['framework/Template'], function(Template) {
    var PrimaryButtonElementTemplate;
    return PrimaryButtonElementTemplate = (function(_super) {

      __extends(PrimaryButtonElementTemplate, _super);

      function PrimaryButtonElementTemplate() {
        return PrimaryButtonElementTemplate.__super__.constructor.apply(this, arguments);
      }

      PrimaryButtonElementTemplate.prototype.template = "<div class=\"element primary-button btn btn-primary\">{{text}}</div>";

      return PrimaryButtonElementTemplate;

    })(Template);
  });

}).call(this);
