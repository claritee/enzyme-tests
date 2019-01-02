import { render } from '../../enzyme';

import List from '../List';
import { wrap } from 'module';

describe('List tests', () => {
  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = render(<List items={items} />);

    wrapper.addClass('foo');

    // Expect the wrapper object to be defined
    // (1) Before ListItem using shallow and (2) using mount and (3) static rendering
    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(items.length);

    // After ListItem using shallow
    // expect(wrapper.find('ListItem')).toBeDefined();
    // expect(wrapper.find('ListItem')).toHaveLength(items.length);
  });

  it('renders a list item', () => {
    const items = ['Thor', 'Loki'];
    const wrapper = render(<List items={items} />);

    // Check if an element in the Component exists
    //expect(wrapper.contains(<li key='Thor' className="item">Thor</li >)).toBeTruthy();

    // With static rendering
    expect(wrapper.find('[key=Thor]')).toBeTruthy();
  });

  it('renders correct text in item', () => {
    const items = ['John', 'James', 'Luke'];
    const wrapper = render(<List items={items} />);

    //Before: (1) shallow without ListItem and (2) mount Expect the child of the first item to be an array
    //expect(wrapper.find('.item').get(0).props.children).toEqual('John');

    // After: static rendering 
    expect(wrapper.find('.item').get(0).children[0].data).toEqual('John');
  });
});