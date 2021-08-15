import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { Wrapper } from "./ThemeToggleBtn.style";
const ThemeToggleBtn = () => {
  const globalContext = useContext(GlobalContext);
  const { switchTheme, theme } = globalContext;
  const onClick:React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    switchTheme();
  };
  return (
    <Wrapper>
    
        <div className="nav">
          <a href="#!" onClick={onClick}><img src={`${process.env.PUBLIC_URL}/icons/${theme === true ? 'moon-solid' : 'sun-regular'}.svg`} alt="theme switcher"/></a>   
        </div>

    </Wrapper>
  );
};

export default ThemeToggleBtn;
