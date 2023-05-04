


print("i would like to be a module")
print(__name__)

 # "" module.py - an example of a Python module ""

__counter = 0 # guión bajo para establecer "privacidad"

def suml( the_list ):
   global __counter
   __counter += 1
   the_sum = 0
   for element in the_list:
      the_sum += element
      return the_sum
   
def prodl( the_list ):
   global __counter
   __counter += 1
   prod = 1
   for element in the_list:
      prod *= element
      return prod


if __name__ == "__main__":
    print("Prefiero ser módulo, pero puedo hacer algunas pruebas para usted.")
    my_list = [ i+1 for i in range(5)]
    print( suml( my_list ) == 15 )
    print( prodl(my_list) == 120 )


   

