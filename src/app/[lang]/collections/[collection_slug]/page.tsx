import ProductsItem from "@/components/home/products/products-item";
import Pagination from "@/components/pagination";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
import { Product } from "@/types/products";
type Props = {
  params: { lang: Locale; collection_slug: string };
  searchParams: { [key: string]: string | number | string[] | undefined };
};

const fetchProductList = async (
  category: string,
  limit: number,
  pageNumber: number
) => {
  const skip = limit * (pageNumber ? pageNumber - 1 : 0);
  const data = await fetch(
    `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`,
    {
      cache: "no-store",
    }
  );
  const res = (await data).json();
  return res;
};

export default async function Collections({
  params: { lang, collection_slug },
  searchParams: { page },
}: Props) {
  const limit = 2;
  const pageNumber = page ? Number(page) : 0;
  const dictionary = await getDictionary(lang);
  const products = await fetchProductList(collection_slug, limit, pageNumber);
  return (
    <div className="container-fluid">
      <h1>Results {collection_slug}</h1>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8">
          <div className="row">
            {products.total > 0 ? (
              <>
                {products.products.map((val: Product) => (
                  <div key={`dealp-${val.id}`} className="col-md-3">
                    <ProductsItem data={val} />
                  </div>
                ))}
                <Pagination />
              </>
            ) : (
              <div className="col-12">
                <p>No product list</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
