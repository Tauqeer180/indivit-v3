// app/revalidate-action.ts
'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

export async function revalidateRoute(_: any, formData: FormData) {
  const route = formData.get('route') as string;
  if (!route || !route.startsWith('/')) {
    return 'Invalid route';
  }

  revalidatePath(route);
  return `✅ Revalidated ${route}`;
}

export async function revalidateByTag(tag: string) {
  // const route = formData.get('route') as string;
  if (!tag ) {
    return 'Invalid tag';
  }

  revalidateTag(tag);
  return `✅ Revalidated ${tag}`;
}
