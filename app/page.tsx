import getCurrentUser from './actions/getCurrentUser';
import getListings, { IListingsParams } from './actions/getListings';
import { ClientOnly, Container, EmptyState } from './components';
import { ListingCard } from './components/listings';

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listing = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (typeof window === 'undefined') {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listing.map((listing) => {
            return (
              <ListingCard
                key={listing.id}
                currentUser={currentUser}
                data={listing}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
