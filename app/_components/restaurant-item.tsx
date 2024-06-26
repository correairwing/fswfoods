import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";

interface RestaurantItemProps {
    restaurant: Restaurant
}

const RestaurantItem = ({restaurant}: RestaurantItemProps ) => {
    return <div className="min-w-[266px] max-w-[266px] space-y-3">
        <div className="w-full h-[136px] relative">
            <Image src={restaurant.imageURL}
            fill 
            className="object-cover rounded-lg" 
            alt={restaurant.name}
            />

            <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary bg-white px-2 py-[2px]">
                <StarIcon size={12} className="fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-semibold">5.0</span>
            </div>
        
            <Button
                size="icon"
                className="absolute right-2 top-2 h-7 w-7 rounded-full bg-gray-700"
            >
                <HeartIcon size={16} className="fill-white" />
            </Button>

            <div>
                <h3 className="text-sm font-semibold">{restaurant.name}</h3>
            </div>
            
        </div>
        <div className="flex gap-3">
            <div className="flex gap-1 items-center">
                <BikeIcon className="text-primary" size={14}/>
                <span className="text-xs text-muted-foreground">
                    {Number(restaurant.deliveryFee) === 0 
                    ? "Entrega gratis" 
                    : formatCurrency(Number(restaurant.deliveryFee))} 
                </span>
            </div>
            <div className="flex gap-1 items-center">
                <TimerIcon className="text-primary" size={14}/>
                <span className="text-xs text-muted-foreground">
                    {restaurant.deliveryTimeMinutes} min
                </span>
            </div>
        </div>


    </div>
}
 
export default RestaurantItem;