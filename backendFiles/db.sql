-- Table for Bank details
CREATE TABLE Banks (
    BankID INTEGER PRIMARY KEY AUTOINCREMENT,
    BankName TEXT NOT NULL,
    Website TEXT 
);

-- Table for Account Types
CREATE TABLE AccountTypes (
    AccountTypeID INTEGER PRIMARY KEY AUTOINCREMENT,
    BankID INTEGER,
    Type ENUM('Savings', 'Checking', 'Fixed Deposit', 'Business') NOT NULL,
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

-- Table for Interest Rates
CREATE TABLE InterestRates (
    RateID INTEGER PRIMARY KEY AUTOINCREMENT,
    AccountTypeID INTEGER,
    RangeDescription TEXT,
    NominalRate DECIMAL(10, 2),
    EffectiveRate DECIMAL(10, 2),
    FOREIGN KEY (AccountTypeID) REFERENCES AccountTypes(AccountTypeID)
);

-- Table for Users
CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('admin', 'user'))
);

-- Create a View to get user data 
CREATE VIEW UserData AS
SELECT AccountTypes.AccountTypeID AS id, 
       AccountTypes.PackageName AS name, 
       AccountTypes.Type
FROM AccountTypes
WHERE AccountTypes.Type = 'Savings';

-- Insert sample Users
INSERT INTO Users (username, password, role) 
VALUES
    ('admin_user', 'hashed_password_here', 'admin'),
    ('regular_user', 'hashed_password_here', 'user');
