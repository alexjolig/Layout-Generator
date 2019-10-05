import {CHANGE_LAYOUT} from './actions';
import {XL} from './constants';

const initialState = {
  layout: XL,
};

const changeLayout = (state, action) => Object.assign({},state,{
  layout: action.layout
});

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_LAYOUT:
      return changeLayout(state, action);
    default:
      return state;
  }
}
