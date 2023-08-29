import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
    color: 'red' | 'blue';
    text: string;
    route?: string;
    link?: string;
    className?: string;  // for passing additional styles
}

const Button: React.FC<ButtonProps> = ({color, text, route, link, className}) => {
    let buttonColor;

    switch(color) {
        case 'red':
            buttonColor = 'bg-[#e90e0e] hover:bg-[#f91d1d] text-white';
            break;
        case 'blue':
            buttonColor = 'bg-blue-500 hover:bg-blue-700 text-white';
            break;
        default:
            buttonColor = 'bg-gray-500 hover:bg-gray-700 text-white';
            break;
    }

    const baseClasses = `rounded text-base px-5 py-2 font-bold transform transition-transform ${buttonColor} ${className ? className : ''}`;

    if(route) {
        return (
            <Link to={route} className={baseClasses}>
                {text}
            </Link>
        );
    }

    if(link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className={baseClasses}>
                {text}
            </a>
        );
    }

    return (
        <button className={baseClasses}>
            {text}
        </button>
    );
}

export default Button;
