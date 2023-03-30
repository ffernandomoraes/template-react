import Pagination from './pagination';

export default interface ApiResponse<T = any> {
  data?: T;
  pagination?: Pagination;
}
