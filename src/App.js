function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Store for the best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>12,28 €</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/profile.svg" alt="profile" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
        <h1>All Sneakers</h1>
        <div className="search-block d-flex ">
          <img src="/img/search.svg" alt="Search"/>
          <input placeholder="Search item ..."/>

        </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers-1.jpg"
              alt="Sneakers"
            />
            <h5>Men's Nike Blazer Mid Suede Sneakers </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>132,47 €</b>
              </div>
              <button className="button">
                <img
                  className="plus"
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers-2.jpg"
              alt="Sneakers"
            />
            <h5>Men's Nike Air Max Sneakers </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>122,67 €</b>
              </div>
              <button className="button">
                <img
                  className="plus"
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers-3.jpg"
              alt="Sneakers"
            />
            <h5>Men's Nike Blazer Mid Suede White Sneakers </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>132,47 €</b>
              </div>
              <button className="button">
                <img
                  className="plus"
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers-4.jpg"
              alt="Sneakers"
            />
            <h5>Men's Puma X Aka Boku Future Rider Sneakers </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>89,99 €</b>
              </div>
              <button className="button">
                <img
                  className="plus"
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
