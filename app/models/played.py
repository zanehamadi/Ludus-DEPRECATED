from .db import db

class Played(db.Model):
    __tablename__ = 'played'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    game_id = db.Column(db.Integer, db.ForeignKey('games.id'))

    user = db.relationship('User', back_populates='played')
    game = db.relationship('Game', back_populates='played')

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "game_id": self.game_id
        }
