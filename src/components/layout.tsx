import { SideBar } from "./side-bar/side-bar";
import { Separator } from "./ui/separator";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

export default function Layout({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <div>
            <SidebarProvider>
                <SideBar />
                <div className="flex flex-col w-full mr-2 h-screen">
                    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
                        <div className="flex items-center gap-1 px-4 lg:gap-2 lg:px-6">
                            <SidebarTrigger className="-ml-1" />
                            <Separator orientation="vertical" className="mx-2 data-[orientation=vertical]:h-4" />
                            <h1 className="text-base font-medium">{title}</h1>
                        </div>
                    </header>

                    <div className="m-2 grow">
                        {children}
                    </div>
                </div>
            </SidebarProvider>
        </div>
    );
}