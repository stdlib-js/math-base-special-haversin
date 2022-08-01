<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Haversine

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the half-value [versed sine][versed-sine].

<section class="intro">

The half-value [versed sine][versed-sine] is defined as

<!-- <equation class="equation" label="eq:haversine" align="center" raw="\operatorname{haversin}(\theta) = \frac{1 - \cos \theta}{2}" alt="Haversed sine."> -->

<div class="equation" align="center" data-raw-text="\operatorname{haversin}(\theta) = \frac{1 - \cos \theta}{2}" data-equation="eq:haversine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@26abdafc2789332d3fcc28c36d4b22669a5fde03/lib/node_modules/@stdlib/math/base/special/haversin/docs/img/equation_haversine.svg" alt="Haversed sine.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import haversin from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-haversin@deno/mod.js';
```

#### haversin( x )

Computes the half-value [versed sine][versed-sine] (in radians).

```javascript
var v = haversin( 0.0 );
// returns 0.0

v = haversin( 3.141592653589793/2.0 );
// returns ~0.5

v = haversin( -3.141592653589793/6.0 );
// returns ~0.06699
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-linspace@deno/mod.js';
import TWO_PI from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-two-pi@deno/mod.js';
import haversin from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-haversin@deno/mod.js';

var x = linspace( 0.0, TWO_PI, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( haversin( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/havercos`][@stdlib/math/base/special/havercos]</span><span class="delimiter">: </span><span class="description">compute the half-value versed cosine.</span>
-   <span class="package-name">[`@stdlib/math/base/special/versin`][@stdlib/math/base/special/versin]</span><span class="delimiter">: </span><span class="description">compute the versed sine.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-haversin.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-haversin

[test-image]: https://github.com/stdlib-js/math-base-special-haversin/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-haversin/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-haversin/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-haversin?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-haversin.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-haversin/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-haversin/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-haversin/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-haversin/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-haversin/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-haversin/main/LICENSE

[versed-sine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

[@stdlib/math/base/special/havercos]: https://github.com/stdlib-js/math-base-special-havercos/tree/deno

[@stdlib/math/base/special/versin]: https://github.com/stdlib-js/math-base-special-versin/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
