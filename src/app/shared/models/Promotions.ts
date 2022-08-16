export interface PromotionsList {
  docs:          Promotion[];
  totalDocs:     number;
  limit:         number;
  totalPages:    number;
  page:          number;
  pagingCounter: number;
  hasPrevPage:   boolean;
  hasNextPage:   boolean;
  prevPage:      number;
  nextPage:      null;
}

export interface Promotion {
  _id:         string;
  url:         string;
  title:       string;
  description: string;
}
