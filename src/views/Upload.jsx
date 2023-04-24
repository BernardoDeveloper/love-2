import { useState } from 'react';
import axios from 'axios';

function Upload() {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post(
        'https://api.imgur.com/3/image',
        formData,
        {
          headers: {
            Authorization: 'Client-ID c3aaf1e227e3594',
          },
        }
      );

      const imageUrl = response.data.data.link;

      // create album to save
      const albumResponse = await axios.post(
        'https://api.imgur.com/3/album',
        {
          title: 'casal',
          description: 'love images',
          privacy: 'hidden',
        },
        {
          headers: {
            Authorization: 'Client-ID c3aaf1e227e3594',
          },
        }
      );

      const albumId = albumResponse.data.data.id;

      // add image to album
      await axios.post(
        'https://api.imgur.com/3/album/${albumId}/add',
        {
          ids: [response.data.data.id],
        },
        {
          headers: {
            Authorization: 'Client-ID c3aaf1e227e3594',
          },
        }
      );

      console.log('upload image by url: ', imageUrl);
    } catch (err) {
      console.error('Error uploading image: ', err);
    }
  };

  return (
    <form onSubmit={handleImageUpload}>
      <input
        type="file"
        accept="image/*"
        onChange={(event) => setImage(event.target.files[0])}
      />
      <button type="submit">Upload</button>
    </form>
  );
}

export { Upload };
