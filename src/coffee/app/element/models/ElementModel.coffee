define ['framework/Model'], (Model) ->
  class ElementModel extends Model
    defaults:
      x: 100,
      y: 100,
      width: 'inherit',
      height: 'inherit',
      'z-index':0

    initialize: (opts)->
      Model.prototype.initialize.call(@,opts)
      @aggregate()

    aggregate: ->
      @set('itemDetails',@getItemDetails())

    getItemDetails: ->
      itemDetails = []
      attributes = @toJSON()
      for own name, value of attributes
        if(name.indexOf('Type') == -1)
          itemDetails.push({
            name: name,
            value: value
          })
      return itemDetails