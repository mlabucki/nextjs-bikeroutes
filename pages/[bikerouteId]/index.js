import { Fragment } from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import BikerouteDetail from "../../components/bikeroutes/BikerouteDetail";

function BikerouteDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>Find out more about the {props.bikerouteData.title}</title>
        <meta
          name="description"
          content="Find more informations and particulare description about the Bikeroute"
        />
      </Head>
      <BikerouteDetail
        image={props.bikerouteData.image}
        title={props.bikerouteData.title}
        city={props.bikerouteData.city}
        distance={`${props.bikerouteData.distance} km`}
        description={props.bikerouteData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:anENONgJhmCALXGM@cluster0.mdisq.mongodb.net/bikeroutes?retryWrites=true&w=majority"
  );
  const db = client.db();

  const bikeroutesCollection = db.collection("bikeroutes");

  const bikeroutes = await bikeroutesCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: bikeroutes.map((bikeroute) => ({
      params: { bikerouteId: bikeroute._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single

  const bikerouteId = context.params.bikerouteId;

  const client = await MongoClient.connect(
    "mongodb+srv://admin:anENONgJhmCALXGM@cluster0.mdisq.mongodb.net/bikeroutes?retryWrites=true&w=majority"
  );
  const db = client.db();

  const bikeroutesCollection = db.collection("bikeroutes");

  const selectedBikeroute = await bikeroutesCollection.findOne({
    _id: ObjectId(bikerouteId),
  });

  client.close();

  return {
    props: {
      bikerouteData: {
        id: selectedBikeroute._id.toString(),
        title: selectedBikeroute.data.title,
        city: selectedBikeroute.data.city,
        distance: selectedBikeroute.data.distance,
        image: selectedBikeroute.data.image,
        description: selectedBikeroute.data.description,
      },
    },
  };
}

export default BikerouteDetails;
