//************ main components */
export const appStyles = {
  app: `flex items-center justify-center flex-col w-screen`,
};

export const floating_elements = {
  handburger_main_div: `fixed top-[3%] right-[3%] text-right z-[50]`,
  handburger_icon: `opacity-[0.7] ml-[auto] w-[40px]`,
  handburger_navbar: `text-white p-[2vw] bg-black opacity-[0.7] rounded-[20px]`,

  callIcon: `fixed transform -translate-y-1/2 pl-2 z-[1000] top-[80%]  
  left-[3%] ph:left-[0%] 
  tbl:w-[8vw] tbl:top-[90%] tb:top-[90%] ph:top-[95%]`,

  call_icon: `lg:w-[100px] ph:w-[15vw] phl:w-[5vw] tb:w-[15vw] 
  h-full transition-transform duration-300 ease-in-out hover:scale-[1.1] hover:h-auto`,

  floatingSocialMediaBar: `z-[1000] flex flex-col items-center justify-center bg-[rgba(0,0,0,0.2)] 
  transition-transform duration-300 ease-in-out  hover:bg-[rgba(0,0,0,0.4)] hover:scale-[1.03]
  fixed top-[40%] tbl:top-[20%]
  p-[10px] w-[auto] h-[auto] right-[3%] 
  rounded-[60px] ph:rounded-[5vw] tb:rounded-[3vw] tbl:rounded-[2vw]
  ph:right-[-4%] tb:right-[-2%] tbl:right-[-2%]`,

  floatingSocialMediaBarIcons: `
  transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2]
  m-[10px] h-[30px] w-[auto] ph:w-[7vw] 
  tbl:w-[3vw] tbl:h-[auto]
  `,
  gradientMove: `animate-[gradientMove_2s_linear_infinite]`,
};

export const navbar_styles = {
  navbar_parent: `transition-all duration-300 ease-in-out
  fixed top-0 z-[1000] h-[15vh] w-[80%] rounded-b-[100px] flex align-center justify-center
  
  `,

  navbar_buttons_container: `flex justify-center h-[100%] gap-[2vw]`,

  navbar_button: `transition-transform duration-300 ease-in-out
  font-inter flex text-[14px] tracking-[0.3em] text-white hover:scale-105 
  hover:cursor-default hover:text-shadow mt-[7%] whitespace-nowrap
  w-[150px] h-[30px]`, // Fixed height for consistency

  home_button: `w-[100px]`,

  get_free_consultancy_button_background: `
  mt-[6%] ml-[3%] h-[34px] w-[137px] hover:cursor-pointer
  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500
  transition-all duration-300 ease-in-out
  flex items-center justify-center text-white rounded-[94px]
  `,

  get_free_consultancy_button: `
  bg-black h-[30px] w-[130px] transition-all duration-300 ease-in-out hover:cursor-pointer
  flex items-center justify-center rounded-[94px]
  text-white text-[12px]
  `,

  //-------------- enabled scroll styles
  navbar_parent_varient: `transition-all duration-300 ease-in-out
  fixed top-0 z-[1000] rounded-b-[100px] align-center flex justify-center 
  bg-black bg-opacity-60 hover:bg-opacity-100
  ph:hidden h-[6vh] w-[60%] 
  tb:w-[100%] tbl:w-[100%] tbl:h-[10vh] 
  `,

  navbar_buttons_container_varient: `mt-[8px] flex items-center justify-center gap-[2vw]`,

  navbar_button_varient: `transition-transform duration-300 ease-in-out
  font-inter flex text-[14px] tracking-[0.3em] text-white hover:scale-105 
  hover:cursor-default hover:text-shadow whitespace-nowrap`,

  get_free_consultancy_button_background_varient: `
   h-[33px] w-[135px] mb-[5px]
  bg-gradient-to-r from-red-500 via-yellow-500 to-green-500
  transition-all duration-300 ease-in-out
  flex items-center justify-center text-white rounded-[94px]
  hover:cursor-pointer`,

  get_free_consultancy_button_varient: `
  bg-black h-[30px] w-[130px] transition-all duration-300 ease-in-out
  flex items-center justify-center rounded-[94px]
  text-white text-[12px]
  hover:cursor-pointer
  `,
};

// Exporting the styles to use in components
export const textShadowStyle = {};
