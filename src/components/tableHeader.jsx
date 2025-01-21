
import { Search,Settings, Download, Trash2,Rows3 ,Columns3, Filter, ArrowDownUp, Share2} from 'lucide-react';
const TableHeader=()=>
{
    return (
        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg w-64"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <div className="flex items-center space-x-2 text-gray-600 gap-8">
            <div className="font-medium text-gray-600 text-center flex items-center justify-center gap-2">
              <Rows3/>
              <span>1/1 Row</span>
            </div>
            <div className="font-medium text-gray-600 text-center flex items-center justify-center gap-2">
              <Columns3/>
              <span>3/3 Column</span>
            </div>
            <div className="font-medium text-gray-600 text-center flex items-center justify-center gap-2">
              <Filter/>
              <span>0 Filter</span>
            </div>
            <div className="font-medium text-gray-600 text-center flex items-center justify-center gap-2">
              <ArrowDownUp/>
              <span>Sort</span>
            </div>
            
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center space-x-2">
            <Settings className="w-4 h-4" />
            <span>Enrich</span>
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Download className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Trash2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    )
}
export default TableHeader