import axios from 'axios';
// 데이터 타입
export interface TestPost {
  id: number;
  title: string;
  body: string;
}
// 게시글 목록 가져오기 (GET)
export const fetchTodo = async (): Promise<TestPost[]> => {
  const { data } = await axios.get('https://dummyjson.com/todos');
  return data;
};
// // 게시글 추가 (POST)
// export const createPost = async (post: { title: string; body: string }) => {
//   const { data } = await axios.post("https://jsonplaceholder.typicode.com/posts", post);
//   return data;
// };
