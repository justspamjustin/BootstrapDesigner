define ['framework/View'], (View) ->
  class ElementView extends View
    render: ->
      require ['app/element/templates/'+@model.get('elementType')+@model.get('displayType')+'ElementTemplate'], (ElementTemplate) =>
        template = new ElementTemplate
        @$el.html(template.getHtml(@model.toJSON()))
      return

    events:
      'click': 'onClickElement'

    onClickElement: (e)->
      if(@model.get('displayType') == 'Preview')
        @trigger('addElement',@model)
        