from operator import pos
from flask import Blueprint
from app.models import db, Game

game_routes = Blueprint('games', __name__)



@game_routes.route('/')

def games():

    games = game.query.all()

    return {game.id: game.to_dict() for game in games}


@game_routes.route('/<int:game_id>')
# @login_required
def game(game_id):
    game = Game.query.get(game_id)
    return game.to_dict()


