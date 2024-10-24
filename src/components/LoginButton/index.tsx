import {signIn} from "@/auth";

type LoginButtonProps = {
  provider: string;
  label: string;
  className?: string;
}
export default function LoginButton({ provider, label, className }: LoginButtonProps) {
  return (

        <form action={async () => {
          "use server"
          await signIn(provider)
        }}><button className={className}>{label}</ button>
        </ form>

  );
}
