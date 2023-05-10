import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import AccessDenied from "../components/access-denied"
import Invite from "../components/invites/Invite"
import Layout from "../components/layout"

export default function ProtectedPage() {
  const { data: session } = useSession()
  const [content, setContent] = useState()

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected")
      const json = await res.json()
      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData()
  }, [session])
 

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  }

  // If session exists, display content
  return (
    <Layout>
      <Invite />
    </Layout>
  )
}
