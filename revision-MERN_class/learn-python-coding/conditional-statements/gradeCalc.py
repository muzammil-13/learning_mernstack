'''
Task 1:Grade calculator
 
mark >=90 marks 
=80 grade b 
>=70 grade 
c greater than or equal to 60 grade d like
'''

mark=int(input("enter your marks: "))

if mark>=90:
    print("A+ grade")
elif mark>=80:
    print("A grade")
elif mark>=70:
    print("B+ grade")
elif mark>=60:
    print("B grade")
elif mark>=50:
    print("C+ grade")
else:
    print("Better luck next time")