import ProductLink from "@/components/ProductLink";
import guideData from "@/data/sc_data.json";
import Link from "next/link";
import Image from "next/image";
import formatSlug from "@/lib/formatSlug";

export default function ContentCard({ content }) {
  console.log(content);

  let thumbnail = content?.products?.[0]?.product?.thumbnail;
  if (!thumbnail) {
    thumbnail = content?.product?.thumbnail;
    if (!thumbnail) {
      return null;
    }
  }

  // console.log(content.products[0])
  const guides = guideData.posts;
  return (


              // <div className="card lg:card-side bg-base-100 shadow-xl">
              //     <figure>   <Image
              //         src={thumbnail}
              //         alt={content.title}
              //         width="0"
              //         height="0"
              //         sizes="100vw"
              //         className="h-40 w-40 self-center m-2"
              //     ></Image></figure>
              //     <div className="card-body">
              //         <h2 className="card-title">New album is released!</h2>
              //         <p>Click the button to listen on Spotiwhy app.</p>
              //         <div className="card-actions justify-end">
              //             <button className="btn btn-primary">Listen</button>
              //         </div>
              //     </div>
              // </div>

      <div className="card mx-auto xs:w-full glass mx-2 my-2  image-full">
          <figure className="">
              <Image
                  src={thumbnail}
                  alt={content.title}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="h-full w-full "
              ></Image>
          </figure>
        <div className="card-body  items-center text-center ">
          <h2 className="card-title text-white"><Link href={formatSlug(content.slug)}>{content.title}</Link></h2>
            {/*<h4> {content.product.url}</h4>*/}
          <p className={"text-white"}>{content.content.slice(0, 250)}...</p>
          <div className="card-actions">

              <Link href= {content.product.url}>
            <button className="btn btn-secondary">Buy Now</button>
              </Link>
              <button className="btn btn-primary">
                  <Link href={formatSlug(content.slug)}>
                     Read Review
                  </Link></button>
          </div>
        </div>

      </div>
    //
    // <div className=" card lg:card-side bg-neutral-content text-secondary  m-2 rounded-lg ">
    //   <div className="flex-row items-center flex ">
    //     <Image
    //       src={thumbnail}
    //       alt={content.title}
    //       width="0"
    //       height="0"
    //       sizes="100vw"
    //       className="h-40 w-40 self-center m-2"
    //     ></Image>
    //     <div className="flex flex-col p-1 m-1">
    //       <h2 className="prose-lg ">
    //         <Link href={formatSlug(content.slug)}>{content.title}</Link>
    //       </h2>
    //       <p> {content.content.slice(0, 250)}...</p>
    //       <div className="flex flex-row-reverse p-1 m-1">
    //         <Link href={formatSlug(content.slug)}>
    //           <btn className="btn btn-primary self-center">Check It Out</btn>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
