import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
    showFooter?: boolean;
}

const Layout = ({ children, showFooter = true }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {children}
            </main>
            {showFooter && <Footer />}
        </div>
    );
};

export default Layout;
