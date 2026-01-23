"use client";

type Props = {
    size?: "sm" | "md";
    status: boolean;
    toggleName: string;
    onChange: any;
};

export default function Toggle({
    size = "md",
    status,
    toggleName,
    onChange,
}: Props) {

    const sizes = {
        sm: "w-9 h-5 after:w-4 after:h-4 after:top-0.5",
        md: "w-11 h-6 after:w-5 after:h-5 after:top-0.5",
    };

    return (
        <button
            type="button"
            role="switch"
            aria-checked={status}
            onClick={() => onChange(toggleName, !status)}
            className={`relative rounded-full transition 
                    ${sizes[size]}
                    ${status ? "bg-indigo-600" : "bg-gray-300"} 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        >
            <span
                className={`absolute top-0.5 left-0.5 rounded-full bg-white shadow 
                    transition-all duration-200 ${size == 'sm' ? 'size-4' : 'size-5'}
                    after:content-['']
                    flex items-center justify-center
                    ${status ? "translate-x-full" : "translate-x-0"}
                    `}
            >
                <span className={`text-xs font-bold ${status ? 'text-green-700' : 'text-red-600'}`}>
                    {status ? "✓" : "✕"}
                </span>
            </span>
        </button>
    );
}
