
import icon1 from "../icons/sidebar_1.svg"
import icon2 from "../icons/sidebar_2.svg"
import icon3 from "../icons/sidebar_3.svg"
import icon4 from "../icons/sidebar_4.svg"
import icon5 from "../icons/sidebar_5.svg"

const SideBar=()=>
{

    return (
      <div className="w-16 bg-white border-r transition-all duration-300 flex flex-col justify-between h-screen">
      <div className="flex flex-col items-center py-4 space-y-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <img src={icon1} alt="Icon 1" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <img src={icon2} alt="Icon 2" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <img src={icon3} alt="Icon 3" />
        </button>
      </div>
      <div className="flex flex-col items-center py-4 space-y-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <img src={icon4} alt="Icon 1 (Bottom)" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <img src={icon5} alt="Icon 2 (Bottom)" />
        </button>
      </div>
    </div>
    
    )
}
export default SideBar;