# Feignjs-request
[Request](https://github.com/request/request) client for [FeignJs](https://github.com/feignjs/feignjs)


## Installation
```
npm install feignjs-request
```

## Getting started
this library can be used as client for feign:

```
feign.builder()
	.client(new FeignRequest())        
    .target(restDescription, 'http://jsonplaceholder.typicode.com');
```


## Options
The constructor accepts an options-object:

| Option | Note | default
|---|---|---|
| debug | enabled debug logging in request | false |
| json | configures request to use json | true |
| request | a custom request-function (e.g.created with request.defaults) | require('request') |


