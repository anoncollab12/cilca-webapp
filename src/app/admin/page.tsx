import { auth } from "@clerk/nextjs/server";
import { columns, type Payment } from "./payments/columns";
import { DataTable } from "./payments/data-table";
import { redirect } from "next/navigation";

async function getData(): Promise<Payment[]> {
  const { sessionClaims } = auth();
  if (sessionClaims?.metadata.role !== "admin") {
    redirect("/");
  }
  // Fetch data from API
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed521",
      amount: 200,
      status: "success",
      email: "a@example.com",
    },
    {
      id: "728ed522",
      amount: 100,
      status: "pending",
      email: "b@example.com",
    },
    {
      id: "728ed523",
      amount: 10,
      status: "failed",
      email: "c@example.com",
    },
    {
      id: "728ed525",
      amount: 250,
      status: "pending",
      email: "d@example.com",
    },
    {
      id: "728ed525",
      amount: 250,
      status: "pending",
      email: "d@example.com",
    },
    {
      id: "728ed525",
      amount: 250,
      status: "pending",
      email: "d@example.com",
    },
    {
      id: "728ed525",
      amount: 250,
      status: "pending",
      email: "d@example.com",
    },
    {
      id: "728ed525",
      amount: 250,
      status: "pending",
      email: "d@example.com",
    },
    {
      id: "728ed525",
      amount: 250,
      status: "pending",
      email: "d@example.com",
    },
    {
      id: "728ed525",
      amount: 250,
      status: "pending",
      email: "d@example.com",
    },
    {
      id: "728ed525",
      amount: 250,
      status: "pending",
      email: "d@example.com",
    },
    {
      id: "728ed525",
      amount: 250,
      status: "pending",
      email: "d@example.com",
    },
    {
      id: "728ed525",
      amount: 250,
      status: "pending",
      email: "d@example.com",
    },
    {
      id: "728ed525",
      amount: 250,
      status: "pending",
      email: "d@example.com",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="bg-purple-50 py-10">
      <div className="container mx-auto bg-white py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
