define [], ->
  class Template
    template: ''
    getHtml: (opts) ->
      Handlebars.compile(@template)(opts)