import { baseURL, fetcher } from "@/lib/fetcher";
import React from "react";
import BlogContent from "../../components/BlogContent";
import TOC from "../../components/TOC";
import moment from "moment";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  let res = await fetcher(`blogById?slug=${decodedSlug}`, { cache: true });
  let blogData = res?.data?.current;
  return (
    <div>
      <div className="tw-mx-auto tw-max-w-[1440px] ">
        <div className="tw-flex tw-flex-col  tw-mx-auto tw-overflow-hidden tw-rounded">
          <img
            src={
              baseURL + "blogs/" + blogData?.image ||
              "https://source.unsplash.com/random/480x360"
            }
            alt=""
            className="tw-w-full tw-h-auto tw-max-w-6xl tw-mx-auto lg:tw-rounded-xl lg:tw-mt-36 md:tw-mt-32 tw-mt-28"
          />
          <div className=" tw-mx-auto tw-space-y-6 sm:tw-px-10 sm:tw-mx-12 md:tw-px-16 tw-px-5 ">
            <div className="tw-max-w-6xl tw-mx-auto lg:tw-px-6">
              <h1 className="tw-inline-block lg:tw-text-3xl md:tw-text-2xl sm:tw-text-xl lg:-tw-mt-10 -tw-mt-10 tw-font-bold tw-bg-white tw-w-full tw-shadow-lg tw-p-4 tw-rounded-lg tw-text-center ">
                {blogData?.title}
              </h1>
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: TOC }}></div> */}
            {/* <div className=" tw-text-end">
              <ShareButtons />
            </div> */}
            {/* Share Component */}
            {/* <FABComponent /> */}
            {/* <div className="tw-space-y-2"> </div> */}
            {blogData?.author_name && (
              <div className="tw-bg-white tw-rounded-lg tw-border tw-border-solid tw-border-gray-200 tw-flex tw-items-center tw-justify-between 2xl:tw-p-4 tw-p-3">
                <div className="tw-flex tw-items-center tw-gap-1">
                  <img
                    src={
                      blogData?.icon
                        ? baseURL + "blogs/" + blogData?.icon
                        : `https://ui-avatars.com/api/?background=random&size=150&name=${blogData?.author_name}`
                    }
                    alt={blogData?.author_name}
                    className="tw-rounded-full tw-w-12 tw-h-12"
                  />
                  <p className="text-xs dark:text-gray-600 mb-0 tw-font-bold">
                    {blogData?.author_name}
                  </p>
                </div>
                <div className="tw-space-y-1">
                  <p className="tw-text-xs tw-font-bold tw-mb-0">
                    Veröffentlicht:{" "}
                    {moment(blogData?.created_at).format("DD. MMMM YYYY")}
                  </p>
                  <p className="tw-text-xs tw-font-bold tw-mb-0">
                    Aktualisiert:{" "}
                    {moment(blogData?.updated_at).format("DD. MMMM YYYY")}
                  </p>
                </div>
              </div>
            )}
            {blogData?.description && (
              <div className="  lg:tw-rounded-md   tw-py-5 tw-max-w-3xl tw-mx-auto html-blog ">
                <div
                  dangerouslySetInnerHTML={{
                    __html: blogData?.description,
                  }}
                ></div>
              </div>
            )}
            <div className="tw-max-w-3xl tw-mx-auto ">
              <h1 className="tw-text-3xl">Inhaltsverzeichnis</h1>
              <TOC data={blogData?.body} />
            </div>
            <div className="  lg:tw-rounded-md  sm:tw-py-10 md:tw-py-16 tw-py-5 tw-max-w-3xl tw-mx-auto html-blog ">
              {/* <p dangerouslySetInnerHTML={{ __html: body }}></p> */}
              <BlogContent data={blogData?.body} />
            </div>
          </div>
        </div>

        {/* <div className=" md:tw-px-16 sm:tw-px-10 tw-px-5 ">
          {blogData?.related_blogs?.length > 0 && (
            <BlogsCarousel data={blogData?.related_blogs} />
          )}
          
        </div> */}
      </div>{" "}
      {/* {JSON.stringify(res)} */}
    </div>
  );
}
