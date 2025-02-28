import { fetcher } from "@/lib/fetcher";
import React from "react";
import BlogsHero from "../components/BlogsHero";
import { BlogCard } from "@/components/Cards";

export default async function Page() {
  let res = await fetcher("blogs", { cache: true });
  res = JSON.parse(JSON.stringify(res));
  return (
    <div>
      <BlogsHero
        data={{
          title: "Smoothie Wissen",
          description:
            "Entdecken Sie eine köstliche Auswahl an frisch gemixten Smoothies bei unserem Online-Händler. Passen Sie jede Mischung mit unserem Mixer individuell an Ihren Geschmack an. Von belebenden Fruchtmischungen bis hin zu cremigen Genüssen – unsere Smoothies sind ein köstliches Abenteuer, das auf Sie wartet!",
        }}
      />
      <div className="tw-max-w-7xl tw-mt-10 tw-px-4  tw-mx-auto tw-grid 2xl:tw-grid-cols-4 md:tw-grid-cols-3 tw-grid-cols-2 tw-gap-4">
        {res?.data?.data?.map((blog, index) => {
          return (
            <div key={index}>
              <BlogCard data={blog} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
