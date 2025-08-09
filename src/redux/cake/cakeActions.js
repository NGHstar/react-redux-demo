import { BUY_CAKE } from "./cakeTypes";

export function buyCake(cakes = 1) {
  return {
    type: BUY_CAKE,
    payload: cakes,
  };
}
