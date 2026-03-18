/**
 * 测试相关业务逻辑
 */
export async function getTestMessage(): Promise<{ message: string }> {
  return { message: "Test endpoint working!" };
}
