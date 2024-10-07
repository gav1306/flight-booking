import FilterHeader from "@/components/transport/layout/filter-header";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <FilterHeader />
      {children}
    </div>
  );
};

export default Layout;
