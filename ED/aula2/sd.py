def sd(n):
    if n == 0: 
        return 0
    
    else:
        return n % 10 + sd(n // 10)
    
print(sd(123))