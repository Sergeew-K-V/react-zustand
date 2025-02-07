import { create } from "zustand";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: number;
}

interface IPostStore {
  posts: IPost[];
}

interface IPostStoreAction {
  fetchPosts: () => Promise<void>;
}

const usePostStore = create<IPostStore & IPostStoreAction>((set) => ({
  posts: [],
  fetchPosts: async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`);

    const data = await response.json();

    set(() => ({
      posts: data,
    }));
  },
}));

usePostStore.setState((state) => {
  state.fetchPosts();

  return state;
});

export default usePostStore;
