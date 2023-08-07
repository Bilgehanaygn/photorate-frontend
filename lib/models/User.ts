export type Role = "USER" | "REVIEWER";

export interface UserViewModel {
  phoneNum: string;
  name?: string;
  age?: number;
  role: Role;
}
