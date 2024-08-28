def inv(s):
    if s == "": 
        return ""
    
    else:
        return inv(s[1:]) + s[0]
    
print(inv("abacate"))