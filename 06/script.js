// Memory allocation in js 
// Two types of memory - 
//                      Stack 
//                      Heap 

// Stack - > Primitive 
// Heap  - > Non- Primitive
 
// in staack we get copy and in heap we got reference 
// Stack Memory
// The stack is a structured, linear memory area that uses a LIFO (Last In, First Out) principle, much like a stack of plates. 
// Static Allocation: The engine knows the size of the data at compile time and allocates a fixed amount of memory for it.
// Stored Data:
// Primitive values: string, number, boolean, undefined, and null are stored directly on the stack.
// References (Pointers): For non-primitive values, the variable in the stack holds a reference (memory address/pointer) to the actual data stored in the heap.
// Function Execution Contexts: The call stack itself is an implementation of a stack data structure and keeps track of the currently executing functions.
// Speed and Limits: Stack access is faster than heap access because it is a simple, linear structure. However, it has a limited size, which can lead to a "stack overflow" error if too much memory is allocated. 



// Heap Memory
// The heap is a larger, unstructured memory region used for storing complex data that may grow or shrink in size during the program's execution. 
// Dynamic Allocation: Memory is allocated at run time as needed, and the size can change, which is why it is used for data whose size is not known at compile time.
// Stored Data:
// Objects and Arrays: All objects and arrays are stored in the heap.
// Functions: Functions are also a type of object in JavaScript and are stored in the heap.
// Garbage Collection: Unlike the stack, which automatically clears data when a function returns, the heap requires a process called "garbage collection" to free up memory when objects are no longer referenced by the program.
// Access Time: Heap access is slower due to its unstructured nature and the more complex memory management involved. 
