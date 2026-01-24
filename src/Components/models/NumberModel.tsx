import React, { useEffect } from "react";

interface NumberModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const NumberModal: React.FC<NumberModalProps> = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setIsOpen]);

  if (!isOpen) return null; // agar modal close hai to kuch render na kare

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={() => setIsOpen(false)} // click outside closes
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-11/12 sm:w-100 p-6 relative"
        onClick={(e) => e.stopPropagation()} // click inside modal prevents close
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          &#10005;
        </button>

        <div className="flex justify-center">
            <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NumberModal;
