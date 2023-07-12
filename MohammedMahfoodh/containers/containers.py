# Exercise 1

students = ["Bob", "Mikel", "kevin", "Angelina", "Sara", "Mike"]
print(students[1])
print(students[-1])


# Exercise 2

foods = ("pizza", "pasta", "burger", "hotdog", "sushi", "Chinese food")
for food in foods:
    print(f"{food} is a good food")
    
# Exercise 3

for food in foods[-2:]:
    print(food)

# Exercise 4

home_town = {
    "city": "Bahrain",
    "state": "Hamad Town",
    "population": "100,000 people"
}

print(f"I was born in {home_town['city']}, {home_town['state']} - population of {home_town['population']}")

# Exercise 5

for key, value in home_town.items():
    print(f"{key} = {value}") 

# Exercise 6

cohort = []
for student in students:
    cohort.append({"student": student, "fav_food": "Cheeseburger"})
print(cohort)


# Exercise 7

awesome_students = [f"{student} is awesome!" for student in students]
print(awesome_students)

# Exercise 8

for food in foods:
    if "a" in food:
        print(food)



