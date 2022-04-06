import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
  useQuery,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { FaStar } from 'react-icons/fa';

export default function Projects(props) {
  return (
    <div className="h-full px-16 py-32 mx-40">
      <h1 className="inline py-2 mb-8 border-b-4 border-green-400 text-7xl">
        Projects
      </h1>
      <h2 className="mt-12 mb-2 text-xl">
        Some of the <span className="text-green-400">projects</span> I&apos;ve
        worked on!
      </h2>
      <span className="thin">(Fetched using the Github API)</span>
      <div className="grid grid-cols-2 gap-12 my-10">
        {props.repos.map((repo, i) => (
          <div key={i} className="px-6 py-12 border rounded-3xl ">
            <h1 className="mb-4 text-2xl">{repo.nameWithOwner}</h1>
            <span className="text-xl thin">{repo.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  require("dotenv").config();

  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
    {
      user(login: "NebuDev14") {
        pinnedItems(first: 6) {
          totalCount
          edges {
            node {
              ... on Repository {
                id
                url
                stargazerCount
                description
                isInOrganization
                nameWithOwner
              }
            }
          }
        }
      }
    }
    `,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node);


  return {
    props: {
      repos: pinnedItems,
    },
  };
};
