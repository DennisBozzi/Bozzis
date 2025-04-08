import { User, Home, Building } from "lucide-react";
import SideBarMenuTenant from "./side-bar-menu-tenant";
import SideBarMenuResidence from "./side-bar-menu-residence";
import { selectResidences } from "@/services/residencesService";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import SideBarMenuFooter from "./side-bar-menu-footer";
import { useAuth } from "@/supabase/authProvider";

var residences = await selectResidences();

var residence = {
  title: "Residences",
  url: "#",
  icon: Home,
  content: residences
};

var tenant = {
  title: "Tenants",
  url: "#",
  icon: User
};

export function SideBar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  var session = useAuth();

  return (
    <Sidebar {...props} collapsible="icon" variant="floating">

      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-secondary text-sidebar-primary-foreground">
                  <Building className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Bozzis</span>
                  <span className="">v0.0.1</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="sidebarContent">
        <SidebarGroup>

          <SideBarMenuResidence item={residence} />

          <SideBarMenuTenant item={tenant} />

        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SideBarMenuFooter user={session?.user} />
      </SidebarFooter>
    </Sidebar >
  );
}