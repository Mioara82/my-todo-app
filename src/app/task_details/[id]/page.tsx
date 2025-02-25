import Link from "next/link";

export default async function GetTaskDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <>
      <div>Task: {id}</div>
      <Link href="/">Go back</Link>
    </>
  );
}
