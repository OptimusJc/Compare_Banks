import sqlite3

# Connect to SQLite database (it will create the file if it doesn't exist)
conn = sqlite3.connect('BankDatabase.db')
cursor = conn.cursor()

# Create the Banks table
cursor.execute('''
CREATE TABLE IF NOT EXISTS Banks (
    BankID INTEGER PRIMARY KEY AUTOINCREMENT,
    BankName TEXT NOT NULL,
    Website TEXT NOT NULL
)
''')

# Create the AccountTypes table
cursor.execute('''
CREATE TABLE IF NOT EXISTS AccountTypes (
    AccountTypeID INTEGER PRIMARY KEY AUTOINCREMENT,
    BankID INTEGER,
    Type TEXT NOT NULL,
    PackageName TEXT NOT NULL,
    MinimumBalance REAL,
    MonthlyFee REAL,
    WithdrawalFee TEXT,
    CashDepositFee TEXT,
    OnlineTransactionalFee REAL,
    SMSNotificationFee REAL,
    InternalDebitOrderFee REAL,
    ExternalDebitOrderFee REAL,
    FOREIGN KEY (BankID) REFERENCES Banks(BankID)
)
''')

# Create the InterestRates table
cursor.execute('''
CREATE TABLE IF NOT EXISTS InterestRates (
    InterestRateID INTEGER PRIMARY KEY AUTOINCREMENT,
    AccountTypeID INTEGER,
    RangeDescription TEXT NOT NULL,
    NominalRate REAL NOT NULL,
    EffectiveRate REAL NOT NULL,
    FOREIGN KEY (AccountTypeID) 
        REFERENCES AccountTypes(AccountTypeID)
)
''')

# Insert data into the Banks table
cursor.executemany('''
INSERT INTO Banks (BankName, Website) 
VALUES (?, ?)
''', [
    ('FNB', 'https://www.fnb.co.za/'),
    ('absa', 'https://www.absa.co.za/')
])

# Insert data into the AccountTypes table
cursor.executemany('''
INSERT INTO AccountTypes (BankID, Type, PackageName, MinimumBalance, 
                          MonthlyFee, WithdrawalFee, CashDepositFee, 
                          OnlineTransactionalFee, SMSNotificationFee, 
                          InternalDebitOrderFee, ExternalDebitOrderFee)
VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
''', [
    # FNB cheque account
    (1, 'cheque', 'FNB Easy PAYU', 1, 6.5, '10 per 1000-2000 after 14 per 100', 
     '1.60 per 100', 1, 1.25, 0, 3.5),
    # FNB savings account
    (1, 'savings', 'savings account', 1, None, None, None, None, None, None, None),
    # ABSA cheque account
    (2, 'cheque', 'Transact', 20, 6.5, '10 per 1000', '2.50 per 100', 1, 0.6, 0, 3.5),
    # ABSA savings account
    (2, 'savings', 'Trusave savings account', None, None, None, None, None, None, None)
])

# Insert data into the InterestRates table
cursor.executemany('''
INSERT INTO InterestRates (AccountTypeID, RangeDescription, NominalRate, 
                           EffectiveRate)
VALUES (?, ?, ?, ?)
''', [
    # FNB cheque interest rates
    (1, 'R1 - R7,000', 5.04, 5.16),
    (1, 'R7001+', 0.00, 0.00),
    # FNB savings interest rates
    (2, 'R1 - R19,999', 6.55, 6.75),
    (2, 'R20,000 - R49,999', 6.95, 7.18),
    (2, 'R50,000 - R99,999', 7.1, 7.34),
    (2, 'R100,000 - R50,000,000+', 7.25, 7.5),
    # ABSA cheque interest rates
    (3, 'R1,000 to R100,000', 6.20, 6.30),
    (3, 'R100,001 to R999,999', 6.30, 6.30),
    (3, 'R1,000,000 +', 6.30, 6.30),
    # ABSA savings interest rates for various terms
    (4, '8 - to 31 days', 6.20, 6.30),
    (4, '1 month', 7.15, 7.25),
    (4, '2 months', 7.15, 7.25),
    (4, '3 months', 7.30, 7.40),
    (4, '4 months', 7.30, 7.40),
    (4, '60 months', 8.40, 8.45)
])

# Commit the transaction
conn.commit()

# Close the connection
conn.close()

print("Data has been inserted into the SQLite database.")
