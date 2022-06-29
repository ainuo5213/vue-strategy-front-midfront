import request from '@/utils/request'

export interface ICategoryItemDTO {
  id: string
  name: string
  col?: number
  urlname?: string
}

export interface ICategorys {
  categorys: ICategoryItemDTO[]
}

export function getCategories(): Promise<ICategorys> {
  return request({
    url: '/category'
  })
}
