import Link from "next/link";
import { useRouter } from "next/router"

export default function coffeeStore() {
const router=useRouter();
console.log('router',router)
    return (
      <div><p>
coffee-store id {router.query.id}
      </p>
      <Link href="/"><a>back to home</a></Link>
      </div>
    )
  }
  