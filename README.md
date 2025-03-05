# next-link-transitions

[View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) in Next.js App Router with Server Components.

## Installation

```sh
npm install next-link-transitions
```

## Usage

```tsx
import { Link } from "next-link-transitions";
import "view.css";

export default function Component() {
  return (
    <Link href="/about" old="old" entry="entry">
      Go to /about
    </Link>
  );
}
```

## Example

```css
// view.css

.entry {
  view-transition-name: entry-transition;
}

.old {
  view-transition-name: old-transition;
}

@keyframes entry-transition {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes old-transition {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

::view-transition-new(entry-transition) {
  animation: entry-transition 1.5s ease;
}

::view-transition-old(old-transition) {
  animation: old-transition 1.5s ease;
}
```

## License

MIT license.
