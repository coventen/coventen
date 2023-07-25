import React from 'react';
interface IHomeCardProps {
    title: string;
    value: number;
}

const HomeCard = ({ title, value }: IHomeCardProps) => {
    return (
        <div className='h-[120px] p-5 border border-desktopPrimaryLight'>
            <p className='text-desktopTextLight font-semibold text-lg'>{title}</p>
            <h1 className='text-5xl font-extrabold text-desktopPrimary'>{value}</h1>
        </div>
    );
};

export default HomeCard;