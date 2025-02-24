"use client";
import Sidebar from "@/components/sidebar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-screen bg-gray-200">
      <Sidebar />
      <div className="flex flex-col w-full h-full ml-64 p-4">{children}</div>
    </div>
  );
}
