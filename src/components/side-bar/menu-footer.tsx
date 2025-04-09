import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { MoreVerticalIcon } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";

export default function MenuFooter({ user }: { user: any }) {

    const u = user;
    const i = identitieSelect(u?.identities);

    //  ? u?.identities[u?.identities.length - 1]?.identity_data?.avatar_url : ""

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    className="cursor-pointer data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >

                    <Avatar className="h-8 w-8 rounded-lg">
                        {i?.avatar ?
                            <AvatarImage src={i?.avatar} alt={"Dennis Bozzi"} /> :
                            <div className="bg-primary w-full flex items-center justify-center font-bold">
                                {i?.email[0].toUpperCase()}
                            </div>}
                    </Avatar>

                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">
                            {i?.name ? i.name : "User"}
                        </span>
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

function identitieSelect(identities: any) {

    if (identities) {
        return {
            name: identities[identities.length - 1].
                identity_data?.full_name,
            email: identities[identities.length - 1].
                identity_data?.email,
            avatar: identities[identities.length - 1].
                identity_data?.avatar_url
        };
    }

    return null;
}