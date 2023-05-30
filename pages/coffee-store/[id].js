import { useRouter } from "next/router"

export default function coffeeStore() {
const router=useRouter();
console.log('router',router)
    return (
      <div>coffee-store id {router.query.id}</div>
    )
  }
  