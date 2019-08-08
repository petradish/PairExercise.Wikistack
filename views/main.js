const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (pages) => layout(html`
  <h3>Pages</h3>
  <hr>
  <form method="GET" action="/wiki/search">
    <input type="text" name="search" />
    <button type="submit">Search</button>
  </form>
  <hr>
  <div class="pages-main">
  <ul class="list-unstyled">
    <ul>
      ${pages.map(page => html`<li><a href="/wiki/${page.dataValues.slug}">${page.dataValues.title} by author placeholder </a></li>`
      )}
    </ul>
  </ul>
  </div>`);