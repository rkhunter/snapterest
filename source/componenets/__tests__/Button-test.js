jest.autoMockOff();

describe('Button component', () => {
  it('calls handler function on click', () => {
    const React = require('react');
    const ReactTestUtils = require('react-addons-test-utils');
    const Button = require('../Button').default;

    const handleClick = jest.genMockFunction();

    const button = ReactTestUtils.renderIntoDocument(
      <Button handleClick={handleClick} />
    );
    const buttonInstance = ReactTestUtils.findRenderedDOMComponentWithTag(button, 'button');

    ReactTestUtils.Simulate.click(buttonInstance);

    expect(handleClick).toBeCalled();

    const numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;

    expect(numberOfCallsMadeIntoMockFunction).toBe(1);
  });
});
