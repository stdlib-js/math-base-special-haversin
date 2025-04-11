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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Haversine

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the half-value [versed sine][versed-sine].

<section class="intro">

The half-value [versed sine][versed-sine] is defined as

<!-- <equation class="equation" label="eq:haversine" align="center" raw="\operatorname{haversin}(\theta) = \frac{1 - \cos \theta}{2}" alt="Haversed sine."> -->

```math
\mathop{\mathrm{haversin}}(\theta) = \frac{1 - \cos \theta}{2}
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{haversin}(\theta) = \frac{1 - \cos \theta}{2}" data-equation="eq:haversine">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@26abdafc2789332d3fcc28c36d4b22669a5fde03/lib/node_modules/@stdlib/math/base/special/haversin/docs/img/equation_haversine.svg" alt="Haversed sine.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-haversin
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var haversin = require( '@stdlib/math-base-special-haversin' );
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
var uniform = require( '@stdlib/random-array-uniform' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var TWO_PI = require( '@stdlib/constants-float64-two-pi' );
var haversin = require( '@stdlib/math-base-special-haversin' );

var opts = {
    'dtype': 'float64'
};
var x = uniform( 100, 0.0, TWO_PI, opts );

logEachMap( 'haversin(%0.4f) = %0.4f', x, haversin );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/haversin.h"
```

#### stdlib_base_haversin( x )

Computes the half-value [versed sine][versed-sine] (in radians).

```c
double out = stdlib_base_haversin( 0.0 );
// returns 0.0

out = stdlib_base_haversin( 3.141592653589793 / 2.0 );
// returns ~0.5
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_haversin( const double x );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/haversin.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 0.0, 0.523, 0.785, 1.047, 3.14 };

    double y;
    int i;
    for ( i = 0; i < 5; i++ ) {
        y = stdlib_base_haversin( x[ i ] );
        printf( "haversin(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/havercos`][@stdlib/math/base/special/havercos]</span><span class="delimiter">: </span><span class="description">compute the half-value versed cosine.</span>
-   <span class="package-name">[`@stdlib/math-base/special/versin`][@stdlib/math/base/special/versin]</span><span class="delimiter">: </span><span class="description">compute the versed sine.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

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
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-haversin/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-haversin/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-haversin/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-haversin/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-haversin/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-haversin/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-haversin/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-haversin/main/LICENSE

[versed-sine]: https://en.wikipedia.org/wiki/Versine

<!-- <related-links> -->

[@stdlib/math/base/special/havercos]: https://github.com/stdlib-js/math-base-special-havercos

[@stdlib/math/base/special/versin]: https://github.com/stdlib-js/math-base-special-versin

<!-- </related-links> -->

</section>

<!-- /.links -->
