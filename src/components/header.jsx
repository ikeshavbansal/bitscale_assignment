import {ChevronLeft,CircleUser } from 'lucide-react';

const Header =()=>
{
    return (
        <header className="bg-white border-b px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
            <span className="text-gray-700">Name of the file</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              
              <div className="w-12 h-6 bg-green-500 rounded-full p-1">
                <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
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