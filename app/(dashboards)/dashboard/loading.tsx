import { Skeleton } from '@/components/ui/skeleton';

const DashboardSkeleton = () => {
  return (
    <>
      <div className="flex items-center space-y-2">
        <Skeleton className="w-[200px] h-[32px] rounded-full" />
        <Skeleton className="w-[100px] h-[32px] rounded-md" />
        <Skeleton className="w-[100px] h-[32px] rounded-md" />
      </div>
      <div className="flex space-y-4 mt-4">
        <Skeleton className="w-full h-[48px] rounded-md" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="p-4 border rounded-md">
            <Skeleton className="w-[100px] h-[20px] mb-2" />
            <Skeleton className="w-full h-[32px] mb-2" />
            <Skeleton className="w-1/2 h-[20px]" />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 mt-4">
        <div className="col-span-1 lg:col-span-4 p-4 border rounded-md">
          <Skeleton className="w-[120px] h-[24px] mb-4" />
          <Skeleton className="w-full h-[200px]" />
        </div>
        <div className="col-span-1 lg:col-span-3 p-4 border rounded-md">
          <Skeleton className="w-[120px] h-[24px] mb-2" />
          <Skeleton className="w-full h-[200px]" />
        </div>
      </div>
    </>
  );
};

export default DashboardSkeleton;
