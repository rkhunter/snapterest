jest.autoMockOff();

describe('Collection utilities module', () => {
  it('converts ReactJS style to inline css', () => {
    const reactStyleToInline = require('../TestHelpers').reactStyleToInline;

    const imageStyle = {
      maxHeight: '100px',
      boxShadow: '20px 20px 10px 0px #000',
      border: '1px solid #f0f0f0',
    };

    expect(reactStyleToInline(imageStyle))
    .toBe('max-height:100px;box-shadow:20px 20px 10px 0px #000;border:1px solid #f0f0f0;');
  });
});
