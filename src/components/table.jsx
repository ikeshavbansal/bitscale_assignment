import { Plus,Play, Loader} from 'lucide-react';
import inputIcon from "../icons/input.svg"
import actionIcon from "../icons/action.svg"
import enrichIcon from "../icons/enrich.svg"
import { useState } from 'react';
import TableHeader from './tableHeader';


const Table=()=>
{
  
    const [tableData, setTableData] = useState([
      { id: 1, timestamp: "Oct 12, 2024 at 14:08 PM", action: "Bitscale Evaluation - Account relevancy check with multiple parameters", enrichment: "Bitscale Evaluation - Account relevancy long text here" },
      { id: 2, timestamp: "Oct 12, 2024 at 14:08 PM", action: "cell data size exceeds limit", enrichment: "BMW Evaluation - Relevancy check" },
      { id: 3, timestamp: "Oct 12, 2024 at 14:08 PM", action: "https://www.linkedin.com/bitScale.ai/sample", enrichment: "Google Evaluation - LIlevancy check" },
      { id: 4, timestamp: "Oct 12, 2024 at 14:08 PM", action: "Loading data, Please wait", enrichment: "Apple Evaluation - Olvancy check" },
      { id: 5, timestamp: "Oct 12, 2024 at 14:08 PM", action: "Loading data, Please wait", enrichment: "Figma Evaluation - Evancy check" },
    ]);
  
    const [columns, setColumns] = useState([
      { id: 'index', label: '', width: '60px' },
      { id: 'play', label: '', width: '100px' },
      { id: 'input', label: 'Input Column', width: '200px' },
      { id: 'action', label: 'Action column', width: '200px' },
      { id: 'enrich', label: 'Enrich Company', width: '200px' },
      { id: 'add', label: <div className="flex items-center gap-2"><Plus className="w-5 h-5" /> Add column</div>, width: '150px' },
    ]);

  const handleAddColumn = () => {
    const newColumnId = `custom-${columns.length}`;
    const newColumn = {
      id: newColumnId,
      label: `New Column ${columns.length}`,
      width: '200px'
    };
    const newColumns = [...columns];
    newColumns.splice(newColumns.length - 1, 0, newColumn);
    setColumns(newColumns);
    const updatedData = tableData.map(row => ({
      ...row,
      [newColumnId]: ''
    }));
    setTableData(updatedData);
  };


  const handleAddRow = () => {
    const newRow = {
      id: tableData.length + 1,
      timestamp: "New Entry",
      action: "",
      enrichment: "",
    };
    columns.forEach(col => {
      if (col.id.startsWith('custom-')) {
        newRow[col.id] = '';
      }
    });
    setTableData([...tableData, newRow]);
  };


  const handleColumnClick = (columnId) => {
    if (columnId === 'add') {
      handleAddColumn();
    }
  };

    return(
        <div className="p-4 space-y-4">
         <TableHeader/>

          <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-gray-100">
        <thead>
          <tr>
            {columns.map(column => (
              <th
                key={column.id}
                className="border-2 border-gray-200 p-3 cursor-move"
                style={{ width: column.width }}
                onClick={() => handleColumnClick(column.id)}
              >
                <div className="font-medium text-gray-600 text-center flex items-center justify-center gap-2">
                  {column.id === 'input' ? <img src={inputIcon}  /> :
                  column.id === 'action' ? <img src={actionIcon}  />  :
                  column.id === 'enrich' ? <img src={enrichIcon}  />  :
                  null
                  }
                  {column.label}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={row.id} className='bg-white'>
              {columns.map(column => (
                <td
                  key={`${row.id}-${column.id}`}
                  className="border-2 border-gray-200 "
                >
                  <div className="flex justify-center items-center">
                    {column.id === 'index' && (
                      <span>{index + 1}</span>
                    )}
                    {column.id === 'play' && (
                      <div className="flex justify-center items-center rounded-full border-2 border-blue-500 w-8 h-8">
                        <Play className="text-blue-500" size={15} />
                      </div>
                    )}
                    {column.id === 'input' && (
                      <div className="truncate max-w-[240px]" title={row.timestamp}>
                        {row.timestamp}
                      </div>
                    )}
                    {column.id === 'action' && (
                      <div className="truncate max-w-[240px]" title={(row.id === 4 || row.id === 5) ? (
                        <div className='flex items-center gap-2'>
                          <Loader />
                          {row.action}
                        </div>
                      ) : (
                        row.action
                      )}>
                        {(row.id === 4 || row.id === 5) ? (
                          <div className='flex items-center gap-2'>
                            <Loader />
                            {row.action}
                          </div>
                        ) : row.id == 3 ? <a href={row.action} className='text-blue-700 underline'>{row.action}</a> : (
                          row.action
                        )}
                      </div>
                    )}
                    {column.id === 'enrich' && (
                      <div className="truncate max-w-[180px]" title={row.enrichment}>
                        {row.enrichment}
                      </div>
                    )}
                  </div>
                </td>
              ))}
            </tr>

          ))}
          {Array.from({length:10}).map((_, index) => (
            <tr key={`empty-${index}`}>
              <td className="border-2 border-gray-200 p-5"></td>
              <td className="border-2 border-gray-200 p-3"></td>
              <td className="border-2 border-gray-200 p-3">{index==0 ? <button onClick={handleAddRow} className="w-full py-2 text-center hover:bg-gray-50 text-gray-600 flex items-center justify-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Row</span>
              </button> : null}</td>
              <td className="border-2 border-gray-200 p-3"></td>
              <td className="border-2 border-gray-200 p-3"></td>
              <td className="border-2 border-gray-200 p-3"></td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
        </div>
    )
}

export default Table