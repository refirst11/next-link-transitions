export function viewTransition(callback: () => void, next?: string, old?: string): Promise<void> {
  if (!document.startViewTransition) {
    callback();
    return Promise.resolve();
  }

  if (old) document.documentElement.classList.add(old);

  const transition = document.startViewTransition(() => {
    if (old) document.documentElement.classList.remove(old);
    if (next) document.documentElement.classList.add(next);

    // Execute the callback function to start the page transition.
    callback();

    // If the DOM update is asynchronous, a Promise must be returned.
    return Promise.resolve();
  });

  return transition.finished;
}
