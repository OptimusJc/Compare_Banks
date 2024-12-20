from flask import Blueprint

views = Blueprint('views', __name__)


@views.route('/', methods=['GET'])
def home():
    return "<h1> HEllo </h1>"


@views.route('/about', methods=['GET'])
def about():
    return "About"

