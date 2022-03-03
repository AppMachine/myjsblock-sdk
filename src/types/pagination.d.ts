interface PaginationOptions {
  pageNumber?: number
  pageSize?: number
  nextToken?: string
}

export enum PaginationType {
  none,
  pageNumber,
  nextToken,
}