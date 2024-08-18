import { SignIn, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Modulo({
  params,
}: {
  params: { idmodulo: string; idcurso: string };
}) {
  return (
    <>
      <div>
        Modulo {params.idcurso} y {params.idmodulo}
      </div>
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <div>
          Modulo {params.idcurso} y {params.idmodulo}
        </div>
      </SignedIn>
    </>
  );
}
