import { ChevronRight } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";

export default function SideBarMenuTenant(item: any) {
    var i = item.item;

    return (
        <>
            <SidebarMenu key={i.title}>
                <Collapsible
                    key={i.title}
                    asChild
                    defaultOpen={false}
                    className="group/collapsible"
                >
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton tooltip={i.title} className="cursor-pointer">
                                {i.icon && <i.icon />}
                                <span>{i.title}</span>
                                <ChevronRight className={"ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"} />
                            </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <SidebarMenuSub>

                                <SidebarMenuSubItem>
                                    <SidebarMenuSubButton asChild>
                                        <span>All</span>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>

                                <SidebarMenuSubItem>
                                    <SidebarMenuSubButton asChild>
                                        <span>Housed</span>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>

                                <SidebarMenuSubItem>
                                    <SidebarMenuSubButton asChild>
                                        <span>New</span>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>

                                <SidebarMenuSubItem>
                                    <SidebarMenuSubButton asChild>
                                        <span>Move</span>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>

                                <SidebarMenuSubItem>
                                    <SidebarMenuSubButton asChild>
                                        <span>Departure</span>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>

                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>
            </SidebarMenu>
        </>)

}