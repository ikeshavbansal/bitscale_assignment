import {ChevronLeft,CircleUser } from 'lucide-react';
import { useState } from 'react';

const Header =()=>
{
  const [isOn, setIsOn] = useState(true);
  const handleToggle = () => {
    setIsOn(!isOn);
  };

    return (
        <header className="bg-white border-b px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
            <span className="text-gray-700">Name of the file</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              
              <div 
                className={`w-12 h-6 rounded-full p-1 cursor-pointer ${isOn ? 'bg-green-500' : 'bg-gray-300'}`}
                onClick={handleToggle}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                    isOn ? 'ml-auto' : 'mr-auto'
                  }`}
                ></div>
              </div>
              <span className="ml-2">Auto Save</span>
            </div>
            <button className="p-2">
              <CircleUser color='orange' className="w-6 h-6" />
            </button>
          </div>
        </header>
    )
}
export default Header