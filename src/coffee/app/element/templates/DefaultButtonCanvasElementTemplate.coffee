define ['framework/Template'],(Template) ->
  class PrimaryButtonElementTemplate extends Template
    template: """
    <div class="element primary-button btn" style="width:{{width}};font-size:{{fontSize}};height:{{height}};top:{{top}};left:{{left}};z-index:{{z-index}};">{{text}}</div>
    """