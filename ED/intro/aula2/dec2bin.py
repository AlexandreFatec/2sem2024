def dec2bin(n):
    
    if n == 0:
        return "0"
    
    elif n == 1:
        return "1"

    else:
        return dec2bin(n // 2) + str(n % 2)

print(dec2bin(18))