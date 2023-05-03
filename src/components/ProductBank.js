import ProductLink from "@/components/ProductLink";
export default function ProductBank({ products }) {
  console.log(products);
  return (
    <div className="bg-primary-content/20 p-10">
      <h1>Featured Products</h1>
      {products.map((p) => (
        <ProductLink key={p.product.id} product={p.product} />
      ))}
    </div>
  );
}
