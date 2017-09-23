function forLoop(array) {
  for(var i = 0; i < 25; i++) {
    if(i === 1) {
      array[parseInt(array.length, 10) + parseInt(i, 10)] = "I am 1 strange loop."
    }
    else { array[parseInt(array.length,10) + parseInt(i, 10)] = "I am ${i} strange loops."
    }
  }

  return array
}
