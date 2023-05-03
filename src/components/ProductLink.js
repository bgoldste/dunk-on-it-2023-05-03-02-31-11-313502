import Image from "next/image";
import Link from "next/link";
import reviewData from "@/data/review_data.json";
import formatSlug from "@/lib/formatSlug";
export default function ProductLink({ product }) {
  const review = reviewData.posts.find((r) => r.product.id === product.id);
  const slug = review?.slug;
  if (!slug) {
    return null;
  }

  return (
    <div className="bg-neutral-content text-secondary p-10 m-2 rounded-lg flex flex-col">
      <div className="flex-row items-center flex p-2" m-2>
        <Image
          src={product.thumbnail}
          width="0"
          height="0"
          sizes="100vw"
          className="h-32 w-32 "
        ></Image>

        <div className="flex flex-col p-1 m-1">
          <h2 className="prose-xl ">
            <Link href={product.url}>{product.name}</Link>
          </h2>
          <div className={"flex flex-row justify-around"}>
            {slug ? (
              <Link className="p-4" href={slug}>
                Read review
              </Link>
            ) : null}
            <button className="btn btn-primary">
              <Link href={product.url}>
                Buy Now{" "}
                {!product.price.includes("None")
                  ? "for " + product.price
                  : null}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
