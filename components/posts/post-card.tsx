import { Calendar } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Swiss from "@/public/static/swiss.png";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
}

export function PostCard({
  slug,
  title,
  description,
  date,
}: PostItemProps) {
  return (
    <Link href={slug}>
      <article className="border rounded-lg hover:scale-105 hover:shadow-lg transition ease-linear min-h-80">
        <Image
          alt="image"
          src={Swiss}
          priority
          className="rounded-t-lg h-52 w-full"
        />
        <div className="flex flex-col p-4 min-h-44 justify-between">
          <div>
            <h2 className="text-lg font-bold line-clamp-2">
              {title}
            </h2>
          </div>
          <div className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </div>
          <div>
            <dl>
              <dd className="text-sm sm:text-base flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={date}>
                  {formatDate(date)}
                </time>
              </dd>
            </dl>
          </div>
        </div>
      </article>
    </Link>
  );
}
