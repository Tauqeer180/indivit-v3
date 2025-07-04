// app/revalidate-action.ts
'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateRoute(_: any, formData: FormData) {
  const route = formData.get('route') as string;
  if (!route || !route.startsWith('/')) {
    return 'Invalid route';
  }

  revalidatePath(route);
  return `✅ Revalidated ${route}`;
}
