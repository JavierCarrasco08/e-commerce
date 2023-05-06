import "./button.scss";

export default function Button({ src, onActive }) {
  return (
    <button className="button" onPointerDown={onActive}>
      <img
        src={src}
        alt="Click here to expand the category menu."
        className="button__img"
      />
    </button>
  );
}
