import create from "zustand"
import { combine } from "zustand/middleware"
import { fetchTopTopics, fetchTopicList } from "@/networks/api/community/topic"

export type ITopics = {
  title: string
  dateCreate: string
  labels: {
    labelId: number
    labelName: string
  }[]
  loveCount: number
  topicId: number
  author: string
  avatar: string
  visitorCount: number
  commentCount: number
  brief: string
}[]

export interface ITopicState {
  topTopics: ITopics
  loadingTopTopics: boolean
  loadingTopics: boolean
  pageNum: number | undefined
  pageSize: number | undefined
  labelId: number | undefined
  total: number
  totalPage: number
  rows: ITopics
}

export const useTopicState = create(
  combine(
    {
      topTopics: [],
      loadingTopics: true,
      loadingTopTopics: true,
      pageNum: undefined,
      pageSize: undefined,
      labelId: undefined,
      total: 0,
      totalPage: 0,
      rows: [],
    } as ITopicState,
    (set, get) => ({
      freshTopTopics: async () => {
        set({ loadingTopTopics: true })
        const responseData = await fetchTopTopics()
        const transferedData: ITopics = responseData.map(item => {
          const { user } = item
          return {
            ...item,
            author: user.truename,
            avatar: user.photo,
          }
        })
        set({
          topTopics: transferedData,
          loadingTopTopics: false,
        })
      },
      fetchTopicList: async () => {
        set({ loadingTopics: true })
        const { pageNum, pageSize, labelId } = get()
        const responseData = await fetchTopicList(pageNum, pageSize, labelId)
        const transferedRows = responseData.rows.map(item => {
          const { user } = item
          return {
            ...item,
            author: user.truename,
            avatar: user.photo,
          }
        })
        set({
          ...responseData,
          rows: transferedRows,
          loadingTopics: false,
        })
      },
      setPageNum: (pageNum: number) => set({ pageNum }),
      setPageSize: (pageSize: number) => set({ pageSize }),
      setLabelId: (labelId: number) => set({ labelId }),
    })
  )
)
