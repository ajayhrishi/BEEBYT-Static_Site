//______________________ Service_Page
//-------
export const service_page_styles = {
  service_page_main_div: `
    w-[100%] h-[100%] bg-[#cacacb] flex flex-col
    pb-[10vh]  items-center justify-center pt-[5vh]
  `,
  service_page_title_container: `
    flex h-[50%] w-[100%] justify-center
  `,
  service_page_title: `
    text-black text-[40px] font-medium
  `,
  social_media_card_container: `
  flex items-center justify-center flex-wrap
  max-w-[1000px]
  

`,
};
//---------------------------------------- Social Media cards

export const card1style = {
  card_main_class_div: `bg-gray-200 h-[420px] w-[250px] flex flex-col p-[10px] 
      rounded-[20px] hover:cursor-pointer transition-all
      m-[30px]
      ph:ml-[auto] ph:mr-[auto]
      shadow-[0_10px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:translate-y-[-10px]
      
      `, // Responsive sizes

  //--------------- top container styles card 1
  card_top_main_container: `flex mb-[10px] p-[3px]`,
  card_heading_elements_container: `flex mt-[2px]`,

  card_heading_logo_conainer: "flex mr-[5px]",
  card_logo_background: `bg-black w-[38px] h-[38px] 
    flex items-center justify-center 
    rounded-full mt-[3px]`,
  card_heading_logo: "flex w-full h-auto",

  card_heading_typography_elements_container: "flex flex-col w-[140px]",
  mainheadingandtag: "flex gap-[5px] text-[14px]",
  main_heading: "font-bold text-[16px]",
  below_image_heading_tag: `ml-[15px] flex text-[14px]`,
  subtitle_below_typography: "mt-[2px] text-[13px] font-[bold]",
  beebyte_tag: `ml-[4px] font-light`,
  service: `font-medium text-[14px]`,

  card_3_dot_icon_container: `h-[50px] w-[50px] flex justify-center align-center`,
  card_3_dot_icon: `h-[25px] w-[25px] mt-[10px] ml-[auto]`,
  //----------------- Main Image container styles card 1
  card_image_conatiner: `flex items-center justify-center mb-[auto]`,
  card_image: `h-[300px] w-[auto]`,
  //----------------- bottom container styles card 1
  card_bottom_main_conatiner: `flex`,

  main_segments: `flex gap-[10px] mt-[12px]`,

  like_segment: `flex mt-[2px] ml-[10px]`,
  like_icon: `h-[20px]`,
  number_of_likes: `mt-[-3px] ml-[3px]`,

  comment_segment: `flex `,
  comment_icon: ``,
  number_of_comments: `mt-[-1px] ml-[3px]`,

  share_segment: `flex`,
  share_icon: ``,
  number_of_shares: ` ml-[3px]`,

  save_icon_container: `flex ml-[30px]`,
  save_icon_class: "",
};

export const card2style = {
  card_main_class_div: `bg-gray-200 h-[320px]   ph:h-[340px]
  w-[330px] transition-all
  flex flex-col rounded-[20px]
  hover:cursor-pointer  pt-[10px]  m-[5px] mt-[auto] mb-[auto]
  shadow-[0_10px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] hover:translate-y-[-10px]
`, // Responsive sizes

  //--------------- top container styles card 2
  card_top_main_container: "flex mb-[10px] ml-[10px] p-[5px]",
  card_heading_elements_container: "flex ",

  card_heading_logo_container: "flex mr-[10px] ml-[15px]",
  card_logo_background:
    "bg-black h-[50px] w-[50px] flex items-center justify-center rounded-full",
  card_heading_logo: "ml-[5px] flex w-full h-auto",

  card_heading_typography_elements_container:
    "flex flex-col w-[160px] ml-[10px]",
  mainheadingandtag: "flex gap-[5px]",
  main_heading: "font-bold",
  below_image_heading_tag: `ml-[15px] flex`,
  subtitle_below_typography: "mt-[2px] text-[18px] font-[bold]",
  beebyte_tag: `ml-[4px] font-light`,
  service: `ml-[15px] font-medium flex w-[180px]`,

  card_3_dot_icon_container: `h-[50px] w-[50px] flex justify-center align-center 
                              ml-[auto] mr-[10px] mt-[5px]`,
  card_3_dot_icon: `h-[25px] w-[25px] ml-[auto]`,
  //----------------- Main Image container styles card 2
  card_image_conatiner: "flex",
  card_image: `w-[100%]`,
  //----------------- bottom container styles card 2
  main_segments: `flex mt-[auto]`,

  like_segment: `flex align-center justify-center mt-[2px] mr-[5px] ml-[10px]`,
  like_icon: `h-[20px]`,
  number_of_likes: `text-center mt-[-3px] ml-[3px]`,

  comment_segment: `flex  mr-[5px] ml-[5px]`,
  comment_icon: ``,
  number_of_comments: `text-center mt-[-1px] ml-[3px]`,

  share_segment: `flex align-center justify-center  mr-[5px] ml-[5px]`,
  share_icon: ``,
  number_of_shares: `text-center ml-[3px]`,

  save_icon_container: `flex align-center justify-center  ml-[auto] mr-[10px]`,
  save_icon_class: "ml-auto w-[25px] h-[25px]  mr-[auto]",
};
