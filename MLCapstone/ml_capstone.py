import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
import matplotlib.pyplot as plt

url="https://raw.githubusercontent.com/mwaskom/seaborn-data/master/winequality-red.csv"
df=pd.read_csv(url)
X=df.drop("quality",axis=1)
y=(df["quality"]>=6).astype(int)
Xtr,Xte,ytr,yte=train_test_split(X,y,test_size=0.2,random_state=42)
model=RandomForestClassifier(n_estimators=120,random_state=42).fit(Xtr,ytr)
pred=model.predict(Xte)
print(classification_report(yte,pred))
imp=pd.Series(model.feature_importances_,index=X.columns).sort_values(ascending=False)
ax=imp.plot(kind="bar",title="Feature Importances"); plt.tight_layout(); plt.savefig("feature_importances.png"); print("✅ Saved feature_importances.png")
