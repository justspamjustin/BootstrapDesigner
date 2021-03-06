define ['framework/Model'], (Model) ->
  class ElementModel extends Model
    defaults:
      left: 100,
      top: 100,
      width: 'inherit',
      height: 'inherit',
      'font-size': 14,
      'z-index':0

    initialize: (opts)->
      Model.prototype.initialize.call(@,opts)
      @aggregate()

    aggregate: ->
      @set('_itemDetails',@getItemDetails())

    getItemDetails: ->
      itemDetails = []
      attributes = @toJSON()
      for own name, value of attributes
        if(name.indexOf('_') == -1)
          itemDetails.push({
            name: name,
            value: value
          })
      return itemDetails

    setAsSelected: ->
      @collection.resetSelections()
      @set('_selected',true)
      @aggregate()
