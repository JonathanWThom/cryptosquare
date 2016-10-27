1. Remove all spaces from input
- input: hello world
- output: helloworld

2. Make all letters lowercase
- input: HELlo worlD
- output: hello world

3. Determine string length
- input: autobiographical
- output: 16

4. If square root of string length divides evenly with no remainder, columns and rows will be equal to square root of string length.
- input: autobiographical
- output: column = 4, row = 4

5. If square root of string length does divide evenly, column length is square root rounded up, row length is square root rounded down.
- input: hello world
- output: col = 4, row = 3

6. Return array from original string with first letter, letter at +square root spot, next letter at +square root spot. Then reloop and return 2nd letter, then letter at +square root spot from that, etc... until reaching column length number of loops. 
