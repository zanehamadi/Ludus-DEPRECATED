from .db import db

class Genre(db.Model):
    __tablename__ = 'genres'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)


    game_genre_joins = db.relationship('GameGenreJoin', back_populates='genre')


    def to_dict(self):
        return {

            "id": self.id,
            "name": self.name
            
        }

    