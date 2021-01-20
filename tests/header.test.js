import { h } from 'preact';
import Header from '../src/components/Header';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Header', () => {
  test('Header renders', () => {
    const context = shallow(<Header />);
    expect(context.find('h1 .top').text().toLowerCase()).toBe("where's my");
    expect(context.find('h1 .bottom').text().toLowerCase()).toBe('vaccine?');
  });
});
