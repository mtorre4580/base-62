# Base62

The Base62 is an encoding scheme that use 62 characters, consists in capital letters A to Z, the lower case letters and the numbers 0 to 9

Characters: `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`

# Why is useful?

Is useful when you need to convert a number to a short string characters, is used commonly for URL shorteners like tinyurl

Example the number 11157 is converted to **"2TX"**

# Methods

- **encode**: Encode a number to a string representation
- **decode**: Decode the string to retrieve the number

# Algorithm

<div style="display:flex; justify-content: center">

<span>11157 = <span> 2 x 62<sup>2</sup> + 55 x 62<sup>1</sup> + 59 x 62<sup>0</sup> = [2, 55, 59] -> Use the alphabet to retrieve the char asociated -> [2, T, X]

<img src="https://github.com/mtorre4580/base62/blob/main/algorithm.png" alt="example algorithm" />

<div>
