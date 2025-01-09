import sqlite3
import os

from flask import Flask, jsonify, render_template, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


def get_db_connection():
    """
    Creates a connection to the sqlite database
    """
    conn = sqlite3.connect('BankDatabase.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/', methods=['GET'])
def home():
    ''' '''
    return "Home"


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
    return jsonify(banks)


@app.route('/accounts', methods=['GET'])
def get_account_types():
    """
    Gets all account types
    """
    bank_id = request.args.get('bank_id')
    conn = get_db_connection()
    cursor = conn.cursor()

    if bank_id:
        cursor.execute(
            'SELECT * FROM AccountTypes WHERE BankID = ?', (bank_id,))
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
        cursor.execute(
            'SELECT * FROM InterestRates WHERE AccountTypeID = ?', (account_type_id,))
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


@app.route('/compare', methods=['GET'])
def compare_banks():
    conn = get_db_connection()
    cursor = conn.cursor()

    query = ''' SELECT * FROM Banks LEFT JOIN AccountTypes ON Banks.BankID = AccountTypes.BankID  '''
    # joined = ''' SELECT * FROM  InterestRates   WHERE AccountTypeID = ?''' + query
    cursor.execute(query)

    # cursor.execute('SELECT * FROM AccountTypes')

    banks = [dict(row) for row in cursor.fetchall()]
    conn.close()

    # return render_template('com.html', banks=banks)
    return jsonify(banks)


@app.route('/land', methods=['GET'])
def land():
    ''''''
    return render_template('landing_page.html')


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host="0.0.0.0",port=port, debug=True)

