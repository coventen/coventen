import React from 'react';

interface IButtonProps {
    title: string;
}

const Button = ({ title }: IButtonProps) => {
    return (
        <button className='bg-primary font-bold text-white px-7 py-2.5 rounded'>
            {title}
        </button>
    );
};

export default Button;