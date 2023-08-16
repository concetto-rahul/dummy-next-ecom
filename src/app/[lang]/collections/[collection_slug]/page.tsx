import type { Metadata } from "next";
import ProductFilters from "@/components/home/products/product-filters";
import ProductListHeading from "@/components/home/products/product-list-heading";
import ProductsBreadcrumb from "@/components/home/products/products-breadcrumb";
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
  if (!data.ok) {
    throw new Error(`Failed to fetch collection ${category} product data`);
  }
  const res = (await data).json();
  return res;
};

export async function generateMetadata({
  params: { collection_slug },
}: Props): Promise<Metadata> {
  // const collectionData = await fetch(`https://.../${collection_slug}`).then((res) => res.json())
  return {
    title: `${collection_slug} - BargainFox.com`,
    description: `${collection_slug} Buy bargains online with big discounts! Deals on Home, Kitchen, Electronics, Health & Beauty and Toys. Free delivery on orders over £50. BIG on Service - BIG on Savings.`,
    openGraph: {
      title: collection_slug,
      description: `${collection_slug} Buy bargains online with big discounts! Deals on Home, Kitchen, Electronics, Health & Beauty and Toys. Free delivery on orders over £50. BIG on Service - BIG on Savings.`,
    },
  };
}

export default async function Collections({
  params: { lang, collection_slug },
  searchParams,
}: Props) {
  const limit = 2;
  const pageNumber = searchParams?.page ? Number(searchParams.page) : 0;
  const dictionary = await getDictionary(lang);
  const products = await fetchProductList(collection_slug, limit, pageNumber);

  const breadcrumbList = [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "Home Decoration",
      slug: "/home-decoration",
    },
    {
      title: "Western Wear",
      slug: "/western-wear",
    },
  ];
  return (
    <div className="container-fluid">
      <ProductsBreadcrumb list={breadcrumbList} />
      <div className="row mb-5">
        {products.total > 0 ? (
          <>
            <div className="col-3">
              <ProductFilters />
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-12">
                  <ProductListHeading
                    limit={limit}
                    currentPage={pageNumber}
                    total={products.total}
                  />
                </div>

                {products.products.map((val: Product) => (
                  <div key={`dealp-${val.id}`} className="col-md-3">
                    <ProductsItem data={val} />
                  </div>
                ))}
                <Pagination total={products.total} limit={limit} />
              </div>
            </div>
          </>
        ) : (
          <div className="col-12">
            <p>No product list</p>
          </div>
        )}
      </div>
    </div>
  );
}
