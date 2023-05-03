import reviewData from "../data/review_data.json";
import siteData from "../data/site_data.json";
import guideData from "../data/sc_data.json";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBank from "@/components/ProductBank";
import RelatedContent from "@/components/RelatedContent";
const SupportingContent = ({ post }) => {
  // const reviews = reviewData.posts;
  // const guides = guideData.posts;
  //
  // console.log(guides)
  console.log(post);
  const thumbnail = post.products[0]?.product?.thumbnail;
  const products = post?.products;

  return (
    <div className=" flex flex-col items-center ">
      <article className="prose md:prose-md space-y-4">
        <h1>{post.title}</h1>
        {thumbnail ? <img src={thumbnail} /> : null}

        <div
          dangerouslySetInnerHTML={{
            __html: post.content.replace(/\n/g, "<br>"),
          }}
        />

        {/*<button class="btn btn-primary"><a href={post.product.url} target='blank'>Buy on Amazon for {post.product.price}</a></button>*/}
      </article>
      <div className="flex flex-col  space-y-4">
        {products ? <ProductBank products={products} /> : null}
        <RelatedContent />
      </div>
    </div>
  );
};
export default SupportingContent;
