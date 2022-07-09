import React, { useState, useEffect } from 'react';
import '../Style.scss';
import Tool from './Tool';

export default function StackSlider() {

    const [offsetNumber, setOffsetNumber] = useState<number>(0);
    const [offset, setOffset] = useState<string>(`p${offsetNumber}`);

    const nextSlide = () => {
        if(offsetNumber < 3){
            setOffsetNumber(offsetNumber + 1);
        }else{
            setOffsetNumber(0);
        }
    }

    const prevSlide = () => {
        if(offsetNumber > 0){
            setOffsetNumber(offsetNumber - 1);
        }else{
            setOffsetNumber(3);
        }
    }

    useEffect(() => {
        setOffset(`p${offsetNumber}`);
        console.log('render');
    }, [offsetNumber]);

    const slides = 

    <div className="slider_container" id={offset}>
        <Tool icon={'../../img/js.png'} title={'JavaScript'} color={'yellow'} level={'lvl_90'} />
        <Tool icon={'../../img/react.png'} title={'React'} color={'light-blue'} level={'lvl_82'} />
        <Tool icon={'../../img/redux.png'} title={'Redux'} color={'dark-purple'} level={'lvl_82'} />
        <Tool icon={'../../img/ts.png'} title={'TypeScript'}  color={'dark-blue'}level={'lvl_74'} />
        <Tool icon={'../../img/bootstrap.png'} title={'Bootstrap'} color={'light-purple'} id={'bp'} level={'lvl_78'} />
        <Tool icon={'../../img/sass.png'} title={'SASS/LESS'} color={'pink'} level={'lvl_82'} />
    </div>

  return (
    <div className="stack_slider_container">
        <button className="prev" onClick={prevSlide}></button>
            {slides}
        <button className="next" onClick={nextSlide} ></button>
    </div>
  )
}
