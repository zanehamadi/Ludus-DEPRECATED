from .db import db

class Screenshot(db.Model):

    __tablename__ = 'screenshots'

    id = db.Column(db.Integer, primary_key=True)
    screenshot = db.Column(db.String)


    game_screenshot_joins = db.relationship('GameScreenshotJoin', back_populates='screenshot')


    def to_dict(self):
        return {

            "id": self.id,
            "screenshot": self.screenshot
            
        }

    