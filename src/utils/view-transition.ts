export function viewTransition(entry?: string, old?: string) {
  if (!document.startViewTransition) {
    return;
  }
  if (old) document.documentElement.classList.add(old);
  document.startViewTransition(() => {
    if (old) document.documentElement.classList.remove(old);
    if (entry) document.documentElement.classList.add(entry);
  });
}
