
print("This program calculate bmi of individual\n")
name=input("enter your name")
weight=float(input("enter your weight"))
height=float(input("enter your height"))
bmi=weight/(height**height)
if bmi<35:
  print(f"{name} obese by {bmi} bmi")
 
elif bmi==25:
  print(f"{name} is normal weight by {bmi} bmi")
elif bmi==30:
  print(f"{name} is overweight by {bmi} bmi")

elif bmi==18.5:
 

 print(f"{name} is under weight by {bmi}")
elif bmi==36:
   print(f"{name} is severly obse by {bmi}")
else :
  print(f"{name} is very high by {bmi}")

