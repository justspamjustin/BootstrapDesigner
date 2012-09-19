// Generated by CoffeeScript 1.3.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['framework/Template'], function(Template) {
    var MainWindowTemplate;
    return MainWindowTemplate = (function(_super) {

      __extends(MainWindowTemplate, _super);

      function MainWindowTemplate() {
        return MainWindowTemplate.__super__.constructor.apply(this, arguments);
      }

      MainWindowTemplate.prototype.template = "<div class=\"well sidebar-nav\">\n  <ul class=\"nav nav-list element-details\">\n    <li class=\"nav-header\">Element Details</li>\n    {{#each _itemDetails}}\n    <li>\n      <div class=\"input-prepend\">\n        <span class=\"add-on\">{{name}}</span><input class=\"span2\" size=\"20\" type=\"text\" value=\"{{value}}\" data-input-name=\"{{name}}\"/>\n      </div>\n    </li>\n    {{/each}}\n    <div class=\"btn btn-danger remove-element\">Remove</div>\n  </ul>\n  <ul class=\"nav nav-list element-list\">\n    <li class=\"nav-header\">Elements</li>\n  </ul>\n</div>";

      return MainWindowTemplate;

    })(Template);
  });

}).call(this);
