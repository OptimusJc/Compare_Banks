-- Table for bank details
CREATE TABLE Banks (
    BankID INTEGER PRIMARY KEY AUTOINCREMENT,
    BankName TEXT NOT NULL,
    Website TEXT
);

-- Table for account types
CREATE TABLE AccountTypes (
    AccountTypeID INTEGER PRIMARY KEY AUTOINCREMENT,
    BankID INTEGER,
    Type TEXT NOT NULL CHECK (Type IN ('Savings', 'Checking', 'Fixed Deposit', 'Business')),
    PackageName TEXT,
    MinimumBalance DECIMAL(10, 2),
    MonthlyFee DECIMAL(10, 2),
    WithdrawalFee TEXT,
    CashDepositFee TEXT,
    OnlineTransactionalFee DECIMAL(10, 2),
    SMSNotificationFee DECIMAL(10, 2),
    InternalDebitOrderFee DECIMAL(10, 2),
    ExternalDebitOrderFee DECIMAL(10, 2),
    FOREIGN KEY (BankID) REFERENCES Banks(BankID)
);

-- Table for interest rates
CREATE TABLE InterestRates (
    RateID INTEGER PRIMARY KEY AUTOINCREMENT,
    AccountTypeID INTEGER,
    RangeDescription TEXT,
    NominalRate DECIMAL(10, 2),
    EffectiveRate DECIMAL(10, 2),
    FOREIGN KEY (AccountTypeID) REFERENCES AccountTypes(AccountTypeID)
);
