export function viewTransition(initial?: string, exit?: string) {
  if (!document.startViewTransition) {
    return;
  }
  if (exit) document.documentElement.classList.add(exit);
  document.startViewTransition(() => {
    if (exit) document.documentElement.classList.remove(exit);
    if (initial) document.documentElement.classList.add(initial);
  });
}
