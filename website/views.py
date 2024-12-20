from flask import Blueprint, render_template

views = Blueprint('views', __name__)


@views.route('/', methods=['GET'])
def home():
    return render_template("home.html")


@views.route('/about', methods=['GET'])
def about():
    return "About"

