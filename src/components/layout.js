import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {XL, L} from '../constants';
import Slot from './slot';

function Layout() {

  const layout = useSelector(
    state => (state.layout)
  );

  const list_maker = (lyt) =>{
    let list = [];
    for(let l of lyt) {
      //Extract number from layout
      let numbers = l.match(/(\d+)/);
      let number = numbers ? numbers[0] : 1;

      //Extract pure layout without numbers
      l = l.replace(/[0-9]/g, '');
      //Add layout to the main list based on number
      for(let i=0;i<number;i++)
        list.push(l);
    }
    return list;
  }
  const [currentLayout, setCurrentLayout] = useState(list_maker(layout.split("/")));

  useEffect(() => {
    setCurrentLayout(list_maker(layout.split("/")));
  }, [layout] );

  return (
    <section className="layout-holder">
      {currentLayout.map((item, index)=>{
        const class_name = item === XL ? "xl" : item === L ? "l" : "sm";
        return <Slot key={index} class={class_name} index={index+1} />;
      })}
    </section>
  );
}

export default Layout;
