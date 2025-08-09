import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyMilk } from "../redux/milk/milkActions";

function MilkContainer() {
  // ---
  const milk = useSelector((state) => state.milk);
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);

  return (
    <div>
      <h3>Milks: {milk.milks}</h3>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      &nbsp;
      <button
        onClick={() => {
          dispatch(buyMilk(value));
          setValue("");
        }}
      >
        buy {value} milks
      </button>
    </div>
  );
}

export default MilkContainer;
