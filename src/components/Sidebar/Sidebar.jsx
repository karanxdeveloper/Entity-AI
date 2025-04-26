import { assets } from '../../assets/assets'

function Sidebar() {
    return (
        <div className='sidebar min-h-[100vh] px-[25px] py-[15px] inline-flex flex-col justify-between bg-[#f0f4f9]'>
            <div className="top">
                <img className='menu w-[20px] cursor-pointer ml-[10px]' src={assets.menu_icon} alt="" />
                <div className='new-chat inline-flex mt-[10px] items-center cursor-pointer gap-[10px] px-[15px] py-[10px] text-[gray] bg-[#e6eaf1] rounded-[50px]'>
                    <img className='w-[20px]' src={assets.plus_icon} alt="" />
                    <p>New Chat</p>
                </div>
                <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className='recent-entry'>
                        <img className='w-[20px]' src={assets.message_icon} alt="" />
                        <p>what is react...</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img className='w-[20px]' src={assets.question_icon} alt="" />
                    <p>Help</p>
                </div>
                <div className="bottom-item recent-entry">
                    <img className='w-[20px]' src={assets.history_icon} alt="" />
                    <p>Activity</p>
                </div>
                <div className="bottom-item recent-entry">
                    <img className='w-[20px]' src={assets.setting_icon} alt="" />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar