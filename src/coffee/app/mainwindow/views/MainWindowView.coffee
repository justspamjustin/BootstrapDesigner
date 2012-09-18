define ['framework/View','app/mainwindow/templates/MainWindowTemplate','app/toolbar/views/ToolbarView','app/element/views/ElementView'], (View,MainWindowTemplate,ToolbarView,ElementView)->
  class MainWindowView extends View
    render: ->
      template = new MainWindowTemplate
      @$el.html(template.getHtml())
      @viewDidRender()
      return

    viewDidRender: ->
      @renderToolbar()

    renderToolbar: ->
      @toolbarView = new ToolbarView(el: @$('#toolbar'))
      @toolbarView.render()
      @toolbarView.on('addElement',@addElementToCanvas,@)

    addElementToCanvas: (model)->
      model.set('_displayType','Canvas',{trigger: false});
      elementView = new ElementView(model: model)
      elementView.on 'selected',(model)=>
        @toolbarView.setCurrentSelectedElement(model)
      $(elementView.render().el).appendTo(@$('#canvas'))
      model.on 'change', =>
        elementView.render()