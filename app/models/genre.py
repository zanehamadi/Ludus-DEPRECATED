from .db import db

class Genre(db.Model):
    __tablename__ = 'genres'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)




    def to_dict(self):
        return {

            "id": self.id,
            "name": self.name
            
        }

    