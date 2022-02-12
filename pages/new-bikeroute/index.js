import { Fragment } from "react";
import Head from 'next/head';
import { useRouter } from "next/router";
import NewBikerouteForm from "../../components/bikeroutes/NewBikerouteForm";

function NewBikeroutePage() {
  const router = useRouter();
  async function addBikerouteHandler(enteredBikerouteData) {
    const response = await fetch("/api/new-bikeroute", {
      method: "POST",
      body: JSON.stringify(enteredBikerouteData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a new Bikeroute</title>
        <meta
          name="description"
          content="Add a new route with short descriptions and distance."
        />
      </Head>
      <NewBikerouteForm onAddBikeroute={addBikerouteHandler} />
    </Fragment>
  );
}

export default NewBikeroutePage;
