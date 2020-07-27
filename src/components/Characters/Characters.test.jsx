import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';


describe('many characters', () => {
  it('returns many characters', () => {
    const characters = [{
      name:'Shelley', 
      image:'https://vignette.wikia.nocookie.net/heyarnold/images/c/cb/Shelley.jpg/revision/latest/scale-to-width-down/310?cb=20120527025256'
    }, {
      name:'Mitzi',
      image:'https://vignette.wikia.nocookie.net/heyarnold/images/d/d9/Mitzi.png/revision/latest/scale-to-width-down/310?cb=20171212070331' }
    ];
    const wrapper = shallow(
      <Characters characters={characters}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
