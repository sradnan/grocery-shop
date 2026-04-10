import { Button } from "@/components/ui/button"
import { FiAlignJustify } from "react-icons/fi";
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
        <Button variant="outline"><FiAlignJustify/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Home</DropdownMenuLabel>
          <DropdownMenuItem>Product</DropdownMenuItem>
          <DropdownMenuItem>About</DropdownMenuItem>
          <DropdownMenuItem>contact</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Be a Vendor </DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>Delivery</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
