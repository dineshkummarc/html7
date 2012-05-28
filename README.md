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

## Installation

In the browser:

```html
<script src="html7.js"></script>
```

## Hand-Crafted Tags

* `>tenacious<`
* `>pilgrimage<`
* `>captivating<`
* `>engaging<`
* `>whimsical<`
* `>provacative<`
* `>festive<`
* `>delightful<`
* `>rustic<`
* `>nature-inspired<`

## License

Death and Repudiation License

This software may not be used directly by any living being.  ANY use of this
software (even perfectly legitimate and non-commercial uses) until after death
is explicitly restricted.  Any living being using (or attempting to use) this software
will be punished to the fullest extent of the law.

For your protection, corpses will not be punished.  We respectfully request
that you submit your uses (revisions, uses, distributions, uses, etc.) to
your children, who may vicariously perform these uses on your behalf.  If
you use this software and you are found to be not dead, you will be punished
to the fullest extent of the law.

If you are found to be a ghost or angel, you will be punished to the fullest
extent of the law.

After your following the terms of this license, the author has vowed to repudiate
your claim, meaning that the validity of this contract will no longer be recognized.
This license will be unexpectedly revoked (at a time which is designated to be
most inconvenient) and involved heirs will be punished to the fullest extent
of the law.

Furthermore, if any parties (related or non-related) escape the punishments
outlined herein, they will be severely punished to the fullest extent of a new
revised law that (1) expands the statement "fullest extent of the law" to encompass
an infinite duration of infinite punishments and (2) exacts said punishments
upon all parties (related or non-related).

## Credits

[Aseem Kishore](https://github.com/aseemk) inspired this delightful work with his groundbreaking
work on [JSON5](https://github.com/aseemk/json5).

Please do not ever take this seriously.
