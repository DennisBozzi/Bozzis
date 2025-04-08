import { ChevronRight } from "lucide-react"
import Residence from "@/interfaces/residence";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";

export default function SideBarMenuResidence(item: any) {
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
                                <div className="relative text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                                    <span className="relative z-10 bg-card px-2 text-muted-foreground">Apartments</span>
                                </div>
                                {
                                    i.content?.filter((c: Residence) => c.type === "apartment")
                                        .map((c: any) =>
                                            <SidebarMenuSubItem key={c.id}>
                                                <SidebarMenuSubButton asChild>
                                                    <span>{c.name}</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        )
                                }

                                <div className="relative text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                                    <span className="relative z-10 bg-card px-2 text-muted-foreground">Kitchenettes</span>
                                </div>
                                {
                                    i.content?.filter((c: Residence) => c.type === "kitchenette")
                                        .map((c: Residence) =>
                                            <SidebarMenuSubItem key={c.id}>
                                                <SidebarMenuSubButton asChild>
                                                    <span>{c.name}</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        )
                                }

                                <div className="relative text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                                    <span className="relative z-10 bg-card px-2 text-muted-foreground">Stores</span>
                                </div>
                                {
                                    i.content?.filter((c: Residence) => c.type === "store")
                                        .map((c: Residence) =>
                                            <SidebarMenuSubItem key={c.id}>
                                                <SidebarMenuSubButton asChild>
                                                    <span>{c.name}</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        )
                                }

                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>
            </SidebarMenu>
        </>)

}