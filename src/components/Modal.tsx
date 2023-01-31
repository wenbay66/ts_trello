import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  className?: string, // 額外需要的樣式
  centered?: boolean, // Modal 是否在畫面正中間
  onCancel: () => void, // 關閉 Modal 時執行
  children: React.ReactNode, // Modal 內容 
};

// 控制 Modal 要出現在螢幕的哪個位置
type positionProps = {
  top: string | number,
  left: string | number,
  transform?: string
};

const Modal = ({ className = '', centered = false, onCancel, children }: ModalProps) => {

  const [s_mousePosition, set_s_mousePosition] = useState<positionProps>({
    left: '0',
    top: '0',
  });

  // 渲染時註冊滑鼠點擊的元素位置，讓 Modal 出現在點擊元素的正下方
  useEffect(() => {
    const handleMouseClick = (event: MouseEvent) => {
      const rect = (event.target as HTMLElement).getBoundingClientRect();
      set_s_mousePosition({
        left: rect.left,
        top: rect.bottom + 5, // 加五是因為不要讓 Modal 跟按鈕黏在一起
      });
      // 取得要出現的位置後就可以移除監聽事件
      document.removeEventListener('click', handleMouseClick);
    };

    if (centered) {
      set_s_mousePosition({
        top: '15%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      })
    } else {
      // 註冊監聽事件
      document.addEventListener("click", handleMouseClick);
    }

  }, []);

  return ReactDOM.createPortal(
    <section className='absolute inset-0 h-screen w-screen' onClick={onCancel}>
      <div
        className={`absolute flex-center min-w-[15vw] bg-slate-50 ${className}`}
        style={s_mousePosition}
        // 阻止冒泡
        onClick={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}
      >
        {children}
      </div>
    </section>
    , document.getElementById('protal') as HTMLElement)
};

export default Modal;