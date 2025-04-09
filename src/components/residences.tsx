import Residence from "@/interfaces/residence";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import CardResidence from "./card-residence";

export default function Residences({ res }: { res: Residence[] }) {
    return (<>

        <Tabs defaultValue="All" className="pt-2 items-center">
            <TabsList className="grid grid-cols-4 gap-2 grid-wrap">
                <TabsTrigger className="cursor-pointer" value="All">All</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="Apartments">Apartments</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="Kitchenettes">Kitchenettes</TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="Stores">Stores</TabsTrigger>
            </TabsList>

            <TabsContent value="All" className="flex flex-wrap gap-4 py-2 justify-center">
                {res.map((r) => (<CardResidence res={r} key={r.name} />))}
            </TabsContent>

            <TabsContent value="Apartments" className="flex flex-wrap gap-4 py-2 justify-center">
                {res.filter(x => x.type == "apartment").map((r) => (<CardResidence res={r} key={r.name} />))}
            </TabsContent>

            <TabsContent value="Kitchenettes" className="flex flex-wrap gap-4 py-2 justify-center">
                {res.filter(x => x.type == "kitchenette").map((r) => (<CardResidence res={r} key={r.name} />))}
            </TabsContent>

            <TabsContent value="Stores" className="flex flex-wrap gap-4 py-2 justify-center">
                {res.filter(x => x.type == "store").map((r) => (<CardResidence res={r} key={r.name} />))}
            </TabsContent>

        </Tabs>

    </>)
}