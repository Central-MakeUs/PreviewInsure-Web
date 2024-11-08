export interface questionRequest {
  insuranceType: string | null | undefined;
}

interface questionItem {
  qnaBoardId: number;
  question: string;
  answer: string;
  links: LinkItem[];
}

interface LinkItem {
  insuranceCompany: string;
  link: string;
}

export interface questionResponse {
  totalPages: number;
  totalElements: number;
  size: number;
  content: questionItem[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  empty: boolean;
}
