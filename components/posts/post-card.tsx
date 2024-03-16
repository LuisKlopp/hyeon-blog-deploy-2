import { Calendar } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import KopLogo from "@/public/koplogo.png";

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
    <article className="border-2 rounded-lg shadow-lg">
      <Link href={slug}>
        <div>
          <Image
            alt="image"
            src={KopLogo}
            priority
          />
        </div>
        <div className="flex flex-col p-2 gap-2">
          <div>
            <h2 className="text-xl font-bold line-clamp-2">
              {title}
            </h2>
          </div>
          <div className="text-muted-foreground line-clamp-2">
            {description}
          </div>
          <div className="flex justify-between items-center">
            <dl>
              <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={date}>
                  {formatDate(date)}
                </time>
              </dd>
            </dl>
          </div>
        </div>
      </Link>
    </article>
  );
}
