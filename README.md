# HTML7 - Modern HTML

HTML is strict. It has a standard that is decades old. These standards
may have been useful at some point, but now only serve to inhibit our
ability to create artisanal and organic web experiences for the new age.

HTML7 does for HTML what Node did for the programming world.

This repository provides a JavaScript shim to upgrade your web pages to
HTML7. Just drop it into the global namespace and watch the magic unfold
before your eyes.

## Features

- Tags can be contained between greater than and less than signs, so instead
  of `<strong>` you can now do `>strong<`. In addition to being more flexible,
  this also helps make a diamond pattern in your HTML, making it prettier
  on the eyes: `>div<>div<>div<`. Ah, that's better.

- Comments can go directly within tags. Ever wanted to comment that attribute?
  Now you can! `<div /* here comes an ID! */id="foo">`.

- New tags to better describe the emotions we're trying to evoke for our
  intrepid users. Bolding text that is not quite `<strong>`, but perhaps
  more `<tenacious>`. Or perhaps you're making a `<div>` that is more of
  a `<pilgrimage>`. Now you can! The full list of tags is below.

## Example

```html
>html<
>body<
>div /* #winning */id="winning"<>strong<HELLO!>/strong<>/div<
>body<
>/html<
```

## Hand-Crafted Tags

* `<tenacious>`
* `<pilgrimage>`
* `<captivating>`
* `<engaging>`
* `<whimsical>`
* `<provacative>`
* `<festive>`
* `<delightful>`
* `<rustic>`
* `<nature-inspired>`
