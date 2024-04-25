// I. Stack
class Stack {
  constructor() {
    this.stack = []
  }
  
  // đẩy các phẩn tử vào một mảng để tạo dữ liệu stack
  push(element) {
    this.stack.push(element)
  }
  
  // Xoá phần tử top của stack và trả về gia tri top 
  pop() {
    if (this.isEmpty()) return 'Stack is empty!'
    return this.stack.pop()
  }
  
  // Trả về giá trị top của stack
  peek() {
    if (this.isEmpty()) return 'Stack is empty'
    return this.stack[this.stack.length - 1]
  }
  
  // check
  isEmpty() {
    return !this.stack.length
  }
}



// II. Queue
class Queue {
constructor() {
this.queue = []
}

enqueue(element) {
this.queue.push(element)
}

dequeue() {
if (this.isEmpty()) return 'Queue is empty' 
return this.queue.shift()
}

peek() {
if (this.isEmpty()) return 'Queue is empty'
return this.queue[0]
}

// helper method
isEmpty() {
return !this.queue.length
}
}