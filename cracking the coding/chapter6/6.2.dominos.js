// There is an 8x8 chess board in which two diagonally 
// opposite corners have been cut off. Youare given 31 
// dominos, and a single domino can cover exactly two 
// squares. Can you use the 31 dominos to cover the 
// entire board? Prove your answer (by providing an 
// example or showing why it's impossible).

No, because the two opposite sqaures make it impossible
to cover the squares in the correct way.
Ex:

S S S S S S S 
S S S S S S S S
S S S S S S S S
S S S S S S S S
S S S S S S S S
S S S S S S S S
S S S S S S S S
  S S S S S S S

            D should go here, but cannot
 D   D   D  
 D   D   D   D 
 D   D   D   D
 D   D   D   D
 D   D   D   D
 D   D   D   D
 D   D   D   D
     D   D   D
  D should go here ish but cannot

As for logic, think of the number of black and white
squares. Removing two opposite sides would make 30
black and 32 white, thus every domino have one black/
one white pattern is broken.