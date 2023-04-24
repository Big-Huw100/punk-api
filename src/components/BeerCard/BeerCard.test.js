import React from 'react';
import { shallow } from 'enzyme';
import BeerCard from './BeerCard';

describe('BeerCard', () => {
  const beer = {
    id: 1,
    image_url: 'https://example.com/image.jpg',
    name: 'Test Beer',
    tagline: 'Test Tagline',
  };

  it('renders without crashing', () => {
    shallow(<BeerCard beer={beer} />);
  });

  it('displays the beer name', () => {
    const wrapper = shallow(<BeerCard beer={beer} />);
    expect(wrapper.find('h1').text()).toEqual(beer.name);
  });

  it('displays the beer tagline', () => {
    const wrapper = shallow(<BeerCard beer={beer} />);
    expect(wrapper.find('p').text()).toEqual(beer.tagline);
  });

  it('displays the beer image', () => {
    const wrapper = shallow(<BeerCard beer={beer} />);
    expect(wrapper.find('img').prop('src')).toEqual(beer.image_url);
  });
});