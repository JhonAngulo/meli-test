// <reference types="vite/client" />

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

export interface SearchProductsRequest {
  search: string
}
