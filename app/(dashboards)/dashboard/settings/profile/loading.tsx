import { Skeleton } from '@/components/ui/skeleton';

const LoadingSkeleton = () => {
  return (
    <div className="space-y-8">
      <Skeleton className="w-1/2 h-[24px] rounded-full" />
      <Skeleton className="w-full h-[40px] rounded-md" />
      <Skeleton className="w-[30%] h-[24px] rounded-full" />
      <Skeleton className="w-full h-[40px] rounded-md" />
      <Skeleton className="w-2/5 h-[24px] rounded-full" />
      <Skeleton className="w-full h-[40px] rounded-md" />
      <Skeleton className="w-[120px] h-[40px] rounded-md" />
    </div>
  );
};

export default LoadingSkeleton;
