import { ReactNode } from "react";
import AdminNavbar from "./AdminNavbar";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
