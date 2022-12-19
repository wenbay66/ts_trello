import Button from "./Button";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

  return (
    <div className="flex justify-center gap-5 bg-slate-400 p-2">

      <Button 
        type="opacity" 
        size="sm"
        icon={<FontAwesomeIcon icon={faEnvelope} />}
      />

      <Button 
        type="opacity" 
        size="sm"
        // icon={<FontAwesomeIcon icon={faEnvelope} />}
      >TEST</Button>

    </div>
  )
};

export default Header;