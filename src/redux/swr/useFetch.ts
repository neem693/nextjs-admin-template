import useSWR from 'swr';
// 데이터 타입 지정
interface Post {
  id: number;
  title: string;
  body: string;
}
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export function useFetch(endpoint: string) {
  const { data, error } = useSWR<Post[]>(endpoint, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: !!error,
  };
}
