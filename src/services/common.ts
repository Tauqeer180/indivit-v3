import { fetcher } from "@/lib/fetcher";


export const getSEOData = async (page: string) => await fetcher(`getSeoPageDetail?page_title=${page}`, { cache: true, revalidate: 3600*12 });