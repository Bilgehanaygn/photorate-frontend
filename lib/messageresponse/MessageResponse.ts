export type MessageType = "ERROR" | "INFO" | "WARNING";

export interface MessageResponse {
  message: string;
  type: MessageType;
}

export function defaultSuccessResult(): MessageResponse {
  return {
    message: "success",
    type: "INFO",
  };
}
