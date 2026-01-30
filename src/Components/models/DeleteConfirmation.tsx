import React from 'react';

interface Props {
    isOpen: boolean;
    onDelete: () => void;
    onClose: () => void;
}

const DeleteConfirmation: React.FC<Props> = ({ isOpen, onDelete, onClose }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 animate-scaleIn">

                <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
                            />
                        </svg>
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 text-center mt-5">
                    Delete Item?
                </h2>

                <p className="text-gray-500 text-center mt-2 text-sm leading-relaxed">
                    This action cannot be undone. This will permanently delete this item.
                </p>

                <div className="flex gap-3 mt-6">
                    <button
                        className="flex-1 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
                        onClick={onClose}>
                        Cancel
                    </button>

                    <button
                        className="flex-1 py-2.5 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition shadow-lg shadow-red-600/30"
                        onClick={onDelete}>
                        Delete
                    </button>
                </div>

            </div>
        </div>

    );
};

export default DeleteConfirmation