import { Button } from "@/components/ui/button"
import { FiAlignJustify } from "react-icons/fi";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuBasic() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <FiAlignJustify />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>

        <DropdownMenuGroup>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>

          <DropdownMenuItem asChild>
            <Link href="/home">Home</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/products">Product</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/about">About</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/contact">Contact</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/vendor">Be a Vendor</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href="/support">Support</Link>
        </DropdownMenuItem>

        <DropdownMenuItem disabled>
          Delivery
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}