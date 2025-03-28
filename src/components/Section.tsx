import ItemCard from "./ItemCard";

export default function Section() {
  return (
    <div>
      <section>
        <h1>Section Title</h1>
        {/* TODO: This should be a NavLink */}
        <a href="">View All</a>
      </section>
      <div>
        {/* TODO: Map through selected items */}
        <ItemCard />
      </div>
    </div>
  );
}
