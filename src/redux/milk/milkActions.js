import { BUY_MILK } from "./milkTypes";

export function buyMilk(milks = 1) {
  return {
    type: BUY_MILK,
    payload: milks,
  };
}
