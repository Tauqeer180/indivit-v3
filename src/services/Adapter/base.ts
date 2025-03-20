import { fetcher } from "@/lib/fetcher";

export function GET(url: string) {
  return fetcher(url, { method: "GET" });
}

export function POST(url: string, requestData) {
  return fetcher(url, { method: "POST", data: requestData });
}

export function PUT(url: string, requestData) {
  return fetcher(url, { method: "PUT", data: requestData });
}

export function DELETE(url: string) {
  return fetcher(url, { method: "DELETE" });
}
