import { Button } from "@/components/ui/button";
import { signOut } from "@/supabase/authProvider";

export default function HomePage() {
    return (
        <>

            <Button onClick={() => { signOut() }}>Log Out</Button>

        </>);
}