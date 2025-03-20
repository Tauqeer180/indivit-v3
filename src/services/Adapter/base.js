import axios from "./customAxios";

export function GET(url) {
  return axios.get(url);
}

export function POST(url, requestData) {
  return axios.post(url, requestData);
}

export function PUT(url, requestData) {
  return axios.put(url, requestData);
}

export function DELETE(url) {
  return axios.delete(url);
}
