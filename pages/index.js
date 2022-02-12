import {Fragment} from 'react';
import Head from 'next/head';
import { MongoClient } from "mongodb";
import BikerouteList from "../components/bikeroutes/BikerouteList";


function HomePage(props) {
  return (
  <Fragment>
  <Head>
    <title>React Bikeroutes</title>
    <meta 
    name='description'
    content='Browse a list of populare React Bikeroutes'
    />
  </Head>
  <BikerouteList bikeroutes={props.bikeroutes} />;
  </Fragment>
  )
}

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://admin:anENONgJhmCALXGM@cluster0.mdisq.mongodb.net/bikeroutes?retryWrites=true&w=majority');
  const db = client.db();

  const bikeroutesCollection = db.collection('bikeroutes');

  const bikeroutes = await bikeroutesCollection.find().toArray();

  client.close();

  return {
    props: {
      bikeroutes : bikeroutes.map((bikeroute) => ({
        title: bikeroute.data.title,
        city: bikeroute.data.city,
        description: bikeroute.data.description,
        distance: `${bikeroute.data.distance} km`,
        image: bikeroute.data.image,
        id: bikeroute._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
