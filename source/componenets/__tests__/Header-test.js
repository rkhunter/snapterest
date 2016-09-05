jest.autoMockOff();

describe('Header component', () => {
  it('renders provided header text', () => {
    const React = require('react');
    const ReactTestUtils = require('react-addons-test-utils');
    const Header = require('../Header').default;

    const shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(<Header text="Testing..." />);
    const header = shallowRenderer.getRenderOutput();

    expect(header.type)
    .toBe('h2');
    expect(header.props.children)
    .toBe('Testing...');
  });

  it('renders correctly', () => {
    const React = require('react');
    const ReactDOMServer = require('react-dom/server');
    const Header = require('../Header').default;

    const actualRenderedResult = ReactDOMServer.renderToStaticMarkup(
      <Header />
    );

    const headerStyle = require('../../utils/TestHelpers')
    .reactStyleToInline(require('../Header/style'));

    const expectedRenderedResult =
    `<h2 class="header" style="${headerStyle}"></h2>`;

    expect(actualRenderedResult).toBe(expectedRenderedResult);
  });
});
