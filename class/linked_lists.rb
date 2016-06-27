class Node
  attr_accessor :data, :next

  def initialize data
    @data = data
    @next = nil
  end

  def to_s
    output = @data.to_s
    if @next != nil
    end
    output += ' > ' + @next.to_s unless @next.nil?
    output
  end
end


class LinkedList
  attr_accessor :head, :tail

  def initialize
    @head = nil
    @tail = nil
  end

  def insert_front data
    temp = @head
    @head = Node.new(data)
    @head.next = temp
    @tail = @head if @tail.nil?
  end

  def insert_end data
    temp = @tail
    @tail = Node.new(data)
    temp.next = @tail unless temp.nil?
    @head = @tail if @head.nil?
  end

  def to_s
    @head.to_s
  end
end




# # p1 Add a node in the second place

# p1list = LinkedList.new
# p1list.insert_end n0
# p1list.insert_end n1
# p1list.insert_end n2

# puts p1list

# after = p4list.head.next 
# p4list.head.next = n1
# n1.next = after

# puts p1list






# p2 Add a node to the end

# p2list = LinkedList.new
# p2list.insert_end 1
# p2list.insert_end 1
# p2list.insert_end 2
# p2list.insert_end 3
# p2list.insert_end 4
# p2list.insert_end 5
# p2list.insert_end 6

# p2list.insert_end 7
# puts p2list






#p3 Add a node second to the end

# p3list = LinkedList.new
# p3list.insert_end 1
# p3list.insert_end 2
# p3list.insert_end 3
# p3list.insert_end 4
# p3list.insert_end 5
# p3list.insert_end 6
# p3list.insert_end 8

# puts p3list.to_s

# current = p3list.head

# while current.next.next != nil
#   current = current.next
# end

# penult = Node.new 7
# penult.next = current.next
# current.next = penult

# puts p3list






# p4 Delete the first node from the list

# p4list = LinkedList.new
# p4list.insert_end 1
# p4list.insert_end 2
# p4list.insert_end 3

# puts p4list
# p4list.head = p4list.head.next
# puts p4list





# # p5 Delete everything from the list.

# p5list = LinkedList.new
# p5list.insert_end 34
# p5list.insert_end 45
# p5list.insert_end 78

# puts p5list
# p5list.head = nil
# puts p5list





# p6 Manually stutter an existing list (make each item appear twice)

# p6list = LinkedList.new
# p6list.insert_end 23
# p6list.insert_end 17
# p6list.insert_end 8

puts p6list

s1 = Node.new 23
s2 = Node.new 17
s3 = Node.new 8



puts p6list

# DIDN'T GET



#p7 Manually reverse an existing linked list
# p7list = LinkedList.new
# p7list.insert_end 3
# p7list.insert_end 4
# p7list.insert_end 5
# p7list.insert_end 6

# puts p7list



# puts p7list