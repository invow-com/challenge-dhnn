interface ButtonProps {
    onClick: () => void;
    type?: string;
}


const Button: React.FC<ButtonProps> = ({ onClick, type }) => {
    const buttonStyle = type === 'contained'
        ? 'bg-primary-700 text-white hover:bg-primary-900'
        : 'bg-white border border-primary-700 text-primary-700 hover:bg-gray-100';

    return (
        <button onClick={onClick} className={`text-body-1-bold font-bold h-12 px-5 py-0 rounded-sm w-full sm:w-auto transition duration-300 ease-in-out ${buttonStyle} `}>
            Call to action
        </button>
    );
}

export default Button;