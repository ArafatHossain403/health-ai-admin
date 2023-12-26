import SideNav from "./sharedProfile/SideNav";

export default function DashboardLayout({
  children, 
}) {
  return (
    <section className="flex">
      {/* Include shared UI here e.g. a header or sidebar */}
      <SideNav ></SideNav>
      
   
      {children}
      
    </section>
  );
}
