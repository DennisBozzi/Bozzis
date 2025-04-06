import { SideBar } from "./side-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <SideBar />
            {children}
        </div>
    );
}