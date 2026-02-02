import React from "react";
import { createPortal } from "react-dom";

interface ViewMoreDialogProps {
    isOpen: boolean;
    onClose: () => void;
}

const ViewMore: React.FC<ViewMoreDialogProps> = ({ isOpen, onClose, }) => {

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/10 backdrop-blur-xs"
                onClick={onClose}
            />

            <div className="relative max-w-[90%] w-auto bg-white rounded-2xl p-6 shadow-xl z-10 animate-scaleIn">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">
                        View More
                    </h2>

                    <button
                        onClick={onClose}
                        className="absolute top-2 right-3 text-red-600 font-bold hover:text-gray-700 text-xl">
                        ✕
                    </button>
                </div>

                <div className="text-sm text-gray-600">
                    This is your dialog content. You can place forms, text, actions here.
                </div>

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg text-sm border border-gray-300 hover:bg-gray-100">
                        Cancel
                    </button>

                    <button
                        className="px-4 py-2 rounded-lg text-sm bg-black text-white hover:opacity-90">
                        Confirm
                    </button>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default ViewMore