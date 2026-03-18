---
title: "astro framework"
pubDate: 2026-03-18
description: "some basics of astro framework"
author: "seivarya"
tags: ["astro", "framework", "notes"]
---

i am learning astro. yk the "insanely fast" framework for server side 
rendering & almost no .js code on the client side. yeah that one.
since i've caterpillar's memory i'll write a simple blog in case i forget.
note that this is bare bones basic stuff, you should really read the [docs](https://docs.astro.build/en/getting-started/)
if you want to deep dive into the framework itself.

let's get into it.
the reason astro is a nice framework because it heavily forces
"island architecture".

the simple definition of islands architecture is, render HTML pages on the 
server side and inject the "placeholders" around the dynamic region of the
HTML page. in the [image](assets.astro.blog/island_architecture.png) notice the (server-rendered HTML) sections.
these are the "placeholders" that'll be injected onto the client side, into
containerized widgets. and ofc they can be reused by the client.
it looks like that it's micro frontend architecture but it's not, because 
the term "micro frontend" doesn't imply that the dedicated rendered output
will be rendered using HTML.

usually, we might have `<script>` that looks for a component and instantiates
a jQuery plugin on it. but in astro the component would be rendered on the
server side and a dedicated `<script>` gets emitted for that that loads the 
dedicated component. (ik its a wrong explanation i'll fix it later)

the "island architecture" approach divides each component with it own 
loading `<script>` meaning, it separates the hydration of components resulting
in faster and smoother pages unlike progressive hydration which is one 
single `<script>` with gradual hydration. (both are very different)

> add diagrams for island architecture & progressive hydration

this makes the island architecture very different from progressive hydration.
it doesn't require top down rendering! since each component is isolated unit
one component's performance issue won't affect/hold down the other's.

an island is simply a interactive component that can be independently hydrated 
or rendered without involing the rest of the page.
a client island is an interactive component that is hydrated separately from the 
rest of the page, whereas, 
server islands are rendered separately 
#### client islands
astro renders every UI component to just html & css by default, and strips all the
js automatically.

and to turn any of the static UI component into an interactive island we just need
a `client:*` directive. after this, astro builds and bundles your 
client side js for optimized perf.
```js
// initially:
<button /> // this is just a stripped js, only html & css version of a component!
<button client:load/> 
/* 
now after using the client:* directive we make it interactive and turn it 
into an *interactive* component and of course the rest of the stuff stays static. 
pretty neat, right?
*/
```

this *interaction* thingy is configured at the component level [per the docs],
this implies that we can use different directives for different components.
`client:idle` tells a component to load when browser becomes idle.
`client:visible` tells a component to load only once it enters the viewport.
and so on.

#### server islands

these exist to move expensive/slow server side code out of the way of the main
render process, this makes easy to combine high performance static HTML
and dynamic server generated components.

by adding `server:defer` in the component one can make the component as it's own server island.
this breaks your page into server rendered areas that load parallely instead of sequentially.
the architecture of server islands ensures that the components will be cached very aggresively (ofc it 
also depends on the server config not just the *island*)
the page displays fallback content instantly and shows the rendered content
as soon as it's available.

