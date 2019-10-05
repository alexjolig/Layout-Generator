import React from 'react';
import { useDispatch } from 'react-redux'
import {LIST_VALUES} from '../constants';
import {changeLayout} from '../actions';

function Dropdown() {

  const dispatch = useDispatch();
  const changeHandler = (event) => {
    dispatch(changeLayout(event.target.value));
  }
  return (
    <section className="list-holder">
      <label>Choose a Layout:</label>
      <select onChange={(e) => {changeHandler(e)}}>
        {LIST_VALUES.map((item) => (
          <option value={item} key={item}>{item}</option>
        ))}
      </select>
    </section>
  );
}

export default Dropdown;
