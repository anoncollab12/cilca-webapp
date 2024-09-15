"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function ModuleNavButtons({
  ordenModulo,
  numModules,
}: {
  ordenModulo: number;
  numModules: number;
}) {
  const router = useRouter();

  return (
    <div className="mt-4 flex w-full justify-evenly">
      {ordenModulo > 1 && (
        <button
          className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-700"
          onClick={() => router.push(`${ordenModulo - 1}`)}
        >
          Clase Anterior
        </button>
      )}
      {ordenModulo < numModules && (
        <button
          className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-700"
          onClick={() => router.push(`${ordenModulo + 1}`)}
        >
          Siguiente Clase
        </button>
      )}
    </div>
  );
}
