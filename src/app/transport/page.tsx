import { Skeleton } from "@/components/ui/skeleton";

export default function Transport() {
  return (
    <section>
      <div className="relative w-full h-1 bg-gray-300 rounded overflow-hidden">
        <div className="w-full h-full animate-move-infinite absolute bg-custom-gradient" />
      </div>
      <div className="p-[72px] max-w-[1200px] m-auto">
        <div className="rounded-md grid grid-cols-[1fr_1fr] border px-6 py-5">
          <div className="flex flex-col gap-10">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-[100px] rounded-2xl" />
                <Skeleton className="h-4 w-[150px] rounded-3xl" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-[100px] rounded-2xl" />
                <Skeleton className="h-4 w-[150px] rounded-3xl" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="space-y-4">
              <Skeleton className="h-4 w-[60px] rounded-2xl" />
              <div className="flex gap-14">
                <Skeleton className="h-4 w-[70px] rounded-3xl" />
                <Skeleton className="h-4 w-[72px] rounded-3xl" />
              </div>
            </div>

            <div className="space-y-4">
              <Skeleton className="h-4 w-[60px] rounded-2xl" />
              <div className="flex gap-14">
                <Skeleton className="h-4 w-[70px] rounded-3xl" />
                <Skeleton className="h-4 w-[72px] rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
