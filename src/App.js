import Product from "./Product";
import Service from "./Service";
import ShopNowText from "./ShopNowText";

function App() {
  return (
    <div>
      {/* Social Bar */}
      <div className="bg-yellow-400 ">
        {/* Inner container */}
        <div className="with-max-width h-10 justify-between items-center">
          <div className="flex gap-2">
            <i className="fa hover:text-white transition fa-twitter" />
            <i className="fa hover:text-white transition fa-facebook" />
            <i className="fa hover:text-white transition fa-pinterest" />
            <i className="fa hover:text-white transition fa-instagram" />
            <i className="fa hover:text-white transition fa-linkedin" />
            <i className="fa hover:text-white transition fa-rss" />
          </div>

          <div className="text-leading">
            Free delivery over $100 on all products
          </div>
        </div>
      </div>

      {/* Header */}
      <header>
        {/* Inner container */}
        <div className="with-max-width justify-between items-center h-16">
          <img
            className="h-9"
            src="https://pet.oceanwp.org/wp-content/uploads/2021/02/plogo.png"
            alt="Pet"
          />
          <nav className="flex gap-4 items-center">
            <a className="nav-link" href="/">
              HOMEPAGE
            </a>
            <a className="nav-link" href="/">
              SHOP
            </a>
            <a className="nav-link" href="/">
              BLOG
            </a>
            <a className="nav-link" href="/">
              CONTACT
            </a>
            <a className="nav-link" href="/">
              MY ACCOUNT
            </a>
            <a>
              <i className="fa fas fa-shopping-basket"></i>
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero-background bg-cover bg-center bg-no-repeat hero-height flex items-center">
          {/* Hero content */}
          <div className="with-max-width flex-col items-start">
            <h1 className="text-hero">
              Hi There!
              <br /> Do you want buy me a toy?
            </h1>

            <p className="text-leading mt-4" style={{ width: 486 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <button className="bg-yellow-400 rounded-full px-6 py-2 text-link tracking-wider mt-6 hover:bg-yellow-600 transition shadow-lg">
              SHOP NOW
            </button>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="with-max-width grid md:grid-cols-3 grid-cols-1 gap-8">
            {[1, 2, 3, 4, 5, 6].map((value) => (
              <Service
                key={value}
                i={value}
                title="Maecenas massa lorem"
                desc="Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
            ))}
          </div>
        </section>

        {/* Dogs image */}
        <section className="bg-dogs" style={{ height: 730 }}></section>

        {/* Show now */}
        <section className="grid grid-cols-3" style={{ height: 309 }}>
          <div className="bg-blue-dog bg-left-top bg-cover bg-no-repeat p-6 flex">
            <div className="flex flex-1 items-end justify-end flex-col">
              <h3 className="text-4xl font-mouse font-semibold tracking-wider mb-2">
                For Dogs
              </h3>
              <a className="text-link underline">SHOP NOW</a>
            </div>
          </div>
          <div className="bg-pink-dog bg-center bg-cover bg-no-repeat p-6">
            <div className="flex flex-1 items-center flex-col">
              <h3 className="text-4xl font-mouse font-semibold tracking-wider mb-2">
                For Cats
              </h3>
              <a className="text-link underline">SHOP NOW</a>
            </div>
          </div>
          <div className="bg-yellow-dog bg-left-top bg-cover bg-no-repeat flex p-6">
            <div className="flex flex-1 justify-end flex-col">
              <h3 className="text-4xl font-mouse font-semibold tracking-wider mb-2">
                Accessories
              </h3>
              <a className="text-link underline">SHOP NOW</a>
            </div>
          </div>
        </section>

        {/* Featured products */}
        <section>
          {/* Inner container */}
          <div className="with-max-width py-16 flex items-center flex-col">
            <h2 className="text-subtitle uppercase text-center border-b-8 pb-4 border-yellow-400 border-dotted">
              Featured Products
            </h2>

            {/* Product grid */}
            <div className="grid grid-cols-4 mt-8 w-full gap-4">
              <Product />
              <Product /> <Product /> <Product /> <Product /> <Product />
              <Product /> <Product /> <Product /> <Product /> <Product />
              <Product />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
