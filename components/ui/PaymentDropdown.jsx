"use client";

import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Building2 } from "lucide-react";

export function PaymentDropdown() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="my-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Select Payment</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="min-w-56">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Payment Method</DropdownMenuLabel>

            <DropdownMenuRadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
            >
              <DropdownMenuRadioItem value="card">
                <CreditCard className="mr-2 h-4 w-4" />
                Credit Card
              </DropdownMenuRadioItem>

              <DropdownMenuRadioItem value="paypal">
                <Wallet className="mr-2 h-4 w-4" />
                PayPal
              </DropdownMenuRadioItem>

              <DropdownMenuRadioItem value="bank">
                <Building2 className="mr-2 h-4 w-4" />
                Bank Transfer
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <p className="mt-2 text-sm">
        Selected: <b>{paymentMethod}</b>
      </p>
    </div>
  );
}