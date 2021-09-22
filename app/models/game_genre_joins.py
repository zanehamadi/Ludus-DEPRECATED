from .db import db

class GameGenreJoin(db.Model):
    __tablename__ = 'game_genre_join'

    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey('games.id'))
    genre_id = db.Column(db.Integer, db.ForeignKey('genres.id'))


    game = db.relationship('Game', back_populates='game_genre_joins')
    genre = db.relationship('Genre', back_populates='game_genre_joins')

    def to_dict(self):
        return{

            "game_id": self.game_id,
            "genre_id": self.genre_id
        }

