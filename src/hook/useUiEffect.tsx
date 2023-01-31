import {useState, useEffect, useRef} from 'react';

const useUiEffect = (show:boolean, outDelay:number = 500) => {
  const [layoutToShow, setLayoutToShow] = useState(show);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {

    if (firstRender) {
      setFirstRender(false);
      return;
    };

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (show) {
      setLayoutToShow(false)
      timeoutRef.current = setTimeout(() => setLayoutToShow(true))
    } else {
      setLayoutToShow(true)
      timeoutRef.current = setTimeout(() => setLayoutToShow(false), outDelay)
    }
    return () => {
      if(timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
      
    }
  }, [show]);

  return show ? [layoutToShow, show] : [show, layoutToShow]
};

export default useUiEffect;