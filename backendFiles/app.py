from flask import Flask, jsonify, request
import sqlite3

app = Flask(__name__)


def get_db_connection():
    """
    Creates a connection to the sqlite database
    """
    conn = sqlite3.connect('BankDatabase.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/api/banks', methods=['GET'])
def get_banks():
    """
    Gets all banks from that banks table
    """
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM Banks')
    banks = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return jsonify(banks)


@app.route('/api/accounts', methods=['GET'])
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


@app.route('/api/interest_rates', methods=['GET'])
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


@app.route('/api/banks/<int:bank_id>', methods=['GET'])
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


if __name__ == "__main__":
    app.run(debug=True)