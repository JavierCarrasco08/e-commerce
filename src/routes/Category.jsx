import { useLoaderData } from "react-router-dom";
import Card from "../components/card/Card";

export default function Category() {
  const category = useLoaderData();

  return (
    <main className="container outlet">
      {category.map((card) => (
        <Card
          name={card.name}
          key={card.id}
          src={card.src}
          prices={card.price}
          id={card.id}
        />
      ))}
    </main>
  );
}
