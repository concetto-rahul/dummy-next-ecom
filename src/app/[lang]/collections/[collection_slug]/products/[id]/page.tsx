import { getDictionary } from "@/dictionaries";
import { Locale } from "@/i18n-config";
type Props = {
  params: { lang: Locale; collection_slug: string; id: string };
  searchParams: { [key: string]: string | number | string[] | undefined };
};

export default async function Products({
  params: { lang, collection_slug, id },
}: Props) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <h1>
        Products Details {collection_slug}, {id}
      </h1>
    </div>
  );
}
