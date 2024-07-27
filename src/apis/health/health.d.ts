/*
  request와 response로 이용되는 type 관리
*/

export interface HealthTestResponse {
  isHealthCheck: boolean;
}

export interface HealthRequest {
  name: string;
  input: string;
}

export interface HealthResponse {
  name: string;
  input: string;
}
