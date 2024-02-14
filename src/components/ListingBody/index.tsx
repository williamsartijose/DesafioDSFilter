import CardFilter from "../CardFilter";
import CardListing from "../CardListing";
import Header from "../Header";

export default function ListingBody() {

    return(
        <>
        <Header />
        <main className="mgT20">
          <section className="dsf-container">
            <CardFilter />
            <CardListing />
          </section>
        </main>
      </>
    );
}