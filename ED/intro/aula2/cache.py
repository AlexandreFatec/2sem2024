from functools import lru_cache #opcao melhor do que armazenar em um dictionario

@lru_cache(maxsize=None)
def fib(n):
    if n == 1 or n == 2: 
        return 1
    else:
        return fib(n-1) + fib(n-2)

print(fib(40))
print(fib(42))
print(fib(10))


