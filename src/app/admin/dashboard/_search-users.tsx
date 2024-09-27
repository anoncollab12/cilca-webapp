"use client";

import { Label } from "@radix-ui/react-label";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export const SearchUsers = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const formData = new FormData(form);
          const queryTerm = formData.get("search") as string;
          router.push(pathname + "?search=" + queryTerm);
        }}
      >
        <Label htmlFor="search" className="font-bold">
          Busca usuario por correo electrónico
        </Label>

        <Input
          id="search"
          name="search"
          required
          type="text"
          placeholder="correo@mail.com"
        ></Input>

        <Button type="submit">{"Buscar"}</Button>
      </form>
    </div>
  );
};
