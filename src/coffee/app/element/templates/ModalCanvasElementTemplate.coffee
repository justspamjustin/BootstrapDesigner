define ['framework/Template'],(Template) ->
  class extends Template
    template: """
    <div class="modal" style="position: relative; top: {{y}}; left: {{x}}; margin: 0 auto 20px; z-index: {{z-index}}; max-width: 100%;width:{{width}};height:{{height}}">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h3>{{header}}</h3>
      </div>
      <div class="modal-body">
        <p>{{body}}</p>
      </div>
      <div class="modal-footer">
        <a href="#" class="btn">Close</a>
        <a href="#" class="btn btn-primary">Save changes</a>
      </div>
    </div>
    """