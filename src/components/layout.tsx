import { SideBar } from "./side-bar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <SidebarProvider>
                <SideBar />
                <SidebarTrigger />
                {children}
            </SidebarProvider>
        </div>
    );
}