= Balanced parentheses

Check if the paretheses are balanced:
opening paretheses "(" have corresponding closing ones ")".

Examples:

* "()(()())": balanced
* "(()))": not balanced
* ")(": not balanced

== Solution

Create a number, initialize it to 0.

Scan each character of the string from left to right:
- Increase the number when "(" is met.
- Decrease the number when ")" is met.

Return false:
- If at the end, the number is not 0.
- If the number is negative even if it's not the end.
