const SkeletonCard = () => (
  <div className="animate-pulse rounded-lg bg-stone-10 dark:bg-zinc-900 p-4 space-y-4 shadow">
    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
    <div className="h-4 bg-gray-300 rounded w-full"></div>
    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    <div className="h-4 bg-gray-300 rounded w-2/3"></div>
  </div>
);
export default SkeletonCard;