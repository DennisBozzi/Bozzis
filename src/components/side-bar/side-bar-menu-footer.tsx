import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { MoreVerticalIcon } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";

export default function SideBarMenuFooter(user: any) {

    const u = user?.user;
    const email = u?.email;
    const avatar = hasAvatar(u?.identities) ? u?.identities[u?.identities.length - 1]?.identity_data?.avatar_url : "";
    console.log(avatar)

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={avatar} alt={"Dennis Bozzi"} />
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">{"Dennis Bozzi"}</span>
                        <span className="truncate text-xs text-muted-foreground">
                            {u?.email}
                        </span>
                    </div>
                    <MoreVerticalIcon className="ml-auto size-4" />
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}

function hasAvatar(u: any) {

    if (u) {
        if (u.filter((x: any) => x?.provider == "google")) {
            return true;
        }

        if (u.includes((x: any) => x?.provider == "github"))
            return true;
    }

    return false;
}