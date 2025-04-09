import { Badge } from "./ui/badge"
import { Link } from 'react-router'
import Residence from "@/interfaces/residence";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { User } from "lucide-react";

export default function CardResidence({ res }: { res: Residence }) {

    return (
        <Link to={"/residences/" + res.name}>
            <Card className="cursor-pointer w-54">
                <CardHeader>
                    <CardTitle>{res.name}</CardTitle>
                    <CardDescription>R$500</CardDescription>
                </CardHeader>
                <CardContent className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate flex items-center gap-1"><User width={"16px"} /> 5</span>
                    <span className="truncate">Carla Geovane</span>
                </CardContent>
                <CardFooter className="gap-2">
                    <Badge variant="destructive">unpaid</Badge>
                    <Badge variant={
                        (() => {
                            switch (res.type) {
                                case "kitchenette":
                                    return "warning";
                                case "apartment":
                                    return "outline";
                                case "store":
                                    return "success";
                                default:
                                    return null;
                            }
                        })()
                    }>{res.type}</Badge>
                </CardFooter>
            </Card>
        </Link >
    );


}