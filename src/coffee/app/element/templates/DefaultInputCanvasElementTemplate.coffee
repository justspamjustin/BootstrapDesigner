define ['framework/Template'],(Template) ->
  class PrimaryButtonElementTemplate extends Template
    template: """
    <input class="input element" type="text" placeholder="{{placeholderText}}" value="{{text}}"/>
    """