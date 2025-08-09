import { BUY_MILK } from "./milkTypes";

const initialState = {
  milks: 10,
};

export default function milkReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_MILK: {
      return {
        milks: state.milks - action.payload < 0 ? state.milks : state.milks - action.payload,
      };
    }
    default:
      return state;
  }
}
