import type { Metadata } from "next";
import ProductCustomerReviews from "@/components/home/products/product-customer-reviews";
import ProductDescription from "@/components/home/products/product-description";
import ProductDetail from "@/components/home/products/product-detail";
import ProductDetailImages from "@/components/home/products/product-detail-images";
import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
type Props = {
  params: { lang: Locale; collection_slug: string; id: string };
  searchParams: { [key: string]: string | number | string[] | undefined };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const product = await fetch(`https://dummyjson.com/products/${id}`).then(
    (res) => res.json()
  );
  return {
    title: `${product.title} - BargainFox.com`,
    description: `${product.title} Buy bargains online with big discounts! Deals on Home, Kitchen, Electronics, Health & Beauty and Toys. Free delivery on orders over £50. BIG on Service - BIG on Savings.`,
    openGraph: {
      title: product.title,
      description: `${product.title} Buy bargains online with big discounts! Deals on Home, Kitchen, Electronics, Health & Beauty and Toys. Free delivery on orders over £50. BIG on Service - BIG on Savings.`,
      images: [
        {
          url:
            product && product?.images
              ? product?.images[0]
              : "/images/main-logo-white.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

const fetchProductDetails = async (id: string) => {
  const data = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  if (!data.ok) {
    throw new Error(`Failed to fetch product detail`);
  }
  const res = (await data).json();
  return res;
};

export default async function Products({ params: { lang, id } }: Props) {
  const dictionary = await getDictionary(lang);
  const productDetails = await fetchProductDetails(id);
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
        <div className="col-6">
          <ProductCustomerReviews data={productDetails} />
        </div>
        <div className="col-6">
          <ProductDescription data={productDetails} />
        </div>
      </div>
    </div>
  );
}
