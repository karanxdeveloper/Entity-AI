import { useContext } from "react"
import { assets } from "../../assets/assets"
import { Context } from "../../context/Context"

function Main() {

  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

  return (
    <div className="main min-h-[100vh] pb-[15vh] flex-1  relative">
      <div className="nav flex items-center justify-between  p-[20px] text-[#585858]">
        <p className="text-[32px]">Entity</p>
        <img className="w-[50px] rounded-[50px]" src={assets.profile} alt="" />
      </div>
      <div className="main-container max-w-[80vw] justify-center   m-[auto]  mt-[3rem] flex flex-col gap-[100px]   ">

        {!showResult ? <>

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
        </>
          : <div style={{ scrollbarWidth: "none" }} className="result max-h-[69vh] overflow-y-scroll">
            <div className="result-title flex items-center gap-3 mb-5">
              <img className="w-[50px] rounded-[50px]" src={assets.profile} alt="" />
              <p className="text-[20px]">{recentPrompt}</p>
            </div>
            <div className="result-data flex items-start gap-3">
              <img className="w-[50px]" src={assets.entity} alt="" />
              {loading?<div className="loader w-[100%] flex flex-col gap-[10px]">
                <hr className="border-none rounded-[4px] bg-[#f6f7f8] bg-gradient-to-r from-[#71757c] to-[#eee8e7] h-[20px]"/>
                <hr className="border-none rounded-[4px] bg-[#f6f7f8] bg-gradient-to-r from-[#eee8e7] to-[#71757c] h-[20px]"/>
                <hr className="border-none rounded-[4px] bg-[#f6f7f8] bg-gradient-to-r from-[#71757c] to-[#eee8e7] h-[20px]"/>
              </div>
              :<p className="text-[20px] font-normal leading-relaxed" dangerouslySetInnerHTML={{ __html: resultData }}></p>}
              
            </div>
          </div>
        }

        <div className="main-bottom  absolute flex flex-col items-center justify-center bottom-0 w-[85%] px-[20px] py-[0px] m-[auto]">
          <div className="search-box  flex items-center justify-between w-[90%] gap-[20px] bg-[#f0f4f9] py-[10px] px-[20px] rounded-[50px]">
            <input onChange={(e) => setInput(e.target.value)} value={input} className="w-[90%] text-[20px] p-[8px] outline-none" type="text" placeholder="enter your prompt here..." />
            <div className="flex gap-[10px]">
              <img className="w-[24px] cursor-pointer" src={assets.gallery_icon} alt="" />
              <img className="w-[24px] cursor-pointer" src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} className="w-[24px] cursor-pointer" src={assets.send_icon} alt="" />
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