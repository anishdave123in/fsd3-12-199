# EventLoop
JS is synchronos and 
single threaded bydefault

## There can be async behaviour
- with BrowserAPI - setTimeout, setInterval, setImmediate,nextTick
- with promises
- with event handlers
<!-- Event loop callback promos is very imp | in c++ oops |in c pointer  -->

<!-- js is syncuronous (top to bottom hr fn ko baar baar call krega) single threaded-->
<!-- -->
# Promise
- a function not executed immediately but it must be executed after a while it has some status during execution.At final it may resolve (succes)or reject(unsucess)
# Call back fn
- call back fn that passes an argument or the parameter to another fn

#  Type  of Modern javascript
Modern javascript divided into two categories
- common js(cjs) -> supports oops -> recquire
    - priority(nextTick,Promise,setImmediate/setTimeout)

- module js(mjs) ->follow modular approach ->import
  - priority (Promise,nextTick,setImmediate/setTimeout)