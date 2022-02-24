import { SET_PRODUCT } from "../constants"

const initialState = {
  product:[{
    id: 1,
    title: 'nitish'
  }]
}

export const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_PRODUCT:
      return state;
      default:
        return state;
  }
}