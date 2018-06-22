/*
= Tower of Hanoi

**8 disks:**

![8 disks](https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Tower_of_Hanoi.jpeg/600px-Tower_of_Hanoi.jpeg)

**6 disks:**

![6 disks](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif/240px-Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif)

Move the entire stack from rod 1 to rod 3,
using rod 2 as an auxiliary rod,
with the following rules:

* Only one disk can be moved at a time.
* Each move consists of taking the upper disk from
  one of the stacks and placing it on top of another stack or on an empty rod.
* No disk may be placed on top of a smaller disk.
*/

const hanoi = (numDiscs, src, aux, dst) => {
  if (numDiscs > 0) {
      hanoi(numDiscs - 1, src, dst, aux)
      console.log(`Move disc ${numDiscs} from ${src} to ${dst}`)
      hanoi(numDiscs - 1, aux, src, dst)
  }
}

hanoi(6, 'rod 1', 'rod 2', 'rod 3')
