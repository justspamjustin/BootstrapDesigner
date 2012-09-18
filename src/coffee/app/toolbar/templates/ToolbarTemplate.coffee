define ['framework/Template'], (Template) ->
  class MainWindowTemplate extends Template
    template: """
    <div class="well sidebar-nav">
      <ul class="nav nav-list element-details">
        <li class="nav-header">Element Details</li>
        {{#each itemDetails}}
        <li>
          <div class="input-prepend">
            <span class="add-on">{{name}}</span><input class="span2" size="20" type="text" value="{{value}}" data-input-name="{{name}}"/>
          </div>
        </li>
        {{/each}}
      </ul>
      <ul class="nav nav-list element-list">
        <li class="nav-header">Elements</li>
      </ul>
    </div>
    """