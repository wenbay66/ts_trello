import React, { useState, useEffect } from "react";
// import * as ReactDOM from 'react-dom';
// Layout
import Contact from './Layout/Content';
import Navbar from "./Layout/Navbar";
import Header from "./Layout/Header";
// component
import Button from "./components/Button";

import { ReactComponent as IconPen } from "./assets/icon/pen.svg";
import { ReactComponent as IconStar } from "./assets/icon/start.svg";

const App = () => {

  const [ is_showNvabar, set_is_showNvabar ] = useState<boolean>(false)

  // console.log('is_showNvabar = ', is_showNvabar)

  // const [ s_arr, set_s_arr ] = useState<string[]>([]);
  // useEffect(() => {
  //   console.log('HH')
  // }, [s_arr])
  // return <div>
  //   <Button onClick={() => set_s_arr(prev => [...prev, 'ABC'])}>add</Button>
  //   <Button onClick={() => set_s_arr(prev => {
  //     const tmp = [...prev]
  //     tmp.pop();
  //     return tmp
  //   })}>remove</Button>
  // </div>

  return (
    <section className="bg-blue-100 h-screen w-screen flex">

      <section className="flex-1 flex flex-col bg-red-500">
        <Header is_showNvabar={is_showNvabar} set_is_showNvabar={set_is_showNvabar} />
        
        <Contact />
        
      </section>

      <Navbar is_showNvabar={is_showNvabar} set_is_showNvabar={set_is_showNvabar} />
      
    </section>
  );
};

function App1() {
  const [is_show, set_is_show] = useState(false);

  return (
    <div className="bg-blue-100 h-[100vh] w-[100vw] flex flex-col justify-center items-center">
      <div>
        <section className="flex flex-col justify-start">
          <h3
            className={`uppercase text-sm font-semibold tracking-wider text-gray-700 mb-2`}
          >
            Small
          </h3>

          <div className="flex gap-3 mb-6">
            <Button type="orange">Orange</Button>

            <Button type="orange" disabled>
              Orange
            </Button>

            <Button type="orange" className="w-[3.2rem]" />

            <Button type="orange" icon={<IconPen />}>
              Orange
            </Button>

            <Button type="orange" size="sm" icon={<IconPen />} />
            <Button type="orange" size="md" icon={<IconPen />} />
            <Button type="orange" size="lg" icon={<IconPen />} />
            <Button
              type="orange"
              size="lg"
              // className='rounded-full'
              icon={<IconPen />}
            />
          </div>
        </section>

        <section className="flex justify-start gap-3 rounded-lg bg-sky-600 p-2 mb-6">
          <Button type="opacity">Opacity</Button>

          <Button type="opacity" disabled>
            Opacity
          </Button>

          <Button type="opacity" className="w-[3.2rem]" />

          <Button type="opacity" icon={<IconPen />}>
            Orange
          </Button>

          <Button type="opacity" size="sm" icon={<IconPen />} />
          <Button type="opacity" size="md" icon={<IconPen />} />
          <Button type="opacity" size="lg" icon={<IconPen />} />
          <Button
            type="opacity"
            size="lg"
            className="rounded-full"
            icon={<IconPen />}
          />

          <Button
            type="opacity"
            size="lg"
            className="rounded-full"
            icon={
              <IconStar className="icon hover:text-amber-400 scale-75 hover:scale-110 transition ease-in-out duration-300" />
            }
          />
        </section>

        <section className="flex gap-3 mb-6">
          <Button type="blue" className="w-[3.2rem]" />
          <Button type="green" className="w-[3.2rem]" />
          <Button type="yellow" className="w-[3.2rem]" />
          <Button type="orange" className="w-[3.2rem]" />
          <Button type="red" className="w-[3.2rem]" />
          <Button type="opacity" className="w-[3.2rem]" />
          <Button type="violet" className="w-[3.2rem]" />
        </section>
      </div>
    </div>
  );
};

// const App2 = () => {

//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current
//     const context = canvas.getContext('2d')
//     //Our first draw
//     context.fillStyle = '#000000'
//     context.fillRect(0, 0, context.canvas.width, context.canvas.height)
//   }, []);

//   return <canvas ref={canvasRef} />
// }

export default App;
