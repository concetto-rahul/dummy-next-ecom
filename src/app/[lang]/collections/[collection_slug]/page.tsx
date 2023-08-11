import ProductFilters from "@/components/home/products/product-filters";
import ProductShortBy from "@/components/home/products/product-short-by";
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
  searchParams,
}: Props) {
  const limit = 2;
  const pageNumber = searchParams?.page ? Number(searchParams.page) : 0;
  const dictionary = await getDictionary(lang);
  const products = await fetchProductList(collection_slug, limit, pageNumber);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4">
          <ProductFilters />
        </div>
        <div className="col-8">
          <div className="row">
            {products.total > 0 ? (
              <>
                <div className="d-flex justify-content-between mb-4">
                  <h6>
                    Results 1-5 of over {products?.total || 0} {collection_slug}{" "}
                    {pageNumber}
                  </h6>
                  <ProductShortBy />
                </div>
                {products.products.map((val: Product) => (
                  <div key={`dealp-${val.id}`} className="col-md-3">
                    <ProductsItem data={val} />
                  </div>
                ))}
                <Pagination total={products.total} limit={limit} />
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
