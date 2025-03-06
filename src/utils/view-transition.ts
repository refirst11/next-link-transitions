export function viewTransition(next?: string, old?: string) {
  if (!document.startViewTransition) {
    return;
  }
  if (old) document.documentElement.classList.add(old);
  document.startViewTransition(() => {
    if (old) document.documentElement.classList.remove(old);
    if (next) document.documentElement.classList.add(next);
  });
}
