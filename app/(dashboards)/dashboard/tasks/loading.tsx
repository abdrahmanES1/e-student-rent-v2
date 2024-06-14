import { Skeleton } from "@/components/ui/skeleton"

const TableSkeleton = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="w-[200px] h-[32px] rounded-full" />
        <Skeleton className="w-[100px] h-[32px] rounded-md" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[...Array(5)].map((_, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <Skeleton className="w-[100px] h-[20px]" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {[...Array(5)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[...Array(5)].map((_, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                    <Skeleton className="w-full h-[20px]" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableSkeleton
