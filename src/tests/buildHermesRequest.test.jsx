import buildHermesRequest from '../buildHermesRequest';

const question = {};
const services = [
  {
    url: '/answer',
    name: 'answer',
    options: {
      max_connectivity: {
        default: -1,
      },
    },
    description: '',
  },
  {
    url: '/combobulate',
    name: 'combobulate',
    options: {
      max_combobulation: {
        default: '',
      },
    },
  },
];

let request;

describe('Build Hermes Request Function', () => {
  beforeEach(() => {
    request = buildHermesRequest(services, question);
  });
  afterEach(() => {
    request = null;
  });
  test('passes the question through as message', () => {
    expect(request.message).toStrictEqual(question);
  });
  test('sets the actions correctly', () => {
    expect(request.actions[0]).toStrictEqual({
      url: 'http://robokop.renci.org:4868/answer',
      options: {
        max_connectivity: -1,
      },
    });
  });
  test('doesn\'t include blank options', () => {
    request = buildHermesRequest(services, question);
    expect(request.actions[1]).toStrictEqual({
      url: 'http://robokop.renci.org:4868/combobulate',
      options: {},
    });
  });
});
