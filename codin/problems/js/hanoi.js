function hanoi(numDiscs, src, aux, dst) {
  // End condition check
  if (numDiscs <= 0) {
    return
  }

  // Recursive call to smaller problem
  hanoi(numDiscs - 1, src, dst, aux)

  // Trivial smaller problem
  console.log(`Move disc ${numDiscs} from ${src} to ${dst}`)

  // Another recursive call to smaller problem
  hanoi(numDiscs - 1, aux, src, dst)
}

// Small problem, with 3 disks
hanoi(3, 'rod 1', 'rod 2', 'rod 3')
