"use client";
import { useState } from "react";
import Popup from "@/components/Popup";
import Header from "@/components/Header";
import CodeViewer from "@/components/CodeViewer";
const HomePage: React.FC = () => {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);

  const PopupCode = `// src/components/Popup.tsx
import { FC, useEffect } from "react";

interface PopupProps {
  show: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const Popup: FC<PopupProps> = ({ show, onClose, title, message }) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (show && !(event.target as HTMLElement).closest(".popup-content")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-black text-white p-8 min-w-[300px] min-h max-w-[600px] w-full rounded shadow-lg  mx-auto popup-content">
        <h2 className="text-lg mb-2">{title}</h2>
        <p className="mb-6">{message}</p>
        <button className="mt-4 text-sm underline" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;`;

  const popuphomecode = `// src/app/home/page.tsx
"use client";

import { useState } from "react";
import Popup from "@/components/Popup";

const HomePage: React.FC = () => {
  const [showPopup1, setShowPopup1] = useState(false);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl mb-4">Welcome to the Home Page</h1>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => setShowPopup1(true)}
        >
          Show Popup 1
        </button>
        <Popup
          show={showPopup1}
          onClose={() => setShowPopup1(false)}
          title="Popup 1 Title"
          message="This is the first popup message."
        />
      </div>
    </div>
  );
};

export default HomePage;`;

  return (
    <div>
      <Header />

      <section className="min-h-[calc(100dvh-150px)]">
        <div className="container flex flex-col flex-wrap justify-between py-5 mx-auto md:flex-row max-w-7xl min-h-[calc(100dvh-150px)]">
          <div className="flex gap-7 w-full  min-h-[calc(100dvh-150px)]">
            <div className="w-1/5 h-full">
              <div>
                <h2 className="text-black font-bold text-md py-2  rounded-[4px] px-2">
                  Components
                </h2>
                <ul className="mt-4">
                  <li className="text-black py-2 px-2 cursor-pointer bg-[#f5f5f5]">
                    Navigation
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer">Form</li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Container
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">Flex</li>
                  <li className="text-black py-2 px-2 cursor-pointer ">Grid</li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Button
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Checkbox
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Input
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Radio
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Range Slider
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Select
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Slider
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Switch
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Textarea
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Badge
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">Card</li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Divider
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">List</li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Table
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">Tag</li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Alert
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Progress
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Toast
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Modal
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Popover
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">Menu</li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Drawer
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Tooltip
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Accordion
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">Tabs</li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Breadcrumb
                  </li>
                  <li className="text-black py-2 px-2 cursor-pointer ">
                    Avatar
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-3/5 bg-[#f5f5f5] h-full rounded-[8px]">
              <div className="px-6 py-3">
                <div className="mb-4">
                  <h1 className="font-bold text-[#2d3748] text-[1.875rem] mb-2">
                    Popup
                  </h1>
                  <p className="text-black">
                    Style props are a way to alter the style of a component by
                    simply passing props to it. It helps to save time by
                    providing helpful shorthand ways to style components.
                  </p>
                </div>

                <div>
                  <h2 className="font-bold text-[#2d3748] text-[1.375rem] mb-4">
                    Popup Button
                  </h2>
                  <div className="flex gap-4">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded mb-4"
                      onClick={() => setShowPopup1(true)}
                    >
                      Show Popup 1
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded mb-4"
                      onClick={() => setShowPopup2(true)}
                    >
                      Show Popup 2
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded mb-4"
                      onClick={() => setShowPopup3(true)}
                    >
                      Show Popup 3
                    </button>
                  </div>
                </div>
                <div className="my-4">
                  <CodeViewer code={PopupCode} language="tsx" />
                </div>
                <div className="my-4">
                  <CodeViewer code={popuphomecode} language="tsx" />
                </div>
              </div>
            </div>
            <div className="w-1/5 h-full">
              <div className="text-[#000]"> sss </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex gap-10 items-center justify-center ">
        <Popup
          show={showPopup1}
          onClose={() => setShowPopup1(false)}
          title="Popup 1 Title"
          message="This is the first popup message."
        />
        <Popup
          show={showPopup2}
          onClose={() => setShowPopup2(false)}
          title="Popup 2 Title"
          message="This is the second popup message."
        />
        <Popup
          show={showPopup3}
          onClose={() => setShowPopup3(false)}
          title="Popup 3 Title"
          message="This is the second popup message."
        />
      </div>
    </div>
  );
};

export default HomePage;
