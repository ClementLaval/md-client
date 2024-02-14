export async function retrieve(relativePath: string): Promise<any> {
  return await import(`/${relativePath}`).then((module) =>
    JSON.stringify(module.default)
  );
}
