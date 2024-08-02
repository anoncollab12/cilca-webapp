import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function Cursos() {
  const post = await db.query.posts.findMany();
  console.log(post);
  return post.map((post) => <div key={post.id}>{post.name}</div>);
}
