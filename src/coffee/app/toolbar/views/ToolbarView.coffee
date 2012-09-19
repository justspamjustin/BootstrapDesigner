define ['framework/View','app/toolbar/templates/ToolbarTemplate','app/element/collections/ElementCollection','app/element/views/ElementView','app/element/models/ElementModel'], (View,ToolbarTemplate,ElementCollection,ElementView,ElementModel)->
  class ToolBarView extends View
    elementViews: []

    initialize: (opts)->
      View.prototype.initialize.call(@,opts)
      @selectedElementModel = new ElementModel()

    render: ->
      template = new ToolbarTemplate
      @$el.html(template.getHtml(@selectedElementModel.toJSON()))
      @viewDidRender()
      return

    viewDidRender: ->
      @renderElementViews()

    renderElementViews: ->
      elementCollection = new ElementCollection([
        {_elementType:'PrimaryButton',_displayType:'Preview',text:'Hello World'},
        {_elementType:'DefaultButton',_displayType:'Preview',text:'Hello World'},
        {_elementType:'DefaultInput',_displayType:'Preview',placeholderText:'Hello World'}
        {_elementType:'Modal',_displayType:'Preview',header:'Hello World', body:'One fine body...', cancelText: 'close',primaryButtonText: 'Save Changes'}
      ])
      elementCollection.each (model)=>
        @renderElementView(model)

    renderElementView: (model)->
      elementView = new ElementView(el: $('<li></li>').appendTo(@$('.element-list')),model: model)
      @elementViews[model.get('id')] = elementView
      elementView.render()
      elementView.on('addElement',@addElementToCanvas,@)

    addElementToCanvas: (model)->
      @setCurrentSelectedElement(model)
      @trigger('addElement',model)

    setCurrentSelectedElement: (model)->
      @selectedElementModel = model
      @render()

    events:
      'keyup input': 'onKeyupInput',
      'click .remove-element': 'onRemoveElement'

    onKeyupInput: (e)->
      $el = $(e.currentTarget)
      name = $el.attr('data-input-name')
      value = $el.val()
      @selectedElementModel.set(name,value)

    onRemoveElement: ->
      @selectedElementModel.trigger('remove')
