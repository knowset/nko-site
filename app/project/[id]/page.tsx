import type { InferGetServerSidePropsType, GetServerSideProps } from "next";


import { getPostById } from '@/services/getPosts'
 
export default async function Layout({
  params: { id },
}: {
  params: { id: string }
}) {
  const item = (await getPostById(id)).post;
  console.log("ITEM:", item);

  return (<div>{item.id}</div>)
  // ...
}
