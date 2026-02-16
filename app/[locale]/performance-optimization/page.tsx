import Caching from "@/sections/performance-optimization/caching";
import DebouncingTechnique from "@/sections/performance-optimization/debouncing";
import ImageOptimization from "@/sections/performance-optimization/image-optimization";

function page() {
  return (
    <main className="max-w-full overflow-x-hidden w-full h-fit py-36 px-12">
      <section className="">
        <div className="flex flex-col gap-2 mb-16">
          <h1 className=" text-4xl font-bold">Performance Optimization</h1>
          <p className="dark:text-neutral-300">
            Performance Optimization can get little bit tricky in Frontend
            Development but I can showcase here some performance optimization
            techniques I use to solve most of the performance issues.
          </p>
        </div>
        {/* Debouncing Techniques */}
        <DebouncingTechnique />
        <Caching />
        <ImageOptimization />
      </section>
    </main>
  );
}

export default page;
