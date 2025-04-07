import { SideBar } from "./side-bar/side-bar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <SidebarProvider>
                <SideBar />
                <SidebarTrigger className="mt-2" />
                <div className="m-2">
                    {children}
                </div>
            </SidebarProvider>
        </div>
    );
}