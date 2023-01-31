import React from 'react';

type Props = {
type?: 'horizontal' | 'vertical'; // 控制 Divider 的方向是水平 or 垂直
className?: string; // 額外的 className ex: 不同的Divider顏色border-[]-[]
}

const Divider = (props: Props) => {

const {
  type = "horizontal",
  className = "",
} = props;

const display = type === 'horizontal' ? 'block' : 'inline';
const margin = type === 'horizontal' ? 'my-2' : 'mx-2';

const borderType = type === 'horizontal' ? 'border-b' : 'border-l';

const classNames = `border-slate-300 ${borderType} ${display} ${margin} ${className}`;

return <span className={classNames}></span>;
}

export default Divider;