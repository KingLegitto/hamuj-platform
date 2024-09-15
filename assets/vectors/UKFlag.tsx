import { FC } from "react";

interface UKFlagProps {
    className?: string
}

const UKFlag: FC<UKFlagProps> = ({className}) => {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_620_8)">
        <path
          d="M0 8.30409V11.9167H5.159L0 8.30409ZM4.27533 28.4167H11.9167V23.0661L4.27533 28.4167ZM21.0833 23.067V28.4167H28.7237L21.0833 23.067ZM0 21.0833V24.6959L5.16083 21.0833H0ZM28.7256 4.58334H21.0833V9.93393L28.7256 4.58334ZM33 24.6968V21.0833H27.8382L33 24.6968ZM33 11.9167V8.30409L27.8401 11.9167H33ZM11.9167 4.58334H4.27533L11.9167 9.93393V4.58334Z"
          fill="#00247D"
        />
        <path
          d="M23.0451 21.0833L31.9478 27.3176C32.3818 26.8691 32.6942 26.3173 32.8553 25.7143L26.2415 21.0833H23.0451ZM11.9168 21.0833H9.95421L1.05246 27.3167C1.53004 27.8025 2.14238 28.1499 2.82896 28.3113L11.9168 21.9478V21.0833ZM21.0835 11.9167H23.046L31.9478 5.68333C31.4616 5.1909 30.8461 4.84609 30.1722 4.68875L21.0835 11.0523V11.9167ZM9.95421 11.9167L1.05246 5.68333C0.618113 6.13171 0.305433 6.68355 0.144043 7.28658L6.75779 11.9167H9.95421Z"
          fill="#CF1B2B"
        />
        <path
          d="M33 19.25H19.25V28.4167H21.0833V23.067L28.7237 28.4167H29.3333C29.8202 28.4162 30.3022 28.3188 30.7511 28.1301C31.1999 27.9414 31.6067 27.6652 31.9477 27.3176L23.045 21.0833H26.2414L32.8552 25.7143C32.9404 25.4054 33 25.0855 33 24.75V24.6968L27.8382 21.0833H33V19.25ZM0 19.25V21.0833H5.16083L0 24.6959V24.75C0 25.7501 0.402417 26.6548 1.05233 27.3167L9.95408 21.0833H11.9167V21.9478L2.82883 28.3103C3.09833 28.3745 3.377 28.4167 3.66667 28.4167H4.27533L11.9167 23.0661V28.4167H13.75V19.25H0ZM33 8.25001C33.0009 7.28927 32.6227 6.36697 31.9477 5.68334L23.0459 11.9167H21.0833V11.0523L30.1721 4.68876C29.8975 4.6214 29.616 4.58603 29.3333 4.58334H28.7256L21.0833 9.93393V4.58334H19.25V13.75H33V11.9167H27.8401L33 8.30409V8.25001ZM11.9167 4.58334V9.93393L4.27533 4.58334H3.66667C3.17969 4.5839 2.6977 4.68146 2.24883 4.87032C1.79997 5.05918 1.39322 5.33557 1.05233 5.68334L9.95408 11.9167H6.75767L0.143917 7.28659C0.0533103 7.5999 0.00491112 7.9239 0 8.25001L0 8.30409L5.159 11.9167H0V13.75H13.75V4.58334H11.9167Z"
          fill="#EEEEEE"
        />
        <path
          d="M19.25 13.75V4.58334H13.75V13.75H0V19.25H13.75V28.4167H19.25V19.25H33V13.75H19.25Z"
          fill="#CF1B2B"
        />
      </g>
      <defs>
        <clipPath id="clip0_620_8">
          <rect width="33" height="33" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UKFlag;