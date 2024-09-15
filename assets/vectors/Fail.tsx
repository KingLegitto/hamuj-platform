import { FC } from "react";

interface FailProps {
  className?: string;
}

const Fail: FC<FailProps> = ({ className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_610_4)">
        <path
          d="M9.52245 55.4775C6.41837 52.4795 3.94245 48.8933 2.23916 44.9281C0.535865 40.963 -0.360688 36.6984 -0.398187 32.383C-0.435686 28.0677 0.386619 23.7881 2.02075 19.794C3.65488 15.7999 6.0681 12.1712 9.11962 9.11966C12.1711 6.06815 15.7998 3.65492 19.7939 2.02079C23.7881 0.386665 28.0677 -0.43564 32.383 -0.398141C36.6983 -0.360642 40.963 0.53591 44.9281 2.2392C48.8932 3.9425 52.4794 6.41842 55.4775 9.5225C61.3976 15.6521 64.6734 23.8616 64.5994 32.383C64.5253 40.9044 61.1073 49.0558 55.0816 55.0816C49.0558 61.1074 40.9044 64.5254 32.383 64.5994C23.8616 64.6735 15.652 61.3976 9.52245 55.4775ZM37.05 32.5L46.2475 23.3025L41.665 18.72L32.5 27.9175L23.3025 18.72L18.72 23.3025L27.9175 32.5L18.72 41.6975L23.3025 46.28L32.5 37.0825L41.6975 46.28L46.28 41.6975L37.0825 32.5H37.05Z"
          fill="#EF4444"
        />
      </g>
      <defs>
        <clipPath id="clip0_610_4">
          <rect width="65" height="65" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Fail;