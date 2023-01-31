import { useState, useEffect, useRef } from "react";
import useUiEffect from "../hook/useUiEffect";
// component
import Button from "../components/Button";
import Divider from "../components/Divider";
import { H5 } from "../components/Text";
// Icon
import {
  faXmark,
  faSquarePollHorizontal,
  faEllipsis,
  faBolt,
  faRocket,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavBarProps = {
  is_showNvabar: boolean;
  set_is_showNvabar: React.Dispatch<React.SetStateAction<boolean>>;
};

type childProps = NavBarProps & {
  show: boolean;
  navigation: (componentName:string) => void;
  s_lifeHistory: string[]
};

const NavBar = (props: NavBarProps) => {
  const { set_is_showNvabar } = props;

  // 控制navbar現在要顯示哪個子組件
  const [s_life, set_s_life] = useState<string>("Home");

  // 控制回上一層時要回到哪一層，為空陣列時代表沒有上一層
  const [s_lifeHistory, set_s_lifeHistory] = useState<string[]>([]);

  const navigation = (componentName: string): void => {
    set_s_life(componentName);
    set_s_lifeHistory((prev) => [...prev, componentName]);
  };

  // console.log(s_lifeHistory)

  return (
    <div className="flex flex-col gap-1 overflow-hidden bg-inherit w-full h-full p-3">
      {/* NavBar 表頭區域 */}
      <section className="flex items-center">
        {s_lifeHistory.length > 0 && (
          <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={() => {
              set_s_lifeHistory((prev) => {
                const tmpPrev = [...prev];
                tmpPrev.pop();
                set_s_life(tmpPrev[tmpPrev.length-1] ?? 'Home')
                return tmpPrev;
              });
            }}
            className="text-xl text-slate-700 cursor-pointer"
          />
        )}

        <H5 className="w-full text-center">選單</H5>

        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => set_is_showNvabar((prev) => !prev)}
          className="text-xl text-slate-700 cursor-pointer"
        />
      </section>

      <Divider />

      <section className="flex w-full flex-1">
        <Home
          show={s_life === "Home"}
          navigation={navigation}
          s_lifeHistory={s_lifeHistory}
          {...props}
        />

        <Background 
          show={s_life === "Background"}
          navigation={navigation}
          s_lifeHistory={s_lifeHistory}
          {...props}
        />

        <Color 
          show={s_life === "Color"}
          navigation={navigation}
          s_lifeHistory={s_lifeHistory}
          {...props}
        />
      </section>
    </div>
  );
};

const Home = (props: childProps) => {
  const { show, navigation } = props;

  const [toShow, layoutToShow] = useUiEffect(show);

  if (layoutToShow === false) return null;

  return (
    <div
      className={`transition-all duration-500 ${
        !toShow && "ml-[-100%]"
      } flex flex-col w-full h-full`}
    >
      <Button
        type="navbar"
        className="items-start gap-3"
        icon={
          <FontAwesomeIcon
            className="rotate-[-90deg] text-[1.2rem]"
            icon={faSquarePollHorizontal}
          />
        }
      >
        <div className="flex flex-col items-start">
          <span>關於這個看板</span>
          <span className="text-slate-500 font-normal">為你的看板新增敘述</span>
        </div>
      </Button>

      <Button
        type="navbar"
        className="gap-4"
        onClick={() => navigation('Background')}
        icon={
          <div className="h-[1.2rem] w-[1.2rem] rounded-md bg-gray-400"></div>
        }
      >
        更換背景
      </Button>

      <Button
        type="navbar"
        className="gap-4"
        icon={<FontAwesomeIcon className="text-[1.2rem]" icon={faCompass} />}
      >
        貼圖
      </Button>

      <Button
        type="navbar"
        className="gap-4"
        icon={<FontAwesomeIcon className="text-[1.2rem]" icon={faEllipsis} />}
      >
        更多
      </Button>

      <Divider />

      <Button
        type="navbar"
        className="items-start gap-3 mt-1"
        icon={<FontAwesomeIcon className="text-[1.2rem] mt-1" icon={faBolt} />}
      >
        <div className="flex flex-col items-start">
          <span>自動化</span>
          <span className="text-slate-500 font-normal">
            自動化卡片和更多...
          </span>
        </div>
      </Button>

      <Divider />

      <Button
        type="navbar"
        className="items-start gap-3 mt-1"
        icon={
          <FontAwesomeIcon className="text-[1.2rem] mt-1" icon={faRocket} />
        }
      >
        <div className="flex flex-col items-start">
          <span>Power-up</span>
          <span className="text-slate-500 font-normal">Google Drive 等...</span>
        </div>
      </Button>
    </div>
  );
};

const Background = (props: childProps) => {
  const { show, navigation, s_lifeHistory } = props;
  
  const [toShow, layoutToShow] = useUiEffect(show);

  const [goNext, setgoNext] = useState<boolean>(false);

  const precount = useRef(0);
 
  useEffect(() => {
    
    console.log('precount.current = ', precount.current);
    console.log('s_lifeHistory.length = ', s_lifeHistory.length);
    
    // setgoNext(false)
    if(precount.current > s_lifeHistory.length) setgoNext(false)
    precount.current = s_lifeHistory.length;
  }, [s_lifeHistory]);
  // console.log({toShow, layoutToShow})
  if (layoutToShow === false) return null;

  const basic = 'transition-all duration-500 flex flex-col w-full h-full';
  // console.log({toShow, goNext})
  return (
    <div
      // className={`${basic} mr-[-20vw] ${toShow ? "mr-[0vw]" : 'mr-[-20vw]'}`}
      className={`
        ${basic} 
        ${toShow === false && goNext === false && 'mr-[-100%]'}
        ${toShow === false && goNext === true && 'ml-[-100%]'}
      `}
    >
      <Button
        type="navbar"
        className="gap-4"
        onClick={() => {
          navigation('Color');
          setgoNext(true)
        }}
        icon={<FontAwesomeIcon className="text-[1.2rem]" icon={faCompass} />}
      >
        背景component
      </Button>
    </div>
  )
};

const Color = (props: childProps) => {
  const { show, navigation } = props;
  
  const [toShow, layoutToShow] = useUiEffect(show);

  if (layoutToShow === false) return null;

  const basic = 'transition-all duration-500 flex flex-col w-full h-full';

  return (
    <div
      className={`${basic} mr-[-20vw] ${toShow && "mr-[0vw]"}`}
    >
      <Button
        type="navbar"
        className="gap-4"
        // onClick={() => navigation('Color')}
        icon={<FontAwesomeIcon className="text-[1.2rem]" icon={faCompass} />}
      >
        Color
      </Button>
    </div>
  )
}

const NavbarLayer = (props: NavBarProps) => {
  const { is_showNvabar } = props;
  
  const [toShow, layoutToShow] = useUiEffect(is_showNvabar);

  if (layoutToShow === false) return null;

  return (
    <section
      className={`transition-all duration-500 ${
        toShow ? "mr-[0vw]" : "mr-[-20vw]"
      } w-[20vw] bg-slate-50`}
    >
      <NavBar {...props} />
    </section>
  );
};

export default NavbarLayer;
