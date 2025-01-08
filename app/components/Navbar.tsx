"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from 'lucide-react';
import { useShoppingCart } from "use-shopping-cart";

const links = [
    { name: 'Home', href: '/' },
    { name: 'Men', href: '/Men' },
    { name: 'Women', href: '/Women' },
    { name: 'Kids', href: '/Kids' },
];

export default function Navbar() {
    const pathname = usePathname();
    const {handleCartClick}=useShoppingCart()

    return (
        <header className="mb-8 border-b shadow-sm bg-background">
            <div className="flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                {/* Logo Section */}
                <Link href='/'>
                    <h1 className="text-2xl md:text-4xl font-bold hover:opacity-80 transition-opacity">
                        Classy <span className="text-primary text-orange-700">Clothes</span>
                    </h1>
                </Link>

                {/* Navigation Links */}
                <nav className="hidden gap-8 lg:flex items-center">
                    {links.map((link, idx) => (
                        <div key={idx}>
                            
                          {
                            pathname ===link.href?(
                                <Link 
                                className="text-lg font-semibold text-primary"
                                href={link.href}>
                                    {link.name}
                                </Link>
                            ):(
                                <Link
                                className="text-lg font-semibold text-gray-600 hover:text-primary transition-colors duration-200"
                                href={link.href}
                                >
                                  {link.name}  
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Actions Section */}
                <div className="flex divide-x border-r sm:border-l">
                    <Button
                        variant="outline"
                        onClick={()=> handleCartClick() }
                        className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-lg hover:bg-orange-400 transition-colors"
                    >
                        <ShoppingBag className="h-5 w-5" />
                        <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
