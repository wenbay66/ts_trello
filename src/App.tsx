import React, { useState } from "react";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Header from "./components/Header";
import { ReactComponent as IconPen } from "./assets/icon/pen.svg";
import { ReactComponent as IconStar } from "./assets/icon/start.svg";

const App = () => {
  return (
    <div className="bg-blue-100 h-[100vh] w-[100vw] flex flex-col">
      <Header />
    </div>
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
}

export default App;
