import { auth } from "@/auth"
import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";

export default async function LoginButtons() {
  const session = await auth()
console.log(session)
  return !session?.user ? (
    <div>
      <LoginButton provider={"google"} label={"Sign in with Google"} />
    </div>
  ) : (<LogoutButton />)
}