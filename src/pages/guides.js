import Image from "next/image";
import { Inter } from "next/font/google";
import reviewData from "../data/review_data.json";
import scData from "../data/sc_data.json";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import ContentCard from "@/components/ContentCard";
const inter = Inter({ subsets: ["latin"] });
import siteData from "@/data/site_data.json";
const guides = () => {
  // const posts = reviewData.posts;
  const posts = scData.posts;
  const siteName = siteData.name;
  const siteDescription = siteData.description;
  return (
    <Layout
      pageTitle="Guides"
      pageDescription={siteName + " Guides to help you out."}
    >
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Guides
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          We got your back.
        </p>
      </div>
      <div>
        <ul>
          {posts.map((p) => (
            <ContentCard key={p.id} content={p} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};
export default guides;
