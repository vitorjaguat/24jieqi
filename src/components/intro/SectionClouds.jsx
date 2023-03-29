import Wave from 'react-wavify';
import { useParallax } from 'react-scroll-parallax';

export default function SectionClouds({ current }) {
  const parallax = useParallax({
    speed: -10,
  });

  // const { t } = useTranslation('terms');
  // const [hexArr, setHexArr] = useState([]);
  // const [nameArr, setNameArr] = useState([]);

  // useEffect(() => {
  //   let hexData = [];
  //   let nameData = [];

  //   for (let i = 1; i <= 16; i++) {
  //     let hex = t(`${current}.colors.${i}.hex`);
  //     let name = t(`${current}.colors.${i}.name`);
  //     hexData.push(hex);
  //     nameData.push(name);
  //   }
  //   setHexArr([...hexData]);
  //   setNameArr([...nameData]);
  // }, [current, setHexArr, setNameArr]);

  const svgSun = (
    <svg
      // height='100%'

      style={{
        fillRule: 'nonzero',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterLimit: '10',
      }}
      // version='1.1'
      viewBox='0 0 800 310'
      // width='100%'

      xmlns='http://www.w3.org/2000/svg'
    >
      <g
        opacity='1'
        // transform='translate(30,30)'
      >
        <path
          d='M128.906 116.797C131.393 118.04 137.578 112.734 139.453 111.328C139.063 110.938 139.063 110.938 138.672 110.547C140.635 106.62 144.802 103.959 147.656 100.391C150.75 96.523 151.205 91.3405 153.125 87.5C155.979 81.7922 153.385 74.7396 153.516 68.3594C153.602 64.1386 152.344 61.4029 152.344 56.6406C152.344 54.0194 149.763 50.6278 151.953 48.4375C144.504 40.9879 137.36 30.1139 126.172 28.5156C118.514 27.4216 111.021 25.0313 102.344 26.5625C99.9517 26.9846 96.9991 28.8033 94.5313 29.2969C87.6733 30.6685 79.8176 38.9324 75.3906 43.3594C65.1744 53.5756 65.2344 68.667 65.2344 82.0313C65.2344 96.9756 83.3732 112.412 95.3125 117.188C103.246 120.361 122.165 123.538 128.906 116.797Z'
          fill='#fe8e86'
          fill-rule='nonzero'
          opacity='1'
          stroke='none'
        />
        <path
          d='M151.563 48.0469C150.679 48.9309 151.174 61.7273 151.563 63.6719C152.854 70.1282 155.565 88.185 150 93.75C151.367 95.1172 151.367 95.1172 152.734 96.4844C154.727 94.492 155.448 90.6862 156.25 88.2813C160.691 74.9591 159.439 59.8616 151.563 48.0469Z'
          fill='#f93628'
          fill-rule='nonzero'
          opacity='1'
          stroke='none'
        />
        <path
          d='M150.781 93.75C145.99 98.5409 144.258 104.739 137.891 108.984C138.411 110.026 138.411 109.505 137.891 110.547C138.477 111.133 138.477 111.133 139.063 111.719C145.841 108.33 148.394 100.825 153.125 96.0938C151.953 94.9219 151.953 94.9219 150.781 93.75Z'
          fill='#f45956'
          fill-rule='nonzero'
          opacity='1'
          stroke='none'
        />
      </g>
    </svg>
  );

  const svg = (
    <svg
      // height='100%'
      stroke-miterlimit='10'
      style={{
        fillRule: 'nonzero',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
      // version='1.1'
      viewBox='0 0 800 310'
      // width='100%'

      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Layer-1'>
        <g opacity='1'>
          <path
            d='M72.6278 182.542C69.0453 182.936 66.0289 185.596 62.5 186.328C58.6753 187.122 54.6803 186.091 50.7813 186.328C48.7979 186.449 45.6441 189.527 44.7721 190.213C89.6345 190.482 134.496 191.143 179.359 191.021C179.899 191.02 180.099 190.236 180.469 189.844C174.073 185.846 168.293 186.673 160.547 186.328C158.752 172.571 155.479 168.15 141.797 167.578C138.844 156.08 120.57 149.214 112.11 161.213C106.96 168.518 111.719 180.859 111.719 180.859L103.125 184.375C103.125 184.375 72.8238 165.567 72.6278 182.542Z'
            fill='#89c2e5'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M25 158.984C25 158.984 15.4207 153.292 11.3281 161.328C11.0212 161.931 8.75942 159.514 8.20313 159.375C6.1612 158.865 2.38693 158.487 0.78125 158.594C0.413781 158.618 0.0262392 159.008 0 159.375C-0.241201 162.752 0 166.146 0 169.531C35.4167 169.661 70.8333 170.051 106.25 169.922C106.618 169.921 106.771 169.401 107.031 169.141C101.787 162.149 82.8125 165.625 82.8125 165.625C82.8125 165.625 81.3964 160.95 77.8209 160.767C74.0071 160.571 68.75 162.5 68.75 162.5C68.75 162.5 66.9966 156.417 62.8625 156.708C59.605 156.938 54.2969 160.156 54.2969 160.156C54.2969 160.156 51.3104 145.001 37.1094 146.094C31.1075 146.555 25 158.984 25 158.984Z'
            fill='#89c2e5'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
        </g>
        <g opacity='1'>
          <path
            d='M720.703 110.156C718.709 109.159 711.362 111.454 715.625 113.281C716.104 113.486 716.667 113.285 717.188 113.281C736.068 113.155 754.947 112.891 773.828 112.891C774.119 112.891 774.349 113.151 774.609 113.281C775.195 112.695 775.195 112.695 775.781 112.109C775.595 111.861 757.24 104.948 755.469 105.469C751.539 106.625 749.745 111.073 745.703 107.031C749.16 100.117 742.063 96.0938 736.328 96.0938C733.679 96.0938 731.99 100.982 730.469 101.172C726.245 101.7 724.076 100.41 721.484 104.297C720.343 106.008 722.552 108.308 720.703 110.156Z'
            fill='#89c2e5'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M650 64.8438C650.34 65.3884 650.523 66.2109 650.795 66.8754C651.044 67.4817 651.367 67.9565 651.953 67.9688C701.031 68.9966 750.13 67.9688 799.219 67.9688C799.308 48.9156 793.251 36.0149 771.875 47.2656C769.547 44.8648 769.002 41.9069 766.133 40.1875C762.529 38.0273 757.422 40.2344 757.422 40.2344C757.422 40.2344 748.938 26.4978 742.638 21.7478C736.221 16.9101 726.601 18.3304 719.615 20.6127C707.125 24.6931 705.643 37.7608 703.906 48.8281C687.854 39.9102 675.162 56.5914 675.162 56.5914C675.162 56.5914 667.048 55.9582 663.119 56.7842C658.619 57.7302 653.588 62.0946 650 64.8438Z'
            fill='#89c2e5'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M610.938 65.5264C611.602 66.1749 611.759 67.6344 612.698 67.6748C622.37 68.0915 632.07 68.0855 641.742 67.6748C642.363 67.6484 642.622 66.8155 643.062 66.3858C640.977 64.3501 634.261 65.5264 634.261 65.5264C634.261 65.5264 628.27 60.6345 624.2 60.7142C619.589 60.8045 613.839 62.6934 610.938 65.5264Z'
            fill='#89c2e5'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
        </g>
        {/* <g
          opacity='1'
          // transform='translate(30,30)'
        >
          <path
            d='M128.906 116.797C131.393 118.04 137.578 112.734 139.453 111.328C139.063 110.938 139.063 110.938 138.672 110.547C140.635 106.62 144.802 103.959 147.656 100.391C150.75 96.523 151.205 91.3405 153.125 87.5C155.979 81.7922 153.385 74.7396 153.516 68.3594C153.602 64.1386 152.344 61.4029 152.344 56.6406C152.344 54.0194 149.763 50.6278 151.953 48.4375C144.504 40.9879 137.36 30.1139 126.172 28.5156C118.514 27.4216 111.021 25.0313 102.344 26.5625C99.9517 26.9846 96.9991 28.8033 94.5313 29.2969C87.6733 30.6685 79.8176 38.9324 75.3906 43.3594C65.1744 53.5756 65.2344 68.667 65.2344 82.0313C65.2344 96.9756 83.3732 112.412 95.3125 117.188C103.246 120.361 122.165 123.538 128.906 116.797Z'
            fill='#fe8e86'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M151.563 48.0469C150.679 48.9309 151.174 61.7273 151.563 63.6719C152.854 70.1282 155.565 88.185 150 93.75C151.367 95.1172 151.367 95.1172 152.734 96.4844C154.727 94.492 155.448 90.6862 156.25 88.2813C160.691 74.9591 159.439 59.8616 151.563 48.0469Z'
            fill='#f93628'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M150.781 93.75C145.99 98.5409 144.258 104.739 137.891 108.984C138.411 110.026 138.411 109.505 137.891 110.547C138.477 111.133 138.477 111.133 139.063 111.719C145.841 108.33 148.394 100.825 153.125 96.0938C151.953 94.9219 151.953 94.9219 150.781 93.75Z'
            fill='#f45956'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
        </g> */}
        <g opacity='1'>
          <path
            d='M297.656 271.875C290.333 268.214 281.809 271.316 276.563 276.563C275.456 277.669 274.167 281.942 273.047 282.422C272.68 282.579 266.757 284.531 266.406 284.375C260.676 281.828 259.312 278.516 251.953 278.516C247.512 278.516 243.3 281.794 240.625 284.766C238.98 286.593 239.598 288.624 237.109 289.453C237.109 295.876 235.948 294.426 231.641 297.656C231.43 297.814 225.497 302.695 228.906 302.734C250.91 302.992 272.917 302.734 294.922 302.734C325 302.734 355.078 302.734 385.156 302.734C387.127 302.734 390.518 303.93 391.406 301.563C392.139 299.608 390.908 299.004 390.234 297.656C388.291 293.768 383.957 290.234 379.297 290.234C377.713 290.234 376.163 291.326 374.609 291.016C373.013 290.696 368.339 282.566 366.797 281.641C364.119 280.034 359.138 279.356 356.25 280.078C354.813 280.437 351.582 282.898 350.391 282.422C348.841 281.802 346.803 279.011 344.922 278.906C341.564 278.72 338.607 278.581 336.328 280.859C334.062 279.349 335.035 273.937 333.984 271.484C329.969 262.114 315.097 256.158 306.641 262.5C302.999 265.231 300.434 268.403 297.656 271.875Z'
            fill='#f5f0ea'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M291.016 231.25C295.408 235.642 301.273 235.966 306.25 242.188C308.467 244.958 309.814 255.493 311.328 256.25C312.849 257.01 322.781 254.078 326.953 255.469C332.331 257.261 336.186 260.795 340.234 264.844C342.847 267.456 342.441 271.347 344.922 273.828C347.142 271.608 349.413 272.135 351.953 273.828C357.295 268.486 361.669 268.7 355.469 262.5C354.955 261.986 353.013 260.815 352.344 260.547C351.162 260.074 347.266 258.594 347.266 258.594C347.266 258.594 347.921 256.272 348.047 255.078C348.434 251.397 347.984 247.732 347.266 244.141C344.283 229.227 326.397 220.459 312.5 223.438C307.472 224.515 298.937 233.605 298.937 233.605C298.937 233.605 294.303 227.963 291.016 231.25Z'
            fill='#68b1de'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M485.156 278.125C477.313 278.173 471.64 282.665 466.406 289.063C465.355 290.347 461.543 302.323 464.063 302.344C495.702 302.602 527.345 302.602 558.984 302.344C565 302.295 552.867 297.49 552.344 297.266C550.362 296.416 547.185 299.073 545.703 298.438C544.006 297.71 541.759 293.712 540.625 292.578C538.057 290.01 537.779 291.332 535.547 289.844C528.897 285.411 524.076 289.653 518.359 291.797C517.645 292.065 508.574 290.365 508.203 290.234C505.602 289.316 503.078 284.208 500.781 282.422C496.142 278.814 490.843 278.09 485.156 278.125Z'
            fill='#f5f0ea'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M446.094 233.594C435.144 233.594 432.221 234.1 424.609 242.188C421.82 245.151 419.922 253.516 419.922 253.516C419.922 253.516 412.447 252.874 407.422 255.469C403.241 257.977 394.487 265 394.487 265C394.487 265 387.171 260.727 384.375 260.547C374.093 259.884 368.478 260.989 360.938 266.016C363.549 268.627 371.867 266.009 376.953 270.313C379.336 272.329 383.418 276.345 383.594 279.688C383.725 282.172 382.616 285.35 384.375 287.109C386.062 285.422 384.25 283.328 385.938 281.641C392.216 287.919 399.286 284.431 406.25 290.234C408.194 288.777 411.166 289.291 412.891 291.016C415.178 289.491 417.03 285.349 420.313 285.156C422.537 285.025 426.677 286.587 426.953 284.375C427.824 277.408 428.91 269.096 437.5 267.188C446.52 265.183 451.104 269.761 459.375 265.625C461.326 264.65 463.335 265.962 465.234 264.063C466.239 264.565 470.793 262.8 471.484 262.109C472.463 263.088 472.068 263.475 473.047 264.453C475.513 262.809 476.651 258.564 480.078 257.422C488.411 254.644 493.702 258.717 498.047 265.234C500.339 262.942 508.583 262.489 511.328 265.234C523.052 253.51 532.792 247.934 548.047 259.375C552.377 255.044 544.25 246.593 541.406 243.75C535.108 237.452 516.406 243.75 516.406 243.75C516.406 243.75 509.737 240.876 508.984 240.625C508.635 240.509 508.292 240.201 508.203 239.844C506.599 233.425 505.688 228.735 500.391 223.438C496.381 219.428 484.817 219.72 484.817 219.72C484.817 219.72 478.697 208.792 471.275 208.89C463.853 208.988 459.392 219.763 459.392 219.763C459.392 219.763 451.286 219.643 448.746 223.159C446.207 226.674 447.032 230.779 446.094 233.594Z'
            fill='#89c2e5'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M241.406 262.5C241.797 263.086 241.797 263.086 242.188 263.672C247.32 261.105 259.323 263.057 261.328 256.641C262.485 252.94 261.443 249.379 263.281 245.703C263.899 244.468 267.578 239.453 267.578 239.453C265.662 233.703 250.17 245.924 248.438 247.656C244.317 251.777 244.924 258.982 241.406 262.5Z'
            fill='#68b1de'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M552.734 262.109C552.148 262.695 552.148 262.695 551.563 263.281C554.679 267.955 557.451 276.504 554.688 282.031C556.771 284.115 558.009 287.956 560.938 288.281C563.459 288.561 567.216 288.888 569.531 290.625C573.897 293.899 575.59 297.856 578.906 301.172C584.668 297.331 572.724 281.827 567.969 280.469C565.529 279.772 562.786 279.973 560.938 278.125C563.487 273.027 557.222 264.353 552.734 262.109Z'
            fill='#68b1de'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M471.875 260.938C469.088 263.725 457.964 265.184 454.297 266.406C448.072 268.481 448.99 267.438 455.078 272.656C458.98 269.312 463.039 266.406 468.359 266.406C470.807 266.406 469.219 267.568 472.266 267.188C474.551 266.902 472.996 261.685 471.875 260.938Z'
            fill='#409dd3'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M510.156 265.234C510.547 265.625 510.547 265.625 510.938 266.016C511.523 265.625 511.523 265.625 512.109 265.234C511.39 264.515 511.066 263.345 510.156 262.891C507.797 261.711 503.965 263.625 501.563 263.281C499.713 263.017 502.14 261.248 499.219 262.5C497.496 263.239 496.392 267.157 498.828 267.969C500.669 268.582 503.26 267.188 505.078 267.188C507.436 267.188 507.955 266.335 510.156 265.234Z'
            fill='#1b85ce'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M393.75 286.328C391.171 283.749 387.348 283.527 386.328 280.469C381.591 280.469 384.911 295.167 393.75 286.328Z'
            fill='#1b85ce'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M336.719 280.859C339.397 279.52 342.977 281.632 345.313 279.297C343.919 277.904 341.352 279.043 339.453 278.516C339.045 278.402 331.561 274.764 334.375 278.516C335.038 279.4 335.938 280.078 336.719 280.859Z'
            fill='#abc5c5'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M345.313 274.219C348.252 274.219 349.678 276.494 352.344 273.828C350.847 271.833 343.641 269.205 345.313 274.219Z'
            fill='#427cc8'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M561.328 271.094C559.736 272.686 559.746 278.496 561.328 280.078C563.631 277.775 563.751 273.517 561.328 271.094Z'
            fill='#ded7b8'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M406.25 289.844C408.123 292.091 410.787 293.12 413.281 290.625C411.08 288.424 408.578 287.516 406.25 289.844Z'
            fill='#409dd3'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M510.156 264.453C508.744 265.159 506.448 266.208 505.469 267.188C507.687 269.406 513.613 267.91 510.156 264.453Z'
            fill='#68b1de'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M284.125 227.938C280.917 227.687 277.624 228.042 274.375 229.125C272.415 229.778 268.656 234.344 268.656 234.344C268.656 234.344 266.318 237.479 265.156 238.781C263.995 240.083 264.171 239.434 262.281 244.188C260.392 248.941 259.031 257 259.031 257L255.031 259.469C255.031 259.469 250.697 259.625 249.031 259.625C242.981 259.625 239.886 263.246 236.344 267.969C233.515 271.741 233.219 280.469 233.219 280.469C233.219 280.469 223.418 287.001 221.875 289.469C219.487 293.29 219.021 294.327 219 298.094C218.979 301.86 221.781 304.531 221.781 304.531C221.781 304.531 582.346 302.233 581.969 301.75C581.989 301.69 582.008 301.656 582.031 301.594C582.035 301.585 582.028 301.571 582.031 301.562C581.771 301.563 581.51 301.564 581.25 301.562C580.513 301.558 580.208 300.521 579.688 300C579.297 300.195 579.297 300.211 578.906 300.406C576.364 297.864 574.984 294.515 571.875 291.406C568.857 288.389 563.847 289.44 560.938 287.5C558.792 286.07 557.292 283.854 555.469 282.031C557.869 277.23 556.19 267.534 552.344 263.688C552.93 262.906 552.945 262.906 553.531 262.125C551.506 260.1 551.041 259.39 549.219 256.656C548.437 257.438 548.438 257.437 547.656 258.219C540.044 250.607 525.762 250.619 517.969 257.438C515.461 259.632 512.745 261.952 510.938 264.844C510.361 265.766 509.781 267.594 509.781 267.594C509.781 267.594 506.33 265.684 505.094 265.375C502.769 264.794 499.219 267.188 499.219 267.188C499.219 267.188 497.627 263.076 497.281 262.5C495.084 258.838 489.975 255.469 485.562 255.469C480.79 255.469 477.416 258.522 474.219 261.719C472.903 263.035 472.062 267.281 472.062 267.281C472.062 267.281 468.759 265.625 467.594 265.625C462.494 265.625 457.182 264.862 453.594 267.938C444.592 260.221 430.99 263.685 426.562 276.969C425.861 279.072 426.344 284.406 426.344 284.406C426.344 284.406 421.435 283.829 419.531 284.781C415.651 286.722 409.25 291.875 409.25 291.875C409.25 291.875 402.06 280.511 398.969 280.125C397.155 279.898 396.015 281.094 394.188 281.094C391.484 281.094 386.656 286.844 386.656 286.844C386.656 286.844 384.54 280.525 383.219 276.562C382.581 274.649 377.776 269.964 377.344 269.531C373.154 265.342 364.204 263.055 360.562 265.719C359.202 267.079 355.875 269.531 355.875 269.531L350.531 275.531C350.531 275.531 340.753 264.191 337.906 261.344C331.267 254.705 324.184 254.313 314.844 254.312C312.992 254.312 312.125 255.469 312.125 255.469C312.125 255.469 310.246 247.534 308.219 244.156C302.723 234.997 293.749 228.69 284.125 227.938Z'
            fill='#afd4e7'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
          <path
            d='M221.789 304.52C221.789 304.52 221.475 304.532 220.974 304.549'
            fill='#afd4e7'
            fill-rule='nonzero'
            opacity='1'
            stroke='none'
          />
        </g>
      </g>
    </svg>
  );

  return (
    <div className='pt-[60px] bg-slate-200 overflow-hidden'>
      <div className='flex flex-col md:flex-row justify-between md:w-[1240px] mx-auto'>
        <div
          className='w-full flex flex-col justify-center items-center pt-20 overflow-hidden mb-10'
          // style={{ backgroundColor: hexArr[4] }}
        >
          <div className='flex flex-col h-full w-full relative z-[0]'>
            <div
              ref={parallax.ref}
              className='w-full h-full absolute z-[-1] overflow-visible pt-8 ml-[30vw] md:ml-0'
            >
              {svgSun}
            </div>
            {svg}
          </div>
        </div>
        <div className='w-full'>
          <div className='p-10 pl-20'>
            <h3 className='font-bold pb-4'>Os 24 Termos Solares</h3>
            <p>
              Em cada ano, o mundo inteiro é influenciado pelo ciclo das 4
              Estações. Há milênios, os chineses dividem cada estação em 6
              períodos. Esses períodos se chamam &quot;termos solares&quot;, e
              aqui você vai conhecê-los um a um.
            </p>
            <h3 className='font-bold pb-4 pt-8'>Cultura, natureza e saúde</h3>
            <p>
              Os termos solares têm nomes e características próprias. Eles são
              descritos em poemas e outras manifestações artísticas, e
              influenciam a paisagem, a vida cotidiana e os hábitos de
              preservação da saúde.
            </p>
            <h3 className='font-bold pb-4 pt-8'>Navegue e oriente-se</h3>
            <p>
              Aqui você pode acompanhar a passagem dos Termos Solares e ler mais
              sobre cada um desses períodos. Você será levado à descrição
              completa do período atual e poderá observar o mundo com outros
              olhos.
            </p>
          </div>
        </div>
      </div>
      <div className='w-[1000px] md:w-full'>
        <Wave
          fill='#99D0F7'
          paused={false}
          options={{
            // height: 20,
            amplitude: 40,
            speed: 0.15,
            points: 5,
          }}
          className='h-[290px]'
        />
      </div>
    </div>
  );
}
