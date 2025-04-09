import { User, Home, Building } from "lucide-react";
import { Link } from 'react-router';
import MenuTenant from "./menu-tenant";
import MenuResidence from "./menu-residence";
import { selectResidences } from "@/services/residencesService";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import MenuFooter from "./menu-footer";
import { useAuth } from "@/supabase/authProvider";
import MenuSecondary from "./menu-secondary";

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
              <Link to="/home">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-secondary text-sidebar-primary-foreground">
                  <Building className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Bozzis</span>
                  <span className="">v0.0.1</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="sidebarContent">

        <SidebarGroup>
          <MenuResidence item={residence} />

          <MenuTenant item={tenant} />
        </SidebarGroup>


      </SidebarContent>

      <SidebarFooter>
        <MenuSecondary />
        <MenuFooter user={session?.user} />
      </SidebarFooter>

    </Sidebar >
  );
}