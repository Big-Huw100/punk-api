import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  let wrapper;
  const setSearchInput = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<SearchBar setSearchInput={setSearchInput} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders a search input', () => {
    expect(wrapper.find('input[type="text"]')).toHaveLength(1);
  });

  it('calls setSearchInput on input change', () => {
    const input = wrapper.find('input[type="text"]');
    input.simulate('change', { target: { value: 'test' } });
    expect(setSearchInput).toHaveBeenCalledWith('test');
  });
});
