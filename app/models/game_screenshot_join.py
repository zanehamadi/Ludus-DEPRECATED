from app.models import screenshot
from .db import db

class GameScreenshotJoin(db.Model):
    __tablename__ = 'game_screenshot_join'

    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey('games.id'))
    screenshot_id = db.Column(db.Integer, db.ForeignKey('screenshots.id'))


    game = db.relationship('Game', back_populates='game_screenshot_joins')
    screenshot = db.relationship('Screenshot', back_populates='game_screenshot_joins')

    def to_dict(self):
        return {

            "game_id": self.game_id,
            "screenshot_id": self.screenshot_id
        }

