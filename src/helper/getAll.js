import data from "../data";

export function getAll() {
  const dataAll = Object.keys(data);
  const container = [];

  for (const arr of dataAll) {
    data[arr].forEach((e) => {
      container.push(e);
    });
  }

  return container;
}
