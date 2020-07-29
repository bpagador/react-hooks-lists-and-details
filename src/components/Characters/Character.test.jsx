import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';


describe('single Character', () => {
  it('returns a single character', () => {
    const wrapper = shallow(
      <Character name="Shelley" image="https://vignette.wikia.nocookie.net/heyarnold/images/c/cb/Shelley.jpg/revision/latest/scale-to-width-down/310?cb=20120527025256" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
