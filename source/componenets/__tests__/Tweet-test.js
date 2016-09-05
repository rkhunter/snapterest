jest.autoMockOff();

describe('Tweet component', () => {
  it('calls handler function on click', () => {
    const React = require('react');
    const ReactTestUtils = require('react-addons-test-utils');
    const Tweet = require('../Tweet').default;

    const sample = {
      tweet: {
        text: 'Nothing more rewarding than absorbing the solitude of nature and the culture of city hubs. #PNW is calling my name. https://t.co/G62NSfkfXG',
        id: '766309254596669440',
        user: {
          id: '43342626',
        },
        media: [
          {
            url: 'http://pbs.twimg.com/media/CqJ6M5DVMAEjY5-.jpg',
          },
        ],
        coordinates: {
          latitude: null,
          longitude: null,
        },
      },
      onImageClick: jest.genMockFunction(),
    };

    const tweet = ReactTestUtils.renderIntoDocument(
      <Tweet {...sample} />
    );
    const tweetInstance = ReactTestUtils.findRenderedDOMComponentWithTag(tweet, 'img');

    ReactTestUtils.Simulate.click(tweetInstance);

    const { onImageClick: handleClick } = sample;

    expect(handleClick).toBeCalled();

    const numberOfCallsMadeIntoMockFunction = handleClick.mock.calls.length;

    expect(numberOfCallsMadeIntoMockFunction).toBe(1);
  });

  it('error is thrown if no tweet is set', () => {
    const React = require('react');
    const ReactTestUtils = require('react-addons-test-utils');
    const Tweet = require('../Tweet').default;

    let badProps;
    // eslint-disable-next-line no-console
    console.error = jasmine.createSpy('error');
    const duck = () =>
      ReactTestUtils.renderIntoDocument(<Tweet {...badProps} />);

    expect(duck)
    .toThrowError();
    // eslint-disable-next-line no-console
    expect(console.error.calls.mostRecent().args[0])
    .toMatch(/(Tweet must be set.)/);
  });

  it('error is thrown if no media found', () => {
    const React = require('react');
    const ReactTestUtils = require('react-addons-test-utils');
    const Tweet = require('../Tweet').default;

    const sampleWithoutMedia = {
      tweet: {
        text: 'Nothing more rewarding than absorbing the solitude of nature and the culture of city hubs. #PNW is calling my name. https://t.co/G62NSfkfXG',
        id: '766309254596669440',
        user: {
          id: '43342626',
        },
        coordinates: {
          latitude: null,
          longitude: null,
        },
      },
      onImageClick: () => {},
    };
    // eslint-disable-next-line no-console
    console.error = jasmine.createSpy('error');
    const duck = () =>
      ReactTestUtils.renderIntoDocument(<Tweet {...sampleWithoutMedia} />);

    expect(duck)
    .toThrowError();
    // eslint-disable-next-line no-console
    expect(console.error.calls.mostRecent().args[0])
    .toMatch(/(Tweet must have an image.)/);
  });

  it('renders correctly', () => {
    const React = require('react');
    const ReactDOMServer = require('react-dom/server');
    const Tweet = require('../Tweet').default;

    const sample = {
      tweet: {
        text: 'Nothing more rewarding than absorbing the solitude of nature and the culture of city hubs. #PNW is calling my name. https://t.co/G62NSfkfXG',
        id: '766309254596669440',
        user: {
          id: '43342626',
        },
        media: [
          {
            url: 'http://pbs.twimg.com/media/CqJ6M5DVMAEjY5-.jpg',
          },
        ],
        coordinates: {
          latitude: null,
          longitude: null,
        },
      },
      onImageClick: () => {},
    };

    const actualRenderedResult = ReactDOMServer.renderToStaticMarkup(
      <Tweet {...sample} />
    );

    const tweetStyle =
    require('../../utils/TestHelpers').reactStyleToInline(
      require('../Tweet/style').tweetStyle
    );
    const imageStyle =
    require('../../utils/TestHelpers').reactStyleToInline(
      require('../Tweet/style').imageStyle
    );

    const expectedRenderedResult = `<div style="${tweetStyle}"><img src="http://pbs.twimg.com/media/CqJ6M5DVMAEjY5-.jpg" style="${imageStyle}" alt=""/></div>`;

    expect(actualRenderedResult).toBe(expectedRenderedResult);
  });
});
