import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: 'http://example.com',
  timeout: 30000, // 30 secs
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export async function apiPostOrder(orderJson: any) {
  const result = await api.post('/order');
  return result;
}


export async function apiGetOrder(hash: string) {
  const result = await api.get('/order');
  return result;
}
