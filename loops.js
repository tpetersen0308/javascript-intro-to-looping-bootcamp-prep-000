function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if(i === 1) {
      array[array.length + i] = "I am 1 strange loop."
    }
    else array[array.length + i] = "I am ${i} strange loops."
  }

  return array
}
