export interface Post {
  title: string,
  content: string,
  boardId: number
}

export interface PreloadedPost extends Post {
  id: number
}

export const MockPosts: PreloadedPost[] = [
  {
    id: 1,
    title: "title1",
    content: "content1",
    boardId: 1
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
    boardId: 1
  },
  {
    id: 3,
    title: "title3",
    content: "content3",
    boardId: 1
  }
]
