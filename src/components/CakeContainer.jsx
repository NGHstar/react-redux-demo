import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer() {
  // ---
  const cake = useSelector((state) => state.cake);
  const dispatch = useDispatch();

  const [value, setValue] = useState(1);

  return (
    <div>
      <h3>Cake Count: {cake.cakes}</h3>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      &nbsp;
      <button
        onClick={() => {
          dispatch(buyCake(value));
          setValue("");
        }}
      >
        buy {value} cakes
      </button>
    </div>
  );
}

export default CakeContainer;
