from forex_python.converter import CurrencyRates

def convert_currency(amount, from_currency, to_currency):
    c = CurrencyRates()
    rate = c.get_rate(from_currency, to_currency)
    converted_amount = amount * rate
    return converted_amount

# take input from user
amount = float(input("Enter amount: "))
from_currency = input("Enter from currency code (e.g. USD): ")
to_currency = input("Enter to currency code (e.g. EUR): ")

converted_amount = convert_currency(amount, from_currency, to_currency)
print(f"{amount} {from_currency} is equivalent to {converted_amount:.2f} {to_currency}")
