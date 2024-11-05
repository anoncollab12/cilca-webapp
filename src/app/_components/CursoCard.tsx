import { Badge } from "~/components/ui/badge";
import { getAuthorName } from "~/server/queries";
import BuyButton from "./BuyButton";

interface CursoCardProps {
  id: number;
  name: string;
  authorid: string;
  urlThumbnail: string;
  category: string;
  price: string;
}
export default async function CursoCard({
  id,
  name,
  authorid,
  urlThumbnail,
  price,
  category,
}: CursoCardProps) {
  const authorName = await getAuthorName(authorid);
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="relative h-48 w-full">
        <img
          className="h-full w-full object-cover"
          src={urlThumbnail}
          alt={name}
        />
      </div>
      <div className="p-3">
        <div className="flex">
          <a
            href={`curso/${id}`}
            className="grow text-lg font-semibold leading-tight text-gray-900 hover:underline "
          >
            {name}
          </a>
          <Badge variant="secondary">{category}</Badge>
        </div>

        <ul className="mt-2 flex items-center gap-4">
          <li className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              />
            </svg>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {authorName}
            </p>
          </li>

          <li className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
          </li>
        </ul>

        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900">
            {`$${price}`}
          </p>
          <BuyButton price={Number(price)} />
        </div>
      </div>
    </div>
  );
}
