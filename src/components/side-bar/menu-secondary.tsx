import { LogOut } from "lucide-react";
import { signOut } from "@/supabase/authProvider";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export default function MenuSecondary() {
    return (
        <SidebarMenu>
            <SidebarMenuItem>

                <SidebarMenuButton tooltip={"Logout"} onClick={() => signOut()} className="cursor-pointer">
                    {<LogOut />}
                    <span>{"Logout"}</span>
                </SidebarMenuButton>

            </SidebarMenuItem>
        </SidebarMenu>)
}