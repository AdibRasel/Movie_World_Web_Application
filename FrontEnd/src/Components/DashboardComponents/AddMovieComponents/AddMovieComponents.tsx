import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddMovieComponents = () => {
  const EmbedCodeRef = useRef();

  const [EmbedCode, SetEmbedCode] = useState("");

  const HandleEmbedCode = () => {
    const EmbedCodeValue = EmbedCodeRef.current.value;
    SetEmbedCode(EmbedCodeValue);
  };

  // image preview code start
  const [image, setImage] = useState(null);

  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the base64 image data in state
        // setBase64Image(reader.result);
        // Store the selected image file
        // setSelectedImage(file);
      };

      reader.onload = (event) => {
        setImage(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  // image preview code end

  return (
    <>
      <div style={{ paddingTop: "60px", paddingBottom: "10px" }}>
        <div className="bg-primary">
          <div className="container">
            <span style={{ color: "white", fontWeight: "bold", textAlign: "left", fontSize: "25px" }}>Add Movie</span>
          </div>
        </div>

        <div className="container">
          <div className="row py-3">
            <div className="col-md-4" style={{ border: "1px solid #333", padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px #333" }}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className='bold'>Select Movie Type</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="Hollywood">Hollywood Movie</option>
                    <option value="Bollywood">Bollywood Movies</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className='bold'>Movie Name</Form.Label>
                  <Form.Control type="text" placeholder="Movie Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className='bold'>Movie Description</Form.Label>
                  <Form.Control type="text" placeholder="Movie Description" />
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label className='bold'>Movie Image</Form.Label>
                  <Form.Control type="file" onChange={handleImageInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className='bold'>Movie- Youtube Embed Code</Form.Label>
                  <Form.Control ref={EmbedCodeRef} onChange={HandleEmbedCode} type="text" placeholder="Movie- Youtube Embed Code" />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" size="md">
                    Block level button
                  </Button>
                </div>
              </Form>
            </div>
            <div className="col-md-4" style={{ border: "1px solid #333", padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px #333" }}>
              <img className='img-fluid' src={image} alt="" />
            </div>
            <div className="col-md-4" style={{ border: "1px solid #333", padding: "10px", borderRadius: "10px", boxShadow: "0px 0px 10px #333" }}>
              <iframe
                width="100%"
                height="60%"
                src={`https://www.youtube.com/embed/${EmbedCode}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMovieComponents;
