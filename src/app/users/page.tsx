/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import SideNavbar from "@/components/SideNavbar";

type Props = {};
type Customer = {
  id: number;
  name: string;
  phone: string;
  email: string;
};

type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue("name")}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "phone",  // New column for phone
    header: "Phone"
  },
  // {
  //   accessorKey: "method",
  //   header: "Method"
  // }
];

export default function UsersPage({}: Props) {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    fetch('https://corpview.onrender.com/sales/customers')
      .then(response => response.json())
      .then(data => {
        const payments = data.map((customer: Customer) => ({
          name: customer.name,
          email: customer.email,
          phone: customer.phone, // This should be dynamically set if possible
          // method: "Credit Card" // This should be dynamically set if possible
        }));
        setData(payments);
      })
      .catch(error => {
        console.error('Failed to fetch customers:', error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className={cn(
      "min-h-screen w-full bg-white text-black flex ",
      {
        "debug-screens": process.env.NODE_ENV === "development"
      }
    )}>
                <SideNavbar />
      <div className="p-8 w-full">
        <PageTitle title="Users" />
        <DataTable columns={columns} data={data} />

      </div>
      </div>
    </div>
  );
}
