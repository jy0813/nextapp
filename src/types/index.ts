export interface Topics {
  id: number,
  title: string,
  body: string
}

export interface ReadTopics {
  params: {
    id: number,
    title: string,
    body: string
  }
}