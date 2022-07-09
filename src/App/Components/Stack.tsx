import React from 'react';
import '../Style.scss';
import StackSlider from './StackSlider';

export default function Stack() {
  return (
    <div className='stack'>
      <div className="stack_container">
        <h4 className="tools_text">SKILLS</h4>
        <h2 className="my_stack_text">What I Use In Development</h2>
        <div className="stack_description">My main tool in interface development is the react library. In addition, I own all of the following technologies:</div>
        <StackSlider/>
      </div>
    </div>
  )
}
