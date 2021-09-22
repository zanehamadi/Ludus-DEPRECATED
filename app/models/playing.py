from .db import db

class Playing(db.Model):
    __tablename__ = 'playing'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    game_id = db.Column(db.Integer, db.ForeignKey('games.id'))

    user = db.relationship('User', back_populates='playing')
    game = db.relationship('Game', back_populates='playing')

    def to_dict(self):
        return {
            "user_id": self.user_id,
            "game_id": self.game_id
        }
