export default async function Page() {
  let data = await fetch('https://api.vercel.app/blog')
  let posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}className="mt-2 ml-4">{post.title}</li>
      ))}
    </ul>
  )
}