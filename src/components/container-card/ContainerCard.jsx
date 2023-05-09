import { getAll } from "../../helper/getAll";
import Card from "../card/Card";
import "./containerCard.scss";
export default function ContainerCard() {
  return (
    <main className="container outlet">
      {getAll().map((card) => (
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
