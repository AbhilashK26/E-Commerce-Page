const Content = () => {
  return (
    <main className="Brand container">
      <div className="Brand-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="Brand-button">
          <button>Shop Now</button>
          <button class="secondary-button">Category</button>
        </div>

        <div className="Shopping">
          <p>Also available on</p>
          <div className="secondary-img">
            <img src="./images/flipkart.png" alt="Flipkart-logo" />
            <img src="./images/amazon.png" alt="Amazon-logo" />
          </div>
        </div>
      </div>
      <div className="Brand-image">
        <img src="./images/shoe_image.png" alt="image" />
      </div>
    </main>
  );
};
export default Content;
