"use client"

import Seperator from "../Seperator";
import MenuItem from "./MenuItem";

  
const Menu = ()=>{

const menuItems = [{
  imgSrc:'/assets/menu/coffee-1.png',
  name:'Espresso',
  description:'A strong, concentrated shot of pure coffee.',
  price:'₹ 300',
},
{
  imgSrc:'/assets/menu/coffee-2.png',
  name:'Cappuccino',
  description:'Espresso topped with steamed milk and foam.',
  price:'₹ 450',
},
{
  imgSrc:'/assets/menu/coffee-3.png',
  name:'Latte',
  description:'Smooth espresso blended with creamy steamed milk.',
  price:'₹ 420',
},
{
  imgSrc:'/assets/menu/coffee-4.png',
  name:'Americano',
  description:'Espresso diluted with hot water for a mellow flavor.',
  price:'₹ 699',
},

{
  imgSrc:'/assets/menu/coffee-5.png',
  name:'Irish Coffee',
  description: 'A warm blend of coffee, Irish whiskey, and cream for a rich, smooth finish.',
  price:'₹ 599',
}
];


    return(
        <div className="w-full max-w-full">
            <div className="screenPadding screenPaddingTop screenPaddingBottom ">
       

       {/*OUR MENU PART START */}
        <div className="flex flex-col  items-center text-center gap-4 mb-12 xl:mb-24">
            <h2
            className="h2 text-center"
            >Our Menu</h2>

            <div className="mb-4">
                <Seperator bg="accent" />
            </div>

            <p className="text-center max-w-[620px] mx-auto ">
                Explore a curated selection of specialty coffees, crafted to deliver the perfect balance of aroma, flavor, and comfort.
            </p>
        </div>
        {/*OUR MENU PART END */}


        {/*menu items mapping start */}

        <div className="flex flex-col items-center gap-12 sm:gap-16 xl:gap-24 w-full max-w-full">
            <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {menuItems.map((item,index:number)=>(
                <MenuItem 
key={index}
data={item}
                />
            ))}
            </div>
            <button className="btn">View Full Menu</button>
        </div>
        {/*menu items mapping end */}


        
            </div>

        </div>
    )
}
export default Menu;