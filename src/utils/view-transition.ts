export function viewTransition(entry?: string, exit?: string) {
  if (!document.startViewTransition) {
    return;
  }
  if (exit) document.documentElement.classList.add(exit);
  document.startViewTransition(() => {
    if (exit) document.documentElement.classList.remove(exit);
    if (entry) document.documentElement.classList.add(entry);
  });
}
