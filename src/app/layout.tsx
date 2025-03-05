"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation"; 
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    // Hide sidebar on login page, Admin Dashboard, and Super Admin Dashboard
    setShowSidebar(
      pathname !== "/" && 
      pathname !== "/admin_dashboard" && 
      pathname !== "/superadmin_dashboard"
    );
  }, [pathname]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex w-full h-screen bg-gray-200">
          {/* Show sidebar on all pages EXCEPT "/" (login), "/admin_dashboard", and "/superadmin_dashboard" */}
          {showSidebar && <Sidebar role="serviceCenterAdmin" />}
          <div className={`flex flex-col w-full h-full ${showSidebar ? "ml-64" : ""} p-4`}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
