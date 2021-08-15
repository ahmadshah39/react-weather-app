// imports
import { useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

// styles
import { Wrapper } from "./SearchFrom.style";
// components

const SearchFrom = () => {
  const [text, setText] = useState<string>("");
  const globalContext = useContext(GlobalContext);
  const { getSerachedLocationData, setLoading, clearAll } = globalContext;
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (text !== "") {
      setLoading();
      clearAll();
      getSerachedLocationData(text);
    }
  };
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <input
          className="search-input"
          placeholder="Enter Location..."
          type="text"
          name="search"
          id="search"
          onChange={onChange}
        />
        <button className="search-submit" type="submit">
         <img src={`${process.env.PUBLIC_URL}/icons/search-solid.svg`} alt="Search"/>
        </button>
      </form>
    </Wrapper>
  );
};

export default SearchFrom;
