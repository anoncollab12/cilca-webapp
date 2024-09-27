import { redirect } from "next/navigation";
import { SearchUsers } from "./_search-users";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { setRole } from "./_actions";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Separator } from "@radix-ui/react-select";

export default async function AdminDashboard(params: {
  searchParams: { search?: string };
}) {
  const { sessionClaims } = auth();
  if (sessionClaims?.metadata.role !== "admin") {
    redirect("/");
  }
  const query = params.searchParams.search;

  const users = query
    ? (await clerkClient().users.getUserList({ query })).data
    : [];

  return (
    <>
      <div className="bg-purple-50 py-8">
        <Card className="mx-auto w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Administración de Usuarios</CardTitle>
          </CardHeader>
          <CardContent>
            <SearchUsers />

            {users.map((user) => (
              <div key={user.id} className="rounded-md bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {user.firstName} {user.lastName}
                    </h3>
                    <p className="text-gray-500">
                      {
                        user.emailAddresses.find(
                          (email) => email.id === user.primaryEmailAddressId,
                        )?.emailAddress
                      }
                    </p>
                  </div>
                  <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
                    {user.publicMetadata.role as string}
                  </span>
                </div>
                <Separator className="my-4" />
                <div className="flex gap-4">
                  <form action={setRole}>
                    <input type="hidden" value={user.id} name="id" />
                    <input type="hidden" value="admin" name="role" />
                    <Button type="submit" variant="outline">
                      Hacer Administrador
                    </Button>
                  </form>
                  <form action={setRole}>
                    <input type="hidden" value={user.id} name="id" />
                    <input type="hidden" value="instructor" name="role" />
                    <Button type="submit" variant="outline">
                      Hacer Instructor
                    </Button>
                  </form>
                  <form action={setRole}>
                    <input type="hidden" value={user.id} name="id" />
                    <input type="hidden" value="student" name="role" />
                    <Button type="submit" variant="outline">
                      Hacer Estudiante
                    </Button>
                  </form>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
