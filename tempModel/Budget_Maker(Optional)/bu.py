salary = float(input("Enter your monthly salary: "))

# Explain each budgeting strategy to the user
print("Choose a budgeting strategy:")
print("1. 50/30/20: Needs/Wants/Savings")
print("    - 50% for needs such as rent/mortgage, utilities, groceries, etc.")
print("    - 30% for wants such as dining out, entertainment, shopping, etc.")
print("    - 20% for savings such as emergency fund, retirement, debt repayment, etc.")
print("2. 70/20/10: Living/Debt Reduction/Savings")
print("    - 70% for living expenses such as rent/mortgage, utilities, groceries, etc.")
print("    - 20% for debt reduction such as paying off credit card or student loan debt.")
print("    - 10% for savings such as emergency fund, retirement, etc.")
print("3. 60/20/20: Needs/Savings/Wants")
print("    - 60% for needs such as rent/mortgage, utilities, groceries, etc.")
print("    - 20% for savings such as emergency fund, retirement, debt repayment, etc.")
print("    - 20% for wants such as dining out, entertainment, shopping, etc.")

# Ask the user for their preferred budgeting strategy
strategy = int(input("Enter a number to choose a strategy: "))

# Calculate recommended allocations for different categories based on the chosen strategy
if strategy == 1:
    needs = salary * 0.5
    wants = salary * 0.3
    savings = salary * 0.2
    if salary < 60000:
        print("Recommended for buying a house: 50/30/20")
    else:
        print("Recommended for buying a house: 70/20/10")
elif strategy == 2:
    living = salary * 0.7
    debt_reduction = salary * 0.2
    savings = salary * 0.1
    if salary < 50000:
        print("Recommended for buying a laptop: 70/20/10")
    else:
        print("Recommended for buying a laptop: 50/30/20")
elif strategy == 3:
    needs = salary * 0.6
    savings = salary * 0.2
    wants = salary * 0.2
    if salary < 40000:
        print("Recommended for buying a phone: 60/20/20")
    else:
        print("Recommended for buying a phone: 50/30/20")
else:
    print("Invalid input. Please choose a number from 1 to 3.")

# Print the recommended allocations for different categories
print("Recommended Allocations:")
if strategy == 1:
    print(f"Needs: {needs:.2f}")
    print(f"Wants: {wants:.2f}")
    print(f"Savings: {savings:.2f}")
elif strategy == 2:
    print(f"Living Expenses: {living:.2f}")
    print(f"Debt Reduction: {debt_reduction:.2f}")
    print(f"Savings: {savings:.2f}")
elif strategy == 3:
    print(f"Needs: {needs:.2f}")
    print(f"Savings: {savings:.2f}")
    print(f"Wants: {wants:.2f}")
