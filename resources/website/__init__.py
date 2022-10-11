from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

db = SQLAlchemy()
DB_NAME = "database.db"
def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SECRET_KEY'] = 'hjshjhdjahkjshkjdhjs'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)

    from website.api.product import product
    from website.api.sale import sale
    from website.api.purchase import purchase
    from website.api.auth import auth
    from website.api.analytics import analytics

    app.register_blueprint(product, url_prefix='/api/')
    app.register_blueprint(sale, url_prefix='/api/')
    app.register_blueprint(purchase, url_prefix='/api/')
    app.register_blueprint(analytics, url_prefix='/api/')
    app.register_blueprint(auth, url_prefix='/')

    create_database(app)

    return app


def create_database(app):
    if not os.path.exists('website/' + DB_NAME):
        db.create_all(app=app)