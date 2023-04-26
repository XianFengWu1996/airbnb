import { Container, Heading } from '../components';
import { SafeListing, SafeUser } from '../types';

interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favorite" subtitle="List of place you have favorite" />
    </Container>
  );
};

export default FavoritesClient;
