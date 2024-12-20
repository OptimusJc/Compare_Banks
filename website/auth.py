from flask import Flask, Blueprint

auth = Blueprint('auth', __name__)


@auth.route('/sign_up', methods=['GET'])
def sign_up():
    return "Sign Up"

@auth.route('/login', methods=['GET'])
def login():
    return "login"

@auth.route('/logout', methods=['GET'])
def logout():
    return "logout"
