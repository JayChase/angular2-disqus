# [5.0.0]

## Breaking Changes

DISQUS.reset() will now only be called if both the **page-identifier** and **page-url** have been set. If one had already been set and the other is updated DISQUS.reset will be called as well.
These should wlays be updated together.