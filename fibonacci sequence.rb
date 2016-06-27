#write a function that returns the fibonacci sequence up to a given number

#my broken way
def fib num
  #create method that counts through fib up to that number
  i = 0
  j = 0
  until j[i] > num do
  i += 1
    #create method for fibonacci sequence
    until j > num do
      puts j[i] + j[i+1]
      j += 1
    end
  end
end

fib 13

#Josh's way
def fibonacci num
  if num == 0
    return undefined
  end
  if num == 1
    return 0
  end

  arr = [0,1]
  index = 2

  until index == num
    arr << (arr[index - 1] + arr[index - 2])
    index += 1
  end

  return arr
end

print fibonacci 10

#Jacob and Nat's way
def fib2(n)
  a = 0 
  b = 1
  t = 1
  puts a
  for i in (0...n-1) do
    puts t
    t = a+b
    a=b
    b=t
  end 
end


puts fib2(0)