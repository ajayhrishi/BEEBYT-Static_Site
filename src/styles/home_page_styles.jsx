//______________________ Home_Page
export const home_page_styles = {
  main_div: `
  transition-all duration-300 ease-in-out 
  flex flex-col w-[100%] h-[100vh] items-center bg-[#cacacb]
  ph:w-[10]  
  phl:w-[100%]    
  lg:w-[100%]  
  
  `,

  homepage_top_banner: `
    transition-all duration-300 ease-in-out 
    bg-[url('./assets/background_images/home_page_back_ground.png')] 
    bg-cover bg-center shadow-[0px_10px_40px_rgba(0,0,0,1)] 
    rounded-b-[100px] ph:rounded-b-[30px] tbl:rounded-b-[20px]
    w-[85%] ph:w-[100%] tbl:w-[100%]
    h-[75%] lg:hover:h-[85%] tbl:h-[63%] tbl:w-[100%] tb:w-[100%]
    `,

  logo_container: `transition-all duration-300 ease-in-out
    lg:h-[200px] lg:w-[auto] flex lg:ml-[1%] ph:hidden tbl:hidden tb:mt-[10vh]
    `,
  logo: `transition-all duration-300 ease-in-out
    lg:w-[auto] lg:h-[auto]`,

  home_page_center: `
  ml-[20%] ph:ml-[0%]
  `,

  home_page_center_title: `
      text-white font-inter font-normal 
      text-[80px] ph:text-[15vw] tbl:text-[7vw]
      ph:mt-[40vh] ph:ml-[5%] tbl:mt-[20vh]
      leading-[1.2] tracking-[0.5em] 
      cursor-default
`,
  home_page_center_subtitle: `
text-white font-inter font-normal leading-[1.2] tracking-[0.5em] 
ml-[10%] ph:ml-[20%]
mt-[50px] ph:mt-[20px] tbl:mt-[10px]
lg:text-[15px] ph:text-[4vw] tbl:text-[2vw]
cursor-default

`,
};
export const bottom_navbar_styles = {
  home_bottom_navbar_container: `flex mt-[auto] w-[80%] 
  ph:w-[100%] tbl:w-[100%] tb:w-[100%]`,

  navbar_homepage_bottom: `  
  transition-[height,box-shadow,width] duration-500 ease-in-out 
  flex justify-center mt-[auto] shadow-[0_-10px_50px_rgba(0,0,0,1)]
  bg-[url('./assets/background_images/paper_background.png')] bg-cover bg-center 
  
  w-[100%] h-[12vh] lg:hover:h-[20vh] tbl:h-[18vh]
  rounded-t-[550px] ph:rounded-t-[20px]
  `,
  navbar_homepage_button_container: `flex justify-center`,
  navbar_homepage_button_icon: `cursor-pointer hover:scale-[1.1]
  m-[30px] ph:m-[15px]
  mt-[30px] tbl:mt-[20px]
  h-[5vh] ph:h-[6vh] tbl:h-[10vh]`,
};

/*
    lg: lg: lg: lg: 
    tb: tb: tb: tb: 
    tbl: tbl: tbl: tbl: 
    ph: ph: ph: ph: 
    phl:  phl:  phl:  phl:


  

sm – min-width: 640px
md – min-width: 768px
lg – min-width: 1024px
xl – min-width: 1280px
2xl – min-width: 1536px

Device Type	Resolution Range (Width x Height)	Aspect Ratio
Desktop	1024 x 768 – 5120 x 2880	16:9 (most common), 4:3 (older models)
Mobile	320 x 480 – 1440 x 3200	16:9 (common), 4:3 (older models)
Tablet	768 x 1024 – 2560 x 1600	4:3, 16:9
*/
