import React from "react";

export const Comets = ({ className }) => {
  return (
    <svg
      className={`planets-mercury ${className}`}
      fill="none"
      height="496"
      viewBox="0 0 496 496"
      width="496"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_f_1_334)">
        <circle
          className="circle"
          cx="248"
          cy="248"
          fill="url(#paint0_linear_1_334)"
          r="128"
        />
      </g>

      <g className="g" filter="url(#filter1_f_1_334)">
        <circle
          className="circle"
          cx="248"
          cy="248"
          fill="url(#paint1_linear_1_334)"
          r="128"
        />
      </g>

      <circle
        className="circle"
        cx="248"
        cy="248"
        fill="url(#paint2_linear_1_334)"
        r="128"
      />

      <g className="g" filter="url(#filter2_f_1_334)" opacity="0.8">
        <path
          className="path"
          d="M248 142.807C295.497 119.807 362.485 184.807 350.487 222.307L320.286 184.06C312.224 173.849 301.735 165.817 289.775 160.696L248 142.807Z"
          fill="#DCDCE0"
        />
      </g>

      <g className="g" filter="url(#filter3_f_1_334)" opacity="0.5">
        <path
          className="path"
          d="M281 343C207.5 372 127.5 292.5 146 223L188.164 286.245C195.912 297.868 206.64 307.197 219.226 313.257L281 343Z"
          fill="#36353E"
        />
      </g>

      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="496"
          id="filter0_f_1_334"
          width="496"
          x="0"
          y="0"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />

          <feGaussianBlur
            className="fe-gaussian-blur"
            result="effect1_foregroundBlur_1_334"
            stdDeviation="60"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="-inf"
          id="filter1_f_1_334"
          width="-inf"
          x="inf"
          y="inf"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />

          <feGaussianBlur
            className="fe-gaussian-blur"
            result="effect1_foregroundBlur_1_334"
            stdDeviation="60"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="184.307"
          id="filter2_f_1_334"
          width="203.9"
          x="198"
          y="88"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />

          <feGaussianBlur
            className="fe-gaussian-blur"
            result="effect1_foregroundBlur_1_334"
            stdDeviation="25"
          />
        </filter>

        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="226.133"
          id="filter3_f_1_334"
          width="237.7"
          x="93.2998"
          y="173"
        >
          <feFlood
            className="fe-flood"
            floodOpacity="0"
            result="BackgroundImageFix"
          />

          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />

          <feGaussianBlur
            className="fe-gaussian-blur"
            result="effect1_foregroundBlur_1_334"
            stdDeviation="25"
          />
        </filter>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1_334"
          x1="440"
          x2="235.5"
          y1="211.5"
          y2="414"
        >
          <stop className="stop" stopColor="#FFE5D8" />

          <stop className="stop" offset="0.297113" stopColor="#AFAFB2" />

          <stop className="stop" offset="1" stopColor="#36353E" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_1_334"
          x1="440"
          x2="235.5"
          y1="211.5"
          y2="414"
        >
          <stop className="stop" stopColor="#FFE5D8" />

          <stop className="stop" offset="0.297113" stopColor="#AFAFB2" />

          <stop className="stop" offset="1" stopColor="#36353E" />
        </linearGradient>

        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_1_334"
          x1="440"
          x2="235.5"
          y1="211.5"
          y2="414"
        >
          <stop className="stop" stopColor="#FFE5D8" />

          <stop className="stop" offset="0.297113" stopColor="#AFAFB2" />

          <stop className="stop" offset="1" stopColor="#36353E" />
        </linearGradient>
      </defs>
    </svg>
  );
};
