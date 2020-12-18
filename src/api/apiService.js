const API_URL = "https://sandbox.houpa.app/api-tests/showcases";

// usando fetch para busca e montar a api
async function getData() {
  const res = await fetch(API_URL);
  const json = await res.json();

  const sales = json.showcases.map((sale) => sale);
  const product = sales.map(({ products }) => products);
  const products = product.map((items) => {
    return items.map(({ id, name, description, photo, price }) => {
      return {
        id,
        name,
        description,
        photo,
        price,
        isCheck: false,
      };
    });
  });

  return products;
}

export { getData };
