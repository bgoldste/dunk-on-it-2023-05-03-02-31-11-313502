import Image from "next/image";
import { Inter } from "next/font/google";
import reviewData from "../data/review_data.json";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import ContentCard from "@/components/ContentCard";
const inter = Inter({ subsets: ["latin"] });
import siteData from "@/data/site_data.json";
const Index = () => {
  const posts = reviewData?.posts;
  const siteName = siteData?.name;
  const siteDescription = siteData?.description;
  return (
    <Layout
      pageTitle={siteName + " " + siteDescription}
      pageDescription={siteDescription}
    >
      <div className="text-center pt-2 px-2">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          {siteName}
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
          {siteDescription}
        </p>
      </div>
      <div>
        <ul className={"grid gap-4 px-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
          {posts?.slice(0,50).map((p) => (
            <ContentCard key={p.id} content={p} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};
export default Index;
