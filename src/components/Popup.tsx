// src/components/Popup.tsx
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

export default Popup;
