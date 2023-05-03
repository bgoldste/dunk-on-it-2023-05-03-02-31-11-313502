import reviewData from "../data/review_data.json";
import siteData from "../data/site_data.json";
import guideData from "../data/sc_data.json";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBank from "@/components/ProductBank";
import RelatedContent from "@/components/RelatedContent";
import Image from "next/image";
const Review = ({ post }) => {
  // const reviews = reviewData.posts;
  // const guides = guideData.posts;
  //
  // console.log(guides)
  console.log(post);
  return (
    <div className=" flex flex-col items-center ">
      <article className="prose md:prose-md space-y-4">
        <h1>REVIEW {post.title}</h1>

        <Image
          src={post.product?.thumbnail}
          alt={post.product?.name}
          width="0"
          height="0"
          sizes="100vw"
          className="h-80 w-80  m-2 "
        ></Image>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.replace(/\n/g, "<br>"),
          }}
        />

        {/*<button class="btn btn-primary"><a href={post.product.url} target='blank'>Buy on Amazon for {post.product.price}</a></button>*/}
      </article>
      <div className="flex flex-col  space-y-4">
        <ProductBank products={[{ product: post.product }]} />
        <RelatedContent />
      </div>
    </div>
  );
};
export default Review;
