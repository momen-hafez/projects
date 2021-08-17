# This file is for cleaning data for AI project
import pandas as pd
import numpy as np
import arabic_reshaper
import sys
try:
    # Fix UTF8 output issues on Windows console.
    # Does nothing if package is not installed
    from win_unicode_console import enable
    enable()
except ImportError:
    pass
print("مرحبا")
print(pd)
df = pd.read_csv('C:/Users/THINK/Desktop/desctop/shellproj/MachineLearningProject/TrainDataAuthorAttribution.csv')
df.head()
df.drop_duplicates(subset = 'Column1',keep=False,inplace=True)
matching = [s for s in df if "#" in s]
df.set_index(keys=['Column2'],drop=False,inplace=True)
authors = df['Column2'].unique().tolist()
for auth in authors:
    df[df['Column1'].str.contains(auth)]

subsets = []
for i in range(2,len(authors)+2,2):
    tempset1=[]
    tempset2=[]
    tempset1 = df.loc[df.Column2==authors[i-2]]
    if(i-1 != len(authors)):
        tempset2=df.loc[df.Column2 ==authors[i-1]]
    subsets.append(tempset1.append(tempset2))
for i in range(len(subsets)):
   subsets[i].to_csv('C:/Users/THINK/Desktop/desctop/shellproj/MachineLearningProject/two_Auth_%d.csv'%(i),index = False, header = False)


subsets4 = []
for i in range(4,len(authors)+4,4):
    tempset1=[]
    tempset2=[]
    tempset3=[]
    tempset4=[]
    if(i - 4 < len(authors)):
        tempset1 = df.loc[df.Column2==authors[i-4]]
    if(i - 3 < len(authors)):
        tempset2 = df.loc[df.Column2==authors[i-3]]
    if(i - 2 < len(authors)):
        tempset3 = df.loc[df.Column2==authors[i-2]]
    if(i-3 != len(authors)):
        tempset4=df.loc[df.Column2 ==authors[i-1]]
    subsets4.append(tempset1.append(tempset2.append(tempset3.append(tempset4))))
for i in range(len(subsets4)):
   subsets4[i].to_csv('C:/Users/THINK/Desktop/desctop/shellproj/MachineLearningProject/four_Auth_%d.csv'%(i),index = False, header = False)

subsets6 = []
for i in range(6,len(authors)+6,6):
    tempset1=[]
    tempset2=[]
    tempset3=[]
    tempset4=[]
    tempset5=[]
    tempset6=[]
    if(i - 6 < len(authors)):
        tempset1 = df.loc[df.Column2==authors[i-6]]
    if(i - 5 < len(authors)):
        tempset2 = df.loc[df.Column2==authors[i-5]]
    if(i - 4 < len(authors)):
        tempset3 = df.loc[df.Column2==authors[i-4]]
    if(i - 3 < len(authors)):
        tempset4 = df.loc[df.Column2==authors[i-3]]
    if(i - 2 < len(authors)):
        tempset5 = df.loc[df.Column2==authors[i-2]]
    if(i - 5  != len(authors) and i - 1 < len(authors)):
        tempset6 = df.loc[df.Column2 ==authors[i-1]]
    subsets6.append(tempset1.append(tempset2.append(tempset3.append(tempset4.append(tempset5.append(tempset6))))))
for i in range(len(subsets6)):
    subsets6[i].to_csv('C:/Users/THINK/Desktop/desctop/shellproj/MachineLearningProject/Sixth_Auth_%d.csv'%(i),index = False, header = False)



subsets10 = []
for i in range(10,len(authors)+10,10):
    tempset1=[]
    tempset2=[]
    tempset3=[]
    tempset4=[]
    tempset5=[]
    tempset6=[]
    tempset7=[]
    tempset8=[]
    tempset9=[]
    tempset10=[]
    if(i - 10 < len(authors)):
        tempset1 = df.loc[df.Column2==authors[i-10]]
    if(i - 9 < len(authors)):
        tempset2 = df.loc[df.Column2==authors[i-9]]
    if(i - 8 < len(authors)):
        tempset3 = df.loc[df.Column2==authors[i-8]]
    if(i - 7 < len(authors)):
        tempset4 = df.loc[df.Column2==authors[i-7]]
    if(i - 6 < len(authors)):
        tempset5 = df.loc[df.Column2==authors[i-6]]
    if(i - 5 < len(authors)):
        tempset6 = df.loc[df.Column2==authors[i-5]]
    if(i - 4 < len(authors)):
        tempset7 = df.loc[df.Column2==authors[i-4]]
    if(i - 3 < len(authors)):
        tempset8 = df.loc[df.Column2==authors[i-3]]
    if(i - 2 < len(authors)):
        tempset9 = df.loc[df.Column2==authors[i-2]]
    if(i - 9  != len(authors) and i - 1 < len(authors)):
        tempset10 = df.loc[df.Column2 ==authors[i-1]]
    subsets10.append(tempset1.append(tempset2.append(tempset3.append(tempset4.append(tempset5.append(tempset6.append(tempset7.append(tempset8.append(tempset9.append(tempset10))))))))))
for i in range(len(subsets10)):
    subsets10[i].to_csv('C:/Users/THINK/Desktop/desctop/shellproj/MachineLearningProject/Tenth_Auth_%d.csv'%(i),index = False, header = False)
