from .db import db

class Game(db.Model):
    
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    name = db.Column(db.String)
    steam_appid = db.Column(db.Integer)
    required_age = db.Column(db.Integer)
    is_free = db.Column(db.Boolean)
    description = db.Column(db.String)
    price = db.Column(db.Integer)
    release_date = db.Column(db.String)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    users = db.relationship('User', back_populates='games')

    def to_dict(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            "steam_appid": self.steam_appid,
            "required_age": self.required_age,
            "is_free": self.is_free,
            "description": self.description,
            "price": self.price,
            "release_date": self.release_date
        }