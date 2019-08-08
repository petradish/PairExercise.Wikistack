const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div class="form-group">
      <label for="author" class="col-sm-2 control-label">Author Name</label>
      <div class="col-sm-10">
        <input id="author" name="author" type="text" class="form-control"/>
      </div>
    </div>
    <br>
    <div class="form-group">
      <label for="authorEmail" class="col-sm-2 control-label">Author Email</label>
      <div class="col-sm-10">
        <input id="email" name="authorEmail" type="email" class="form-control"/>
      </div>
    </div>
    <br>
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>
    <br>
    <div class="form-group">
      <label for="content" class="col-sm-2 control-label">Page Content</label>
      <div class="col-sm-10">
        <textarea id="content" name="content" rows="10" class="form-control"/></textarea>
      </div>
    </div>
    <br>
    <div class="form-group">
      <label for="status" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
        <input id="status" name="open" type="radio" value ="open" class="radio-inline"/>  Open
        <input id="status" name="closed" type="radio" value ="closed" class="radio-inline"/>  Closed
      </div>
    </div>
    <br>
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);