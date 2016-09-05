jest.autoMockOff();

describe('CollectionExportForm component', () => {
  it('renders correctly', () => {
    const React = require('react');
    const ReactDOMServer = require('react-dom/server');
    const CollectionExportForm = require('../CollectionExportForm').default;

    const expectedResult = ReactDOMServer.renderToStaticMarkup(
      <CollectionExportForm htmlMarkup="<h1>Testing</h1>" />
    );

    const actualResult = '<form action="http://codepen.io/pen/define" method="POST" target="_blank" rel="noopener noreferrer" style="display:inline-block;"><input type="hidden" name="data" value="&lt;h1&gt;Testing&lt;/h1&gt;"/><button type="submit" class="btn btn-default">Export as HTML</button></form>';

    expect(expectedResult).toBe(actualResult);
  });
});
