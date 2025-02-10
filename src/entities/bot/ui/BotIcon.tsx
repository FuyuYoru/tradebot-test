import { FC } from "react";

type BotIconProps = {
    size?: number;
    color?: string;
    className?: string;
  };

export const BotIcon: FC<BotIconProps> = ({ size = 100, color = "#ffdb00", className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="-30 -30 100 100"
        // preserveAspectRatio="xMidYMid meet"
        className={className}
      >
        <path
        transform="translate(5, -20)"
          d="M0 0 C3.3 0 6.6 0 10 0 C10 3.3 10 6.6 10 10 C13.3 10 16.6 10 20 10 C20 6.7 20 3.4 20 0 C23.3 0 26.6 0 30 0 C30 3.3 30 6.6 30 10 C33.3 10 36.6 10 40 10 C40 13.3 40 16.6 40 20 C43.3 20 46.6 20 50 20 C50 23.3 50 26.6 50 30 C53.3 30 56.6 30 60 30 C60 43.2 60 56.4 60 70 C56.7 70 53.4 70 50 70 C50 66.7 50 63.4 50 60 C46.7 60 43.4 60 40 60 C40 63.3 40 66.6 40 70 C36.7 70 33.4 70 30 70 C30 66.7 30 63.4 30 60 C26.7 60 23.4 60 20 60 C20 63.3 20 66.6 20 70 C16.7 70 13.4 70 10 70 C10 66.7 10 63.4 10 60 C6.7 60 3.4 60 0 60 C0 63.3 0 66.6 0 70 C-3.3 70 -6.6 70 -10 70 C-10 66.7 -10 63.4 -10 60 C-13.3 60 -16.6 60 -20 60 C-20 63.3 -20 66.6 -20 70 C-23.3 70 -26.6 70 -30 70 C-30 56.8 -30 43.6 -30 30 C-26.7 30 -23.4 30 -20 30 C-20 26.7 -20 23.4 -20 20 C-16.7 20 -13.4 20 -10 20 C-10 16.7 -10 13.4 -10 10 C-6.7 10 -3.4 10 0 10 C0 6.7 0 3.4 0 0 Z"
          fill={color}
          // transform="translate(590,745)"
        />
      </svg>
    );
  };