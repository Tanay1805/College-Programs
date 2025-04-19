from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.image import Image as KivyImage
from kivy.graphics.texture import Texture
from io import BytesIO
import matplotlib.pyplot as plt
import pandas as pd
from PIL import Image as PILImage

# Your processed yearly data
yearly_trends = {
    'Year': [1997, 1998, 1999, 2000, 2001],
    'Price': [2.489839, 2.088367, 2.274120, 4.311486, 3.959120]
}

# Convert to DataFrame
yearly_df = pd.DataFrame(yearly_trends)

class NaturalGasTrendApp(App):
    def build(self):
        layout = BoxLayout(orientation='vertical')

        # Create the plot
        fig, ax = plt.subplots(figsize=(10, 6))  # Adjust the size here
        ax.plot(yearly_df['Year'], yearly_df['Price'], marker='o', linestyle='-')
        ax.set_title('Yearly Natural Gas Price Trends')
        ax.set_xlabel('Year')
        ax.set_ylabel('Average Price')

        # Save the plot to a BytesIO object
        buf = BytesIO()
        plt.savefig(buf, format='png', bbox_inches='tight')  # bbox_inches='tight' to remove extra whitespace
        buf.seek(0)

        # Convert the BytesIO object to a PIL Image
        image = PILImage.open(buf)

        # Flip the image vertically
        image = image.transpose(PILImage.FLIP_TOP_BOTTOM)

        # Convert the PIL Image to a Kivy Texture
        texture = self.pil_image_to_texture(image)

        # Create a Kivy Image widget and set the texture
        kivy_image = KivyImage()
        kivy_image.texture = texture

        # Add the Kivy Image widget to the layout
        layout.add_widget(kivy_image)

        return layout

    def pil_image_to_texture(self, pil_image):
        # Convert PIL Image to a Kivy Texture
        pil_image = pil_image.convert('RGB')
        data = pil_image.tobytes()
        texture = Texture.create(size=pil_image.size, colorfmt='rgb')
        texture.blit_buffer(data, colorfmt='rgb', bufferfmt='ubyte')
        return texture

if __name__ == '__main__':
    NaturalGasTrendApp().run()
