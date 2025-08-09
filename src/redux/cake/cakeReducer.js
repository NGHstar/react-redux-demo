import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  cakes: 10,
};

export default function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        cakes: state.cakes - action.payload < 0 ? state.cakes : state.cakes - action.payload,
      };
    }
    default:
      return state;
  }
}
