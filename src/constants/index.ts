import { ICategoryItemDTO } from '@/api/category'
export const PC_DEVICE_WIDTH = 1280
export const ALL_CATEGIRY_ITEM: ICategoryItemDTO = {
  id: 'all',
  name: '全部',
  urlname: ''
}

export const THEME_LIGHT = 'THEME_LIGHT'
export const THEME_DARK = 'THEME_DARK'
export const THEME_SYSTEM = 'THEME_SYSTEM'

export const CATEGORY_NOMAR_DATA: Array<ICategoryItemDTO> = [
  ALL_CATEGIRY_ITEM,
  { id: 'web_app_icon', name: 'UI/UX' },
  { id: 'design', name: '平面' },
  { id: 'illustration', name: '插画/漫画' },
  { id: 'photography', name: '摄影' },
  { id: 'games', name: '游戏' },
  { id: 'anime', name: '动漫' },
  {
    id: 'industrial_design',
    name: '工业设计'
  },
  {
    id: 'industrial_design',
    name: '建筑设计'
  },
  {
    id: 'industrial_design',
    name: '人文艺术'
  },
  {
    id: 'industrial_design',
    name: '家居/家装'
  }
]

export const MENU_KEY = 'A_MENU_KEY'
