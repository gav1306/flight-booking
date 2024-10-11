import Loading from "@/components/flight/loading";
import FilterHeader from "@/components/transport/filter-header";
import { Suspense } from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <FilterHeader />
      </Suspense>
      {children}
    </div>
  );
};

export default Layout;
