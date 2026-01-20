import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    // Default target date: 3 days from now, memoized to prevent infinite re-renders
    const stableTargetDate = React.useMemo(() => {
        return targetDate || new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).getTime();
    }, [targetDate]);


    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = new Date(stableTargetDate) - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [stableTargetDate]);

    return (
        <div className="flex items-center gap-2 sm:gap-4 scale-90 sm:scale-100 origin-left">

            <div className="flex flex-col items-center">
                <div className="text-xs font-medium text-black mb-1">Days</div>
                <div className="text-[32px] font-bold text-black font-['Inter']">
                    {String(timeLeft.days).padStart(2, '0')}
                </div>
            </div>
            <span className="text-2xl font-semibold text-[#e07575] mt-4">:</span>
            <div className="flex flex-col items-center">
                <div className="text-xs font-medium text-black mb-1">Hours</div>
                <div className="text-[32px] font-bold text-black font-['Inter']">
                    {String(timeLeft.hours).padStart(2, '0')}
                </div>
            </div>
            <span className="text-2xl font-semibold text-[#e07575] mt-4">:</span>
            <div className="flex flex-col items-center">
                <div className="text-xs font-medium text-black mb-1">Minutes</div>
                <div className="text-[32px] font-bold text-black font-['Inter']">
                    {String(timeLeft.minutes).padStart(2, '0')}
                </div>
            </div>
            <span className="text-2xl font-semibold text-[#e07575] mt-4">:</span>
            <div className="flex flex-col items-center">
                <div className="text-[10px] sm:text-xs font-medium text-black mb-1">Seconds</div>
                <div className="text-2xl sm:text-[32px] font-bold text-black font-['Inter']">
                    {String(timeLeft.seconds).padStart(2, '0')}
                </div>
            </div>

        </div>
    );
};

export default CountdownTimer;
