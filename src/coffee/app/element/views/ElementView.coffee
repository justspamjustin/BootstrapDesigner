define ['framework/View'], (View) ->
  class ElementView extends View

    initialize: (opts)->
      View.prototype.initialize.call(@,opts)
      @model.on('change:_selected',@render,@)
      @model.on('remove',@remove,@)

    render: ->
      require ['app/element/templates/'+@model.get('_elementType')+@model.get('_displayType')+'ElementTemplate'], (ElementTemplate) =>
        template = new ElementTemplate
        @$el.html(template.getHtml(@model.toJSON()))
        @viewDidRender()
      return @

    viewDidRender: ->
      @updatePosition()

    updatePosition: ->
      @$('.element').css({
        left: @parseForNumber(@model.get('left')),
        top: @parseForNumber(@model.get('top')),
        width: @parseForNumber(@model.get('width')),
        height: @parseForNumber(@model.get('height')),
        'font-size': @parseForNumber(@model.get('font-size')),
        'z-index': @model.get('z-index')
      })
      if(@model.get('_selected'))
        $('.element').removeClass('selected')
        @$('.element').addClass('selected')

    parseForNumber: (value)->
      if(parseInt(value) != NaN)
        return parseInt(value)
      else
        return value

    events:
      'click': 'onClick',
      'mousedown .element': 'onMouseDownElement'

    onClick: (e)->
      if(@model.get('_displayType') == 'Preview')
        @trigger('addElement',@model)

    onMouseDownElement: ->
      if(@model.get('_displayType') == 'Canvas')
        @$('.element').addClass('dragging')
        @trigger('dragging',@model)

        