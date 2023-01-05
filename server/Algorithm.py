#the function needs a total as dictionary/json object
#and a share dictionary/json object for share of the person in the bussiness
#

import sys


def calculate(EachSpendingsTotal, share):
    
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

def getMin(arr):
    
    minInd= list(arr().keys)[0]
    for i in arr:
        if (arr[i] < arr[minInd]):
            minInd = i
    return minInd


def getMax(arr):
    
    maxInd = list(arr().keys)[0]
    
    for i in arr:
        if (arr[i] > arr[maxInd]):
           maxInd = i
    return maxInd

def minOf2(x, y):

    return x if x < y else y

def whoOwesWho(Money):
    
    
    mxCredit = getMax(Money)
    mxDebit = getMin(Money)
    print(mxCredit)
    print(mxDebit)

    





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
