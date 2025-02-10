import clsx from "clsx";
import { FC, useState } from "react";

export const IntervalSelector: FC = ({ onChange, defaultValue = '24h' }) => {

    const [interval, setInterval] = useState(defaultValue);

    const intervals = [
        { title: '24h', value: '24h' },
        { title: '7 days', value: '7d' },
        { title: '30 days', value: '30d' },
        { title: 'All time', value: 'all_time' }
    ]

    const handleChange = (interval: string) => {
        setInterval(interval);
        if (onChange) {
            onChange(interval);
        }
    }

    return (
        <div className="w-full flex flex-row gap-2">
            {
                intervals.map((item, index) =>
                    <div
                        key={index}
                        onClick={() => handleChange(item.value)}
                        className={
                            clsx('flex items-center justify-center rounded-full min-w-[65px] py-1 border border-solid border-[#1c2e45]',
                                item.value === interval && 'text-white border-white font-semibold'
                            )
                        }>
                        {item.title}
                    </div>
                )
            }
        </div>
    )
}