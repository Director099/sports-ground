export const IconCalendar = ({active = false}) =>
  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 0.25C5.41421 0.25 5.75 0.585786 5.75 1V2.25H12.25V1C12.25 0.585786 12.5858 0.25 13 0.25C13.4142 0.25 13.75 0.585786 13.75 1V2.25H15C16.5188 2.25 17.75 3.48122 17.75 5V6.25H0.25V5C0.25 3.48122 1.48122 2.25 3 2.25H4.25V1C4.25 0.585786 4.58579 0.25 5 0.25Z" fill="url(#paint0_linear_28_197)"/>
    <path d="M0.25 7.75V16C0.25 17.5188 1.48122 18.75 3 18.75H15C16.5188 18.75 17.75 17.5188 17.75 16V7.75H0.25Z" fill="url(#paint1_linear_28_197)"/>
    <defs>
      <linearGradient id="paint0_linear_28_197" x1="9" y1="0.25" x2="9" y2="18.75" gradientUnits="userSpaceOnUse">
        <stop stopColor={active ? "#F57025" : "#606060"}/>
        <stop offset="1" stopColor="#272727"/>
      </linearGradient>
      <linearGradient id="paint1_linear_28_197" x1="9" y1="0.25" x2="9" y2="18.75" gradientUnits="userSpaceOnUse">
        <stop stopColor={active ? "#F57025" : '#606060'}/>
        <stop offset="1" stopColor="#272727"/>
      </linearGradient>
    </defs>
  </svg>
