# Japhonex Node

Japanese phone number checker for Node.

## Installation
```bash
$ npm i @tknf/japhonex
# or 
$ yarn add @tknf/japhonex
```

## Usage
In your app you can do something like:
```js
import { japhonex } from "@tknf/japhonex";

const regex = japhonex({ hyphen: "optinal" });
regex.test("<Your input>");
```

### Hyphen validation patterns
### Optional (default)
```js
const regex = japhonex({ hyphen: "optional" });
// 0xx-xxxx-xxxx or 0xxxxxxxxxx
```
### Required
```js
const regex = japhonex({ hyphen: "requied" });
// 0xx-xxxx-xxxx
```
### No hyphen
```js
const regex = japhonex({ hyphen: false });
// 0xxxxxxxxxx
```

## Licence
MIT