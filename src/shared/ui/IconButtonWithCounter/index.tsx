import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode,
    text: string,
    counterValue?: number,
}

export const IconButtonWithCounter: FC<Props> = ({ icon, text, className, counterValue = 0, ...props }) => {
    return (
        <button className={clsx('flex flex-col', className)} {...props}>
            {counterValue &&
                <span>{counterValue}</span>
            }
            <span>{icon}</span>
            <span>{text}</span>
        </button>
    )
}