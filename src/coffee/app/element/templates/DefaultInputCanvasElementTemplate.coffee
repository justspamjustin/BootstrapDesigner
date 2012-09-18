define ['framework/Template'],(Template) ->
  class PrimaryButtonElementTemplate extends Template
    template: """
    <input class="input element" type="text" placeholder="{{placeholderText}}" value="{{text}}" style="width:{{width}};font-size:{{fontSize}};height:{{height}};top:{{y}};left:{{x}};z-index:{{z-index}};"/>
    """