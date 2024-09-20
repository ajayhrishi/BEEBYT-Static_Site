const an = `transition-all duration-300 ease-in-out`;

export const our_team_page_styles = {
  main_div: `${an} cursor-default 
  pb-[10vh]
  h-[auto] flex relative z-0 items-center justify-center bg-[#cacacb]`,

  /**************** content segment **************/
  content_segment: `${an} flex justify-center items-center flex-col h-[auto] w-[80%] ph:w-[100%]
  bg-[#181818] 
  text-white rounded-[20px] p-[5vw]
  shadow-[10px_10px_30px_rgba(0,0,0,1)] hover:[5px_5px_10px_rgba(0,0,0,1)]
  m-[30px] ph:m-[0px] mb-[40px]
  `,

  top_div: `h-[auto]`,
  ceo_details: `h-[auto] w-[auto]`,
  ceo_card: `flex mt-[5vh] ph:items-center ph:mr-[10px]`,

  CEO_picture: `${an} h-[15vh] phl:h-[30vh] w-[auto] rounded-[50%]`,
  name_des: `${an} flex-col ml-[2vw]`,
  ceo_name: `${an} hover:text-[#18ff8e]
  text-[3vw] ph:text-[6vw] phl:text-[3vw] tb:text-[6vw] tbl:text-[3vw]
  `,
  designation_name: `${an} hover:text-[#18ff8e] 
   text-[2vw] ph:text-[4vw] tb:text-[3vw]
  `,
  ceo_words: `${an} w-[40vw] text-wrap m-[2vw] hover:text-[#18ff8e]
   text-[1vw] ph:text-[3vw] ph:mt-[10px] tb:text-[2vw] tbl:text-[2vw]
  `,

  location_container: `flex ml-[80%] items-center justify-center  ph:mt-[10px] tb:min-w-[10vw]`,
  location_icon: `${an} h-[1vw] ph:h-[3vw] tb:h-[3vw] tbl:h-[2vw] w-[auto] `,
  location_typo: `${an} ml-[10px] text-[1vw]  hover:text-[#18ff8e] 
  ph:text-[3vw] tb:text-[2vw] tbl:text-[2vw] min-w-[100px]`,

  bottom_div: ``,
  small_title: `text-[1vw] ph:text-[2vh] tb:text-[2vh] tbl:text-[2vw] phl:text-[2vh]`,
  employee_container: `flex flex-wrap items-center justify-center mt-[5vh]`,
  emp_card: `${an} h-[130px] w-[240px] bg-[#2b2b2b] m-[1vw] mb-[2vw] ph:mb-[2vh] rounded-[1vh] p-[10px] flex justify-center 
  items-center shadow-lg hover:shadow-2xl hover:scale-105 hover:translate-y-[-10px]`, // Added shadow and movement effect
  emp_img: `${an} w-[auto] h-[90px] m-[10px] rounded-[10px]`,
  emp_details: `flex flex-col`,
  emp_name_typ: `${an} text-[13px] hover:text-[#8da86a]`,
  emp_desg_typ: `${an} text-[13px] hover:text-[#8da86a]`,
};
