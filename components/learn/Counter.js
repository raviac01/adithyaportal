import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { useSelector, useDispatch } from "react-redux";
import {
  incAction,
  decAction,
  loginAction,
  logoutAction,
} from "./actions/Actions";

export default function Counter() {
  //const [count, setCount] = useState(0);
  const counter = useSelector((state) => state.count);
  //console.log("counter is ", counter);
  const login = useSelector((state) => state.isLoggedIn);
  //console.log("login is ", login);
  co nst dispatch = useDispatch();

  return (
    <div className="App">
      <p>
        {" "}
        The count is {counter} and {login}{" "}
      </p>
      <button onClick={() => dispatch(incAction())}>Increment</button>
      <button onClick={() => dispatch(loginAction())}>Decrement</button>
    </div>
  );
}
