define ['framework/View','app/mainwindow/templates/MainWindowTemplate','app/toolbar/views/ToolbarView','app/element/views/ElementView'], (View,MainWindowTemplate,ToolbarView,ElementView)->
  class MainWindowView extends View
    render: ->
      template = new MainWindowTemplate
      @$el.html(template.getHtml())
      @viewDidRender()
      return

    viewDidRender: ->
      @renderToolbar()
      @resizeCanvas()

    renderToolbar: ->
      @toolbarView = new ToolbarView(el: @$('#toolbar'))
      @toolbarView.render()
      @toolbarView.on('addElement',@addElementToCanvas,@)

    resizeCanvas: ->
      @$('#canvas').css('height',$(window).height());
      @$('#canvas').css('width',$(window).width()-@$('#toolbar').outerWidth());

    addElementToCanvas: (model)->
      model.set('_displayType','Canvas',{trigger: false});
      elementView = new ElementView(model: model)
      elementView.on 'selected',(model)=>
        @toolbarView.setCurrentSelectedElement(model)
      elementView.on 'dragging',(model)=>
        @draggingModel = model
      $(elementView.render().el).appendTo(@$('#canvas'))
      model.on 'change', =>
        elementView.render()

    events:
      'click': 'onClick',
      'mouseup': 'onMouseUp',
      'mousemove': 'onMouseMove'

    onClick: ->
      @$('.selected').removeClass('selected')

    onMouseUp: (e)->
      if(@$('.dragging').length > 0)
        top = e.clientY - @$('#canvas').position().top
        left = e.clientX - @$('#canvas').position().left
        @draggingModel.set('y',top)
        @draggingModel.set('x',left)
        @$('.dragging').removeClass('dragging')
        @draggingModel.setAsSelected()
        @toolbarView.setCurrentSelectedElement(@draggingModel)


    onMouseMove: (e)->
      e.preventDefault()
      if(@$('.dragging').length > 0)
        top = e.clientY - @$('#canvas').position().top
        left = e.clientX - @$('#canvas').position().left
        @$('.dragging').css({
          top: top,
          left: left
        })