# next-link-transitions

[View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API) in Next.js App Router with Server Components.

## Installation

```sh
npm install next-link-transitions
```

## Usage

Set the class names that have the keyframes animation set to old and next.

```tsx
import { Link } from "next-link-transitions";
import "view.css";

export default function Component() {
  return (
    <Link href="/about" old="old" next="next">
      Go to /about
    </Link>
  );
}
```

## Example

```css
// view.css

.next {
  view-transition-name: next-transition;
}

.old {
  view-transition-name: old-transition;
}

@keyframes next-transition {
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

::view-transition-new(next-transition) {
  animation: next-transition 1.5s ease;
}

::view-transition-old(old-transition) {
  animation: old-transition 1.5s ease;
}
```

## License

MIT license.
