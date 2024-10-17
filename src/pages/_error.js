import Error from "next/error";

export default function Custom404({ statusCode }) {
  return <Error statusCode={statusCode} />;
}

export async function getStaticProps() {
  return { props: { statusCode: 404 } };
}
