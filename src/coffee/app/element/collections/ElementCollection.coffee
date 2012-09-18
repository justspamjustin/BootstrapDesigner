define ['framework/Collection','app/element/models/ElementModel'], (Collection,ElementModel)->
  class ElementCollection extends Collection
    model: ElementModel