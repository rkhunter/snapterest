jest.autoMockOff();

describe('TweetList component', () => {
  const minProps = {
    tweets: {
      766633134658027520: {
        text: 'I started on a new school yesterday and I kinda has a crush on my classmate https://t.co/ZMK0zaldXg',
        id: '766633134658027520',
        user: {
          id: '1047434029',
        },
        media: [
          {
            url: 'http://pbs.twimg.com/media/CqOgw_nWYAAe_da.jpg',
          },
        ],
        coordinates: {
          latitude: null,
          longitude: null,
        },
      },
      766633695105155073: {
        text: 'My friend is a proper lady @Toibaobao https://t.co/ME1LVbjn6E #wow https://t.co/qGcesvMi3T',
        id: '766633695105155073',
        user: {
          id: '4424081414',
        },
        media: [
          {
            url: 'http://pbs.twimg.com/media/CqOhSBoWcAES5Gw.jpg',
          },
        ],
        coordinates: {
          latitude: null,
          longitude: null,
        },
      },
    },
  };

  it('get list of tweet IDs correctly', () => {
    const React = require('react');
    const ReactTestUtils = require('react-addons-test-utils');
    const TweetList = require('../TweetList').default;

    const tweetlist = ReactTestUtils.renderIntoDocument(
      <TweetList {...minProps} />
    );
    const expectedList = tweetlist.getListOfTweetIds();
    const actualList = [
      '766633134658027500',
      '766633695105155100',
    ];

    expect(expectedList).toEqual(actualList); // 😑
  });
});
