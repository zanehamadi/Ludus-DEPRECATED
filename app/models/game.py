from .db import db

class Game(db.Model):
    
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    steam_appid = db.Column(db.Integer)
    required_age = db.Column(db.Integer)
    is_free = db.Column(db.Boolean)
    description = db.Column(db.String)
    price = db.Column(db.Integer)
    release_date = db.Column(db.String)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    want_to_play = db.relationship('Want_To_Play', back_populates='game')


    def to_dict(self):
        return{
            "id": self.id,
            "name": self.name,
            "steam_appid": self.steam_appid,
            "required_age": self.required_age,
            "is_free": self.is_free,
            "description": self.description,
            "price": self.price,
            "release_date": self.release_date
        }