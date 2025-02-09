import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: React.ReactNode,
    text: string,
}

export const IconButton: FC<Props> = ({icon, text, className, ...props}) => {
    return (
        <button className={clsx('flex flex-col', className)} {...props}>
            <span>{icon}</span>
            <span>{text}</span>
        </button>
    )
}