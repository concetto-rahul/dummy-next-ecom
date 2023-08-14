import ProductDetail from "@/components/home/products/product-detail";
import ProductDetailImages from "@/components/home/products/product-detail-images";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
type Props = {
  params: { lang: Locale; collection_slug: string; id: string };
  searchParams: { [key: string]: string | number | string[] | undefined };
};

const fetchProductDetails = async (id: string) => {
  const data = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  const res = (await data).json();
  return res;
};

export default async function Products({
  params: { lang, collection_slug, id },
}: Props) {
  const dictionary = await getDictionary(lang);
  const productDetails = await fetchProductDetails(id);
  console.log(productDetails);
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-6">
          <ProductDetailImages
            title={productDetails.title}
            images={productDetails.images}
          />
        </div>
        <div className="col-6">
          <ProductDetail data={productDetails} />
        </div>
      </div>
    </div>
  );
}
