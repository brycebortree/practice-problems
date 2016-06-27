x = 1
until x == 101
  puts x if (x % 3 != 0 && x % 5 != 0)
  puts "fizzbuzz" if (x % 15 == 0)
  puts "fizz" if (x % 3 == 0)
  puts "buzz" if (x % 5 == 0)
  x += 1
end