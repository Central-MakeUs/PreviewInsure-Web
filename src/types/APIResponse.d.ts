// 서버에서 내려주는 응답 구조
interface APIResponse<T> {
  code: number; // 상태코드 (성공, 실패 모두 동일)
  message: string; // 메시지
  data: T; // response 결과
}
