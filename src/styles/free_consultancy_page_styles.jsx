export const sale_page_styles = {
  main_div: `
  flex flex-col h-[120vh] ph:h-[200vh] 
  tbl:h-[280vh] tb:h-[120vh]
  w-[100%] bg-[#cacacb] justify-center items-center gap-[1px] relative
  pb-[10vh] 
  `,

  //-------------- background_design
  background_image: `
  ml-auto mr-auto mt-[7%] h-[300px] ph:h-[auto] tb:h-[auto] w-auto opacity-100 relative z-0`,

  content_div: `
  ph:mt-[10vh]
  w-[80%] h-[100%] absolute z-3 `,

  //-------------- top level design
  top_container: `
  w-[100%] h-[25%] ph:h-[17%] relative z-3 mt-[3%]
  flex flex-col `,
  main_title: `text-[40px] ph:text-[9vw] ml-[auto] mr-[auto] mt-[2%] ph:mt-[10%]`,
  second_title: `text-[20px] ph:text-[6vw] ml-[auto] mr-[auto] mt-[1%] `,
  third_title: `text-[17px] ph:text-[4vw]
  ml-[auto] mr-[auto] mt-[1%] w-[70%] text-center ph:hidden
 
  `,

  //-------------- middle container design
  middle_container: ` 
  w-[100%] h-[40%] ph:h-[auto] relative z-3 ph:mt-[5vh] `,
  tiny_title: `ml-[10px] font-bold `,
  black_line: `ml-[auto] mr-[auto] mt-[10px] mt-[5px]`,

  md_content_container: ` flex flex-col h-[auto] `,

  row: `h-[30%] ph:h-[auto] flex w-[100%] 
  gap-[15%]
  mt-[30px] ph:flex-col ph:mt-[10px]`,
  typography_container: `
  w-[40%] ph:w-[100%] 
  h-[30%] ph:h-[auto]
  ml-[15px] ph:mt-[20px]`,
  container_title: `text-[15px] ph:text-[5vw]
   font-bold`,
  container_text: `text-[15px] ph:text-[4vw]`,

  //-------------- bottom container design
  bottom_container: `
  w-[100%] h-[20%] 
  flex justify-center 
  `,
  talk_box_container: `flex justify-center flex-col bg-[#d9d9d9] mt-[30px]
  rounded-[20px] ph:rounded-[5px]  
  w-[400px] h-[150px]
  ph:mt-[10%]  tbl:mt-[20%] tb:mt-[20%]  
  shadow-[0_10px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-all
`,
  box_title: `h-[20%] w-[100%] text-center font-bold mt-[10px]`,

  box_content: `h-[80%] w-[100%] flex `,

  whats_app_call_container: `w-[50%] ph:w-[38%] flex justify-center`,

  whatsapp_wraper: `flex h-[50px] mt-[18%] ph:flex-col items-center`,
  whats_app_call_icon: `h-[30px] w-[30px]`,
  number: `font-bold mt-[2%] text-[15px] ml-[5px] ph:text-[13px]`,

  line_separator: `h-[80%] mt-[5px]`,

  input_box_container: `flex justify-center align-center
  w-[50%] ph:w-[65%] 
  `,
  input_box: ` rounded-[5px] text-[15px] 
  mt-[12%] ph:mt-[5px]
  w-[80%] ph:w-[97%]
  h-[50%] ph:h-[80%]
  
  p-[0] text-center`,
};
