// component
import Button from "../components/Button";
import Divider from "../components/Divider";
// Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faBoltLightning,
  faAnglesDown,
  faUsers,
  faEllipsis
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

type Props = {
  is_showNvabar: boolean,
  set_is_showNvabar: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({is_showNvabar, set_is_showNvabar}: Props) => {
  return (
    <section className="flex justify-around gap-1 bg-gray-500 p-2">
      <div className="flex gap-1 flex-1">
        <Button
          type="opacity"
          icon={
            <FontAwesomeIcon
              icon={faStar}
              className="hover:text-amber-400 scale-75 hover:scale-110 transition ease-in-out duration-300"
            />
          }
        />

        <Divider type='vertical' className="my-2 mx-1" />

        <Button
          type="opacity"
          icon={<FontAwesomeIcon icon={faUsers} />}
        >
          開放觀看權限的工作區
        </Button>

        <Divider type='vertical' className="my-2 mx-1" />

        <Button type="white">
          看板
        </Button>
      </div>

      <div className="flex justify-end flex-1 gap-2">
        <Button 
          type="opacity" 
          icon={<FontAwesomeIcon icon={faRocket} />}
        >
          Power-Up
        </Button>

        <Button
          type="opacity"
          icon={<FontAwesomeIcon icon={faBoltLightning} />}
        >
          自動化
        </Button>

        <Divider type='vertical' className="my-2 mx-0" />

        <Button
          type="opacity"
          icon={<FontAwesomeIcon icon={faAnglesDown} />}
        >
          篩選條件
        </Button>

        <Divider type='vertical' className="my-2 mx-1" />
        
        {!is_showNvabar && (
          <Button
            type="opacity"
            icon={<FontAwesomeIcon icon={faEllipsis} />}
            onClick={() => set_is_showNvabar((prev: boolean) => !prev)}
          />
        )}

      </div>
    </section>
  );
};

export default Header;
