import { useEffect, useRef, useState } from "react";
import useFetch from "./useFetch";
function App() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const [value, setValue] = useState("default");

  const handleClick = () => {
    setValue("Updated");
    console.log(value);
  };

  const ref = useRef(null);

  console.log(ref);

  return (
    <div>
      <button ref={ref}>{value}</button>
      <p>hello world</p>
    </div>
  );
}

export default App;
