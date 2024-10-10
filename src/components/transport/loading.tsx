import LoaderCard from "@/components/transport/loader-card";
import ShimmerUi from "@/components/transport/shimmer-ui";

export default function Loading() {
  return (
    <section className="relative">
      <div className="relative w-full h-1 bg-gray-300 rounded overflow-hidden">
        <div className="w-full h-full animate-move-infinite absolute bg-custom-gradient" />
      </div>
      <div className="p-[72px] max-w-[1200px] m-auto flex flex-col gap-4">
        {Array(6)
          .fill(null)
          .map((_, index) => {
            return <ShimmerUi key={index} />;
          })}
      </div>
      <LoaderCard />
    </section>
  );
}
