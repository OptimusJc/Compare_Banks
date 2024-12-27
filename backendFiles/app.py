from flask import Flask, jsonify, request, render_template
import sqlite3

app = Flask(__name__)


def get_db_connection():
    """
    Creates a connection to the sqlite database
    """
    conn = sqlite3.connect('BankDatabase.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/banks', methods=['GET'])
def get_banks():
    """
    Gets all banks from that banks table
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM Banks')
    banks = [dict(row) for row in cursor.fetchall()]
    conn.close()
    # return jsonify(banks)
    return render_template('banks.html', banks=banks)


@app.route('/accounts', methods=['GET'])
def get_account_types():
    """
    Gets all account types
    """
    bank_id = request.args.get('bank_id')
    conn = get_db_connection()
    cursor = conn.cursor()

    if bank_id:
        cursor.execute('SELECT * FROM AccountTypes WHERE BankID = ?', (bank_id,))
    else:
        cursor.execute('SELECT * FROM AccountTypes')

    account_types = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return jsonify(account_types)

@app.route('/interest_rates', methods=['GET'])
def get_interest_rates():
    '''
    Gets all interest rates
    '''
    account_type_id = request.args.get('account_type_id')
    conn = get_db_connection()
    cursor = conn.cursor()

    if account_type_id:
        cursor.execute('SELECT * FROM InterestRates WHERE AccountTypeID = ?', (account_type_id,))
    else:
        cursor.execute('SELECT * FROM InterestRates')

    interest_rates = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return jsonify(interest_rates)


@app.route('/banks/<int:bank_id>', methods=['GET'])
def get_bank_details(bank_id):
    '''
    gets bank details
    '''
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM Banks WHERE BankID = ?', (bank_id,))
    bank = cursor.fetchone()

    if not bank:
        conn.close()
        return jsonify({'error': 'Bank not found'}), 404

    # get account type
    cursor.execute('SELECT * FROM AccountTypes WHERE BankID = ?', (bank_id,))
    account_types = [dict(row) for row in cursor.fetchall()]

    conn.close()

    bank_details = dict(bank)
    bank_details['account_types'] = account_types

    return jsonify(bank_details)
#    return render_template('bank_details.html',
#                           bank=dict(bank),
#                           account_types=account_types)


@app.route('/compare_banks', methods=['GET'])
def compare_banks():
    conn = get_db_connection()
    cursor = conn.cursor()

    query = ''' SELECT * FROM Banks LEFT JOIN AccountTypes ON Banks.BankID = AccountTypes.BankID  '''
    cursor.execute(query)

    #cursor.execute('SELECT * FROM AccountTypes')
    
    banks = [dict(row) for row in cursor.fetchall()]
    conn.close()
    #return render_template('compare.html',
    #                       banks=banks)
    return jsonify(banks)

""""
@app.route('/compare', methods=['GET'])
def compare_banks():
    '''
    '''
    conn = get_db_connection()
    cursor = conn.cursor()

    query_checking = '''
    SELECT b.BankName, b.Website, a.Type, a.PackageName, a.MinimumBalance, 
        a.MonthlyFee, a.WithdrawalFee, a.CashDepositFee, a.OnlineTransactionalFee
    FROM Banks b
    JOIN AccountTypes a ON b.BankID = a.BankID
    WHERE a.Type = 'cheque'
    '''

    cursor.execute(query_checking)
    checking_account = [dict(row) for row in cursor.fetchall()]

    query_savings = '''
    SELECT b.BankName, b.Website, a.Type, a.PackageName, a.MinimumBalance, 
           a.MonthlyFee, a.WithdrawalFee, a.CashDepositFee, a.OnlineTransactionalFee
    FROM Banks b
    JOIN AccountTypes a ON b.BankID = a.BankID
    WHERE a.Type = 'savings'
    '''
    cursor.execute(query_savings)
    savings_account = [dict(row) for row in cursor.fetchall()]

    conn.close()

    return render_template('compare.html',
                           checking_account=checking_account,
                           savings_account=savings_account)
"""

if __name__ == "__main__":
    app.run(debug=True)