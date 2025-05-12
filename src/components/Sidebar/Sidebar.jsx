import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

function Sidebar() {

    const [extended, setExtended] = useState(false)
    const { onSent, prevPrompt, setRecentPrompt,newChat } = useContext(Context)

    const loadPrompt = async (prompt) =>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar min-h-[100vh] px-[25px] py-[15px] inline-flex flex-col justify-between bg-[#f0f4f9]'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu w-[20px] mt-[10px] cursor-pointer ml-[10px]' src={assets.menu_icon} alt="" />
                <div onClick={()=>newChat()} className='new-chat inline-flex mt-[40px] items-center cursor-pointer gap-[10px] px-[15px] py-[10px] text-[gray] bg-[#e6eaf1] rounded-[50px]'>
                    <img className='w-[20px]' src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? <div className="recent flex flex-col">
                    <p className="recent-title mt-[30px] mb-[20px]">Recent</p>
                    {prevPrompt.map((item, index) => {
                        return (
                            <div onClick={()=>{loadPrompt(item)}} className='recent-entry flex items-center gap-[10px] p-[10px] pr-[40px] text-[#282828] rounded-[50px] cursor-pointer hover:bg-[#e2e6eb]'>
                                <img className='w-[20px]' src={assets.message_icon} alt="" />
                                <p>{item.slice(0,18)}</p>
                            </div>
                        )
                    })}

                </div> : null}
            </div>
            <div className="bottom flex flex-col ">
                <div className="bottom-item flex items-center gap-[10px] p-[10px] text-[#282828] rounded-[50px] cursor-pointer hover:bg-[#e2e6eb]">
                    <img className='w-[20px]' src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item flex items-center gap-[10px] p-[10px]  text-[#282828] rounded-[50px] cursor-pointer hover:bg-[#e2e6eb]">
                    <img className='w-[20px]' src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item flex items-center gap-[10px] p-[10px]  text-[#282828] rounded-[50px] cursor-pointer hover:bg-[#e2e6eb]">
                    <img className='w-[20px]' src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar