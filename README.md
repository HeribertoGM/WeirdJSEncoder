# Weird JS Encoder

Static Site to transform JS code into valid letterless JS code

Site: [WeirdJSEncoder](https://heribertogm.github.io/WeirdJSEncoder/)

---

## Example:

Input:
`console.log("Hello World!");`

Output:

```
eval(([]+[])[({}+[])[+!![] + +!![] + +!![] + +!![] + +!![]]+({}+[])[+!![]]+((+!![]/+[])+[])[+!![] + +!![]
+ +!![] + +!![]]+(![]+[])[+!![] + +!![] + +!![]]+({}+[])[+!![] + +!![] + +!![] + +!![] + +!![] + +!![]]
+(!![]+[])[+!![]]+(!![]+[])[+!![] +
.
.
.
[] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!!
[] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![]));
```

Run Output:
`Hello World!`
