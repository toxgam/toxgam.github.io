/*
= Tower of Hanoi

**Example: 8 disks**

![Example: 8 disks](https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tower_of_Hanoi.jpeg/300px-Tower_of_Hanoi.jpeg)

**Example: 6 disks**

![Example: 6 disks](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif/300px-Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif)

Move the entire stack from rod 1 to rod 3,
using rod 2 as an auxiliary rod,
with the following rules:

* Only one disk can be moved at a time.
* Each move consists of taking the upper disk from
  one of the stacks and placing it on top of another stack or on an empty rod.
* No disk may be placed on top of a smaller disk.

== Solution

We will use recursion, to break down a big problem to several *smaller* problems:

* Some of the smaller problems should have *similar* shape with the big problem.
* The rest of the smaller problems do not have similar shape,
  but should be solvable *trivially*.

Recursively, the smaller problems that have *similar* shape with the big problem
will in turn be able to broken down to more smaller problems.

Important things to note about recursion:

* Shape: smaller problems are smaller, but have similar shape with the big problem.
  A recursive function always has recursive call(s).
* End condition: problems get smaller and smaller, until an "end" size.
  That size is trivial to solve.
  A recursive function always has end condition check(s).

Imagine that we have already had a function `hanoi` that takes 4 arguments:
`(numDiscs, src, aux, dst)`.

For example, calling `hanoi(4, 'rod 1', 'rod 2', 'rod 3')`
will move 4 disks from rod 1 to rod 3, using rod 2 as an auxiliary rod.

`hanoi(4, 'rod 1', 'rod 2', 'rod 3')` works like this:

Step 1:
Call `hanoi(3, 'rod 1', 'rod 3', 'rod 2')`.
It will somehow move the 3 top disks from rod 1 to rod 2,
using rod 3 as an auxiliary rod.

After finishing:
* rod 1 has one disk
* rod 2 has 3 disks
* rod 3 is empty

Step 2:
Trivially move one disk from rod 1 to rod 3.

Step 3:
Call `hanoi(3, 'rod 2', 'rod 3', 'rod 1')`.
It will move the 3 disks from rod 2 to rod 3,
using rod 1 as an auxiliary rod.

`hanoi(3, ...)` will in turn call `hanoi(2, ...)`,
will in turn call `hanoi(1, ...)`.
`hanoi(1, ...)` is the end condition, because it's
trivial to move only one disk.
*/

function hanoi(numDiscs, src, aux, dst) {
  if (numDiscs > 0) {  // End condition check
    // Recursive call to smaller problem
    hanoi(numDiscs - 1, src, dst, aux)

    // Trivial smaller problem
    console.log(`Move disc ${numDiscs} from ${src} to ${dst}`)

    // Another recursive call to smaller problem
    hanoi(numDiscs - 1, aux, src, dst)
  }
}

// Small problem, with 3 disks
hanoi(3, 'rod 1', 'rod 2', 'rod 3')
