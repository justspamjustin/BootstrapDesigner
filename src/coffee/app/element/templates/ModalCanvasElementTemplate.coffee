define ['framework/Template'],(Template) ->
  class extends Template
    template: """
    <div class="modal element" style="position: relative; top: {{top}}; left: {{left}}; margin: 0 auto 20px; z-index: {{z-index}}; max-width: 100%;width:{{width}};height:{{height}}">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3>{{header}}</h3>
      </div>
      <div class="modal-body">
        <p>{{body}}</p>
      </div>
      <div class="modal-footer">
        <a href="#" class="btn">{{cancelText}}</a>
        <a href="#" class="btn btn-primary">{{primaryButtonText}}</a>
      </div>
    </div>
    """