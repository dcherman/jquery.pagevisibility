# jquery.pagevisibility

This plugin normalizes the prefixed names for the Page Visibility API so that you can simply use the unprefixed "visibilitychange" event with jQuery and use the unprefixed document.hidden and document.visibilityState properties.

This plugin targets IE8+, Chrome, and Firefox.  It does not attempt to fix these events in other browsers.  In IE8/9 where the Page Visibility API isn't supported, we provide a "good enough" shim using focus/blur events, however the real Page Visibility API cannot be polyfilled.

See the [page visibility](https://developer.mozilla.org/en-US/docs/DOM/Using_the_Page_Visibility_API) entry on the MDN for more information.

## License
Copyright (c) 2013 Daniel Herman, contributors Licensed under the MIT license.
