#the function needs a total as dictionary/json object
#and a share dictionary/json object for share of the person in the bussiness
#

import sys


def calculate(EachSpendingsTotal, share):
    n= len(EachSpendingsTotal)
    totalSpendings=0
    for money in EachSpendingsTotal.values():
        totalSpendings=totalSpendings+money

    MoneyToBeSpent={}

    for user in EachSpendingsTotal.keys():
        MoneyToBeSpent[user]= (share[user]/100)*totalSpendings
    
    # print(MoneyToBeSpent)
    # print(totalSpendings)


    money=RelativeSpendings(EachSpendingsTotal, MoneyToBeSpent)
    return money
    
def RelativeSpendings(EachSpendingsTotal, MoneyToBeSpent):
    MoneyAtTheEnd={}
    for user in EachSpendingsTotal:
        MoneyAtTheEnd[user]=MoneyToBeSpent[user] - EachSpendingsTotal[user]
    # print(MoneyAtTheEnd)
    return MoneyAtTheEnd


def whoOwesWho(Money):
    pass





EachSpendingsTotal= {
    'a': 5000,
    'b': 8000,
    'c': 9000,
    'd': 4000,
    'e': 8000

}

share={
     'a': 20,
    'b': 20,
    'c': 20,
    'd': 20,
    'e': 20
    }
    


Money=calculate(EachSpendingsTotal,share)
print(Money)
whoOwesWho(Money)
