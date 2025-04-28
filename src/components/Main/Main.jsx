import { assets } from "../../assets/assets"

function Main() {
  return (
    <div className="main min-h-[100vh] pb-[15vh] flex-1 relative">
      <div className="nav flex items-center justify-between  p-[20px] text-[#585858]">
        <p className="text-[32px]">Entity</p>
        <img className="w-[50px] rounded-[50px]" src={assets.profile} alt="" />
      </div>
      <div className="main-container m-[auto]  mt-[3rem] flex flex-col gap-[100px] justify-center flex-1 pl-[450px] ">
        <div className="greet ml-[80px]">
          <p><span className="text-[70px] font-semibold bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent ">Welcome to Entity</span></p>
          <p className="text-[40px] font-semibold">How can i help you today ?</p>
        </div>
        <div className="cards flex ml-[80px] gap-[2.5rem]">
          <div className="card p-[10px] w-[220px] h-[180px] bg-[#cbccce] rounded-[12px] relative hover:bg-[#dfe4ea]">
            <p className="text-[#585858] font-medium">Suggest me some beautiful places in india to travel</p>
            <img className="absolute w-[30px] bottom-[5px] right-[5px]" src={assets.compass_icon} alt="" />
          </div>
          <div className="card p-[10px] w-[220px] h-[180px] bg-[#cbccce] rounded-[12px] relative hover:bg-[#dfe4ea]">
            <p className="text-[#585858] font-medium">Suggest some effective ways to learn a new recipe quickly?</p>
            <img className="absolute w-[30px]  bottom-[5px] right-[5px]" src={assets.message_icon} alt="" />
          </div>
          <div className="card p-[10px] w-[220px] h-[180px] bg-[#cbccce] rounded-[12px] relative hover:bg-[#dfe4ea]">
            <p className="text-[#585858] font-medium">What are some interesting ideas about reducing food waste at home?</p>
            <img className="absolute w-[30px]  bottom-[5px] right-[5px]" src={assets.bulb_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom absolute flex flex-col items-center bottom-0 w-[55%] px-[20px] py-[0px] m-[auto]">
          <div className="search-box flex items-center justify-between w-[90%] gap-[20px] bg-[#f0f4f9] py-[10px] px-[20px] rounded-[50px]">
            <input className="w-[90%] text-[20px] p-[8px] outline-none" type="text" placeholder="enter your prompt here..." />
            <div className="flex gap-[10px]">
              <img className="w-[24px] cursor-pointer" src={assets.gallery_icon} alt="" />
              <img className="w-[24px] cursor-pointer" src={assets.mic_icon} alt="" />
              <img className="w-[24px] cursor-pointer" src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info text-[#585858] font-medium">
            Entity may display inaccurate info,including about people, so double check it's response
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main