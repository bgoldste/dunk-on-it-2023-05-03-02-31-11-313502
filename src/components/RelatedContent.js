import ProductLink from "@/components/ProductLink";
import ContentCard from "@/components/ContentCard";
import guideData from "@/data/sc_data.json";
export default function RelatedContent({}) {
  const guides = guideData.posts.slice(0, 4);
  return (
    <div className="bg-primary p-10 ">
      <h1 className="primary-content">Related Content</h1>

      {guides.map((g) => (
        <ContentCard key={g.id} content={g} />
      ))}
    </div>
  );
}
