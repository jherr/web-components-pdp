import React, { useRef } from 'react';

const styles = `
.buy-tools {
  background: lightgreen;
  padding: 1em;
}
.container {
  background: rgb(189, 247, 171);
  padding: 1em;
}

.btn {
  width: 100%;
  margin: 0.5em;
  padding: 0.5em;
  border-radius: 5px;
}
`;

function App() {
  const rootElement = useRef();
  return (
    <div ref={rootElement}>
      <style dangerouslySetInnerHTML={{__html: styles}}>
      </style>
      <div className="container">
        <h1>
          Select the dog
        </h1>
        <div>
          <button
            className="btn"
            onClick={() => {
              rootElement.current.dispatchEvent(new CustomEvent('selectDog', {
                detail: {
                  description: 'Dog 1',
                  img: 'https://images.dog.ceo/breeds/puggle/IMG_071023.jpg',
                },
                bubbles: true,
                cancelable: true,
                composed: true,
              }));
            }}
          >
            Dog 1
          </button>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              rootElement.current.dispatchEvent(new CustomEvent('selectDog', {
                detail: {
                  description: 'Dog 2',
                  img: 'https://images.dog.ceo/breeds/basenji/n02110806_1826.jpg',
                },
                bubbles: true,
                cancelable: true,
                composed: true,
              }));
            }}
          >
            Dog 2
          </button>
        </div>

        <h1>
          Adopt the dog
        </h1>
        <div>
          <button
            className="btn"
            onClick={() => {
              rootElement.current.dispatchEvent(new CustomEvent('addToCart', {
                bubbles: true,
                cancelable: true,
                composed: true,            
              }));
            }}
          >
            Adopt It!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
